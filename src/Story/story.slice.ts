import * as ink from 'inkjs'
import {
  createAction,
  createSlice,
  nanoid,
  PayloadAction,
} from '@reduxjs/toolkit'
import {
  Scene,
  ChoiceType,
  Tag,
  StoryLine,
  CountedStoryLine,
  CountedChoice,
  StoredStoryLine,
  StoredChoice,
} from '../story.d'
import { Story } from 'inkjs/engine/Story'
import { parseChoice, parseTag } from './story.util'
import { RootDispatch } from '../store'
import { scenes } from '../scenes'
import { saveGame, SaveGameType } from '../game.middleware'

//@ts-ignore
let story: Story
let currentStoryJSON: string

export type StoryStateType = 'idle' | 'running' | 'paused'

export interface StoryState {
  globalTags: Tag[]
  title: string
  author: string
  storyLines: StoredStoryLine[]
  choices: StoredChoice[]
  currentTags: Tag[]
  scene: Scene | undefined
  mood: string
  currentLineId: string
  storyState: StoryStateType
}

const initialState: StoryState = {
  globalTags: [],
  title: '',
  author: '',
  storyLines: [],
  choices: [],
  currentTags: [],
  scene: undefined,
  mood: '',
  currentLineId: '',
  storyState: 'idle',
}

export const storySlice = createSlice({
  name: 'story',
  initialState,
  reducers: {
    addCountedStoryLine: (state, action: PayloadAction<CountedStoryLine>) => {
      const id = nanoid()
      state.storyLines.push({
        ...action.payload,
        id,
        wasDisplayed: false,
        isFaded: false,
      })
      state.currentLineId = id
    },
    lineHasFaded: (state, action: PayloadAction<string>) => {
      const line = state.storyLines.find((line) => line.id === action.payload)
      if (line) {
        line.isFaded = true
      }
    },
    lineWasDisplayed: (state, action: PayloadAction<string>) => {
      const line = state.storyLines.find((line) => line.id === action.payload)
      if (line) line.wasDisplayed = true
    },
    clearStoryLines: (state) => {
      state.storyLines = []
    },
    setCountedChoices: (state, action: PayloadAction<CountedChoice[]>) => {
      state.choices = action.payload.map((choice) => ({
        ...choice,
        wasDisplayed: false,
      }))
    },
    choicesWereDisplayed: (state) => {
      state.choices.forEach((choice) => (choice.wasDisplayed = true))
    },
    clearChoices: (state) => {
      state.choices = []
    },
    fadeAllLines: (state) => {
      state.storyLines.forEach((line) => {
        if (line.type === 'paragraph') line.isFaded = true
      })
    },
    reset: () => {
      return initialState
    },
    setGlobalTags: (state, action: PayloadAction<Tag[]>) => {
      state.globalTags = action.payload
      // Handle special, global tags.
      action.payload.forEach((tag) => {
        if (tag.type === 'author') {
          state.author = tag.value
        } else if (tag.type === 'title') {
          state.title = tag.value
        }
      })
    },
    setCurrentTags: (state, action: PayloadAction<Tag[]>) => {
      state.currentTags = action.payload
    },
    setScene: (state, action: PayloadAction<Scene>) => {
      state.scene = action.payload
    },
    setMood: (state, action: PayloadAction<string>) => {
      state.mood = action.payload
    },
    setStoryState: (state, action: PayloadAction<StoryStateType>) => {
      state.storyState = action.payload
    },
    loadState: (state, action: PayloadAction<StoryState>) => {
      return action.payload
    },
  },
})

/**
 * Dispatch actions to add the right things for tags.
 */
const handleTags = (tags: Tag[], dispatch: RootDispatch) => {
  dispatch(setCurrentTags(tags))
  tags.forEach((tag) => {
    const tagType = tag.type
    switch (tagType) {
      case 'scene':
        const scene = scenes.find((bg) => bg.id === tag.value)
        if (scene) {
          dispatch(setScene(scene))
        } else {
          console.warn('No background configured for tag', tag)
        }
        break
      case 'clear':
        dispatch(clearStoryLines())
        break
      case 'chapter':
        dispatch(addStoryLine({ text: tag.value, type: 'chapter heading' }))
        break
      case 'title':
        dispatch(addStoryLine({ text: tag.value, type: 'title' }))
        break
      case 'section':
        dispatch(addStoryLine({ text: tag.value, type: 'section heading' }))
      default:
        break
    }
  })
}

/**
 * Continue story as much as possible and add all StoryLines, tags and Choices.
 */
const continueStory = (dispatch: RootDispatch) => {
  while (story.canContinue) {
    // It is important to continue first to get the tags we expect.
    const nextLine = story.Continue() as string
    // currentTags are for the last line returned from continue.
    const currentTags = story.currentTags?.map(parseTag) ?? []
    // We handle the tags first because they might be a heading
    // or chaning the scene and we want that to happen first.
    handleTags(currentTags, dispatch)
    dispatch(addStoryLine({ text: nextLine, type: 'paragraph' }))
  }
  dispatch(setChoices(story.currentChoices.map(parseChoice)))
  if (!story.canContinue && story.currentChoices.length === 0) {
    dispatch(addStoryLine({ text: 'The END', type: 'paragraph' }))
  }
}

export const resetStory = (dispatch: RootDispatch) => {
  tellStory(currentStoryJSON)(dispatch)
}

export const makeChoice = (choice: ChoiceType) => (dispatch: RootDispatch) => {
  // Dispatch an action to make the choice visible in Redux dev tools.
  dispatch({ type: 'story/makeChoice', payload: choice })
  story.ChooseChoiceIndex(choice.index)
  dispatch(clearChoices())
  dispatch(fadeAllLines())
  continueStory(dispatch)
  dispatch(saveGame())
}

/**
 * Extract the value of a variable from the ink story
 * represented in a  set.
 */
const valueForVariableSet = (set: Set<any>): string | undefined => {
  try {
    const jsonVariable = set.keys().next().value
    const variableState = JSON.parse(jsonVariable)
    const value: string = variableState.itemName
    return value
  } catch (e) {
    console.error('Error getting value from variable set', set, e)
  }
  return undefined
}

const watchMood = (story: Story, dispatch: RootDispatch) => {
  const initialMood = valueForVariableSet(
    //@ts-ignore
    story.variablesState['mood']
  )
  dispatch(setMood(initialMood || ''))

  // Watch mood for changes.
  story.ObserveVariable('mood', (variableName, moodSet) => {
    try {
      const jsonVariable = moodSet.keys().next().value
      const variableState = JSON.parse(jsonVariable)
      const mood = variableState.itemName
      dispatch(setMood(mood))
    } catch (e) {
      console.error('Error getting mood', e)
    }
  })
}

/**
 * Start telling a story.
 */
export const tellStory = (storyJSON: string) => (dispatch: RootDispatch) => {
  currentStoryJSON = storyJSON
  dispatch(reset())
  story = new ink.Story(storyJSON)
  //@ts-ignore
  window.story = story // Adding story to the window for debugging.
  watchMood(story, dispatch)
  if (story.globalTags) {
    const globalTags = story.globalTags.map(parseTag)
    dispatch(setGlobalTags(globalTags))
  } else {
    console.warn('No global tags found in story.')
  }

  continueStory(dispatch)
}

export const loadStory =
  (storyJSON: string, saveGame: SaveGameType | undefined) =>
  (dispatch: RootDispatch) => {
    if (!saveGame) {
      console.error(
        'Trying to load without saveGame. Restarting story instead!'
      )
      return tellStory(storyJSON)(dispatch)
    }
    dispatch(loadState(saveGame.store))
    story = new ink.Story(storyJSON)
    //@ts-ignore
    window.story = story // Adding story to the window for debugging.
    watchMood(story, dispatch)

    // Load the save game.
    story.state.LoadJson(saveGame.storyState)
  }

// Actions that only ever go into the middleware.
export const addStoryLine = createAction<StoryLine>('story/addStoryLine')
export const setChoices = createAction<ChoiceType[]>('story/setChoices')

// Action creators are generated for each case reducer function
// Action for internal usage.
const {
  clearChoices,
  clearStoryLines,
  setGlobalTags,
  setCurrentTags,
  setScene,
  setMood,
  loadState,
  fadeAllLines,
} = storySlice.actions
// Actions to be used by the application.
export const {
  reset,
  addCountedStoryLine,
  setCountedChoices,
  setStoryState,
  lineWasDisplayed,
  lineHasFaded,
  choicesWereDisplayed,
} = storySlice.actions

export default storySlice.reducer
