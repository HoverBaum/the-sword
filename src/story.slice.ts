import * as ink from 'inkjs'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Scene, ChoiceType, ParagraphType, Tag } from './story.d'
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
  paragraphs: ParagraphType[]
  choices: ChoiceType[]
  currentTags: Tag[]
  scene: Scene | undefined
}

const initialState: StoryState = {
  globalTags: [],
  title: '',
  author: '',
  paragraphs: [],
  choices: [],
  currentTags: [],
  scene: undefined,
}

export const storySlice = createSlice({
  name: 'story',
  initialState,
  reducers: {
    addParagraph: (state, action: PayloadAction<string>) => {
      state.paragraphs.push(action.payload)
    },
    clearParagraphs: (state) => {
      state.paragraphs = []
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
    if (/scene/i.test(tag.type)) {
      const background = scenes.find((bg) => bg.id === tag.value)
      if (background) {
        dispatch(setBackground(background))
      } else {
        console.warn('No background configured for tag', tag)
      }
    }
  })
}

const continueStory = (dispatch: StoryDispatch) => {
  while (story.canContinue) {
    dispatch(addParagraph(story.Continue() as string))
    const currentTags = story.currentTags?.map(parseTag) ?? []
    handleTags(currentTags, dispatch)

    console.log('CONTINUE')
    console.log(story.currentText)
    console.log(story.currentTags)
    console.log(story.state)
  }
  dispatch(setChoices(story.currentChoices.map(parseChoice)))
  if (!story.canContinue && story.currentChoices.length === 0) {
    dispatch(addParagraph('The END'))
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
    dispatch(setGlobalTags(story.globalTags.map(parseTag)))
  } else {
    console.warn('No global tags found in story.')
  }

  continueStory(dispatch)
}

// Action creators are generated for each case reducer function
// Action for internal usage.
const {
  addParagraph,
  setChoices,
  reset,
  clearChoices,
  setGlobalTags,
  setCurrentTags,
  setBackground,
} = storySlice.actions
// Actions to be used by the application.
export const {} = storySlice.actions

export default storySlice.reducer
