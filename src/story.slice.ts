import * as ink from 'inkjs'
import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Scene, ChoiceType, Tag, StoryLine, CountedStoryLine } from './story.d'
import { Story } from 'inkjs/engine/Story'
import { parseChoice, parseTag } from './story.util'
import { StoryDispatch } from './store'
import { scenes } from './scenes'

//@ts-ignore
let story: Story
let currentStoryJSON: string

export interface StoryState {
  globalTags: Tag[]
  title: string
  author: string
  storyLines: CountedStoryLine[]
  choices: ChoiceType[]
  currentTags: Tag[]
  scene: Scene | undefined
}

const initialState: StoryState = {
  globalTags: [],
  title: '',
  author: '',
  storyLines: [],
  choices: [],
  currentTags: [],
  scene: undefined,
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
    setChoices: (state, action: PayloadAction<ChoiceType[]>) => {
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
  },
})

const handleTags = (tags: Tag[], dispatch: StoryDispatch) => {
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

const continueStory = (dispatch: StoryDispatch) => {
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

export const resetStory = (dispatch: StoryDispatch) => {
  tellStory(currentStoryJSON)(dispatch)
}

export const makeChoice = (choice: ChoiceType) => (dispatch: StoryDispatch) => {
  // Dispatch ana ction to make the choice visible in Redux dev tools.
  dispatch({ type: 'story/makeChoice', payload: choice })
  story.ChooseChoiceIndex(choice.index)
  dispatch(clearChoices())
  continueStory(dispatch)
}

export const tellStory = (storyJSON: string) => (dispatch: StoryDispatch) => {
  currentStoryJSON = storyJSON
  dispatch(reset())
  story = new ink.Story(storyJSON)
  if (story.globalTags) {
    const globalTags = story.globalTags.map(parseTag)
    dispatch(setGlobalTags(globalTags))
  } else {
    console.warn('No global tags found in story.')
  }

  continueStory(dispatch)
}

export const addStoryLine = createAction<StoryLine>('story/addStoryLine')

// Action creators are generated for each case reducer function
// Action for internal usage.
const {
  reset,
  clearChoices,
  clearStoryLines,
  setGlobalTags,
  setCurrentTags,
  setBackground,
} = storySlice.actions
// Actions to be used by the application.
export const { addCountedStoryLine, setChoices } = storySlice.actions

export default storySlice.reducer
