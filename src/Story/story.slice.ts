import * as ink from 'inkjs'
import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  Scene,
  ChoiceType,
  Tag,
  StoryLine,
  CountedStoryLine,
  CountedChoice,
} from '../story.d'
import { Story } from 'inkjs/engine/Story'
import { parseChoice, parseTag } from './story.util'
import { RootDispatch } from '../store'
import { scenes } from '../scenes'

//@ts-ignore
let story: Story
let currentStoryJSON: string

export interface StoryState {
  globalTags: Tag[]
  title: string
  author: string
  storyLines: CountedStoryLine[]
  choices: CountedChoice[]
  currentTags: Tag[]
  scene: Scene | undefined
  mood: string
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
}

export const storySlice = createSlice({
  name: 'story',
  initialState,
  reducers: {
    addCountedStoryLine: (state, action: PayloadAction<CountedStoryLine>) => {
      state.storyLines.push(action.payload)
    },
    clearStoryLines: (state) => {
      state.storyLines = []
    },
    setCountedChoices: (state, action: PayloadAction<CountedChoice[]>) => {
      state.choices = action.payload
    },
    clearChoices: (state) => {
      state.choices = []
    },
    reset: () => {
      return initialState
    },
    setGlobalTags: (state, action: PayloadAction<Tag[]>) => {
      state.globalTags = action.payload
      // Handle special tags.
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
    setBackground: (state, action: PayloadAction<Scene>) => {
      state.scene = action.payload
    },
    setMood: (state, action: PayloadAction<string>) => {
      state.mood = action.payload
    },
  },
})

const handleTags = (tags: Tag[], dispatch: RootDispatch) => {
  dispatch(setCurrentTags(tags))
  tags.forEach((tag) => {
    const tagType = tag.type
    switch (tagType) {
      case 'scene':
        const background = scenes.find((bg) => bg.id === tag.value)
        if (background) {
          dispatch(setBackground(background))
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
      default:
        break
    }
  })
}

const continueStory = (dispatch: RootDispatch) => {
  while (story.canContinue) {
    const nextLine = story.Continue() as string
    const currentTags = story.currentTags?.map(parseTag) ?? []
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
  // Dispatch ana ction to make the choice visible in Redux dev tools.
  dispatch({ type: 'story/makeChoice', payload: choice })
  story.ChooseChoiceIndex(choice.index)
  dispatch(clearChoices())
  continueStory(dispatch)
}

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

export const tellStory = (storyJSON: string) => (dispatch: RootDispatch) => {
  currentStoryJSON = storyJSON
  dispatch(reset())
  story = new ink.Story(storyJSON)
  //@ts-ignore
  window.story = story
  watchMood(story, dispatch)
  if (story.globalTags) {
    const globalTags = story.globalTags.map(parseTag)
    dispatch(setGlobalTags(globalTags))
  } else {
    console.warn('No global tags found in story.')
  }

  continueStory(dispatch)
}

export const addStoryLine = createAction<StoryLine>('story/addStoryLine')
export const setChoices = createAction<ChoiceType[]>('story/setChoices')

// Action creators are generated for each case reducer function
// Action for internal usage.
const {
  reset,
  clearChoices,
  clearStoryLines,
  setGlobalTags,
  setCurrentTags,
  setBackground,
  setMood,
} = storySlice.actions
// Actions to be used by the application.
export const { addCountedStoryLine, setCountedChoices } = storySlice.actions

export default storySlice.reducer
