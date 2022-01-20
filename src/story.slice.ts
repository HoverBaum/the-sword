import * as ink from 'inkjs'
import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit'
import { ChoiceType, ParagraphType } from './story.d'
import { Choice } from 'inkjs/engine/Choice'
import { Story } from 'inkjs/engine/Story'

//@ts-ignore
let story: Story

export interface StoryState {
  title: string
  paragraphs: ParagraphType[]
  choices: ChoiceType[]
}

const initialState: StoryState = {
  title: '',
  paragraphs: [],
  choices: [],
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
  },
})

const toChoiceType = (choice: Choice): ChoiceType => ({
  index: choice.index,
  text: choice.text,
})

const continueStory = (dispatch: Dispatch) => {
  while (story.canContinue) {
    dispatch(addParagraph(story.Continue() as string))
  }
  dispatch(setChoices(story.currentChoices.map(toChoiceType)))
  if (!story.canContinue && story.currentChoices.length === 0) {
    dispatch(addParagraph('The END'))
  }
}

export const resetStory = (dispatch: Dispatch) => {
  dispatch(reset())
  story.ResetState()
  continueStory(dispatch)
}

export const makeChoice = (choice: ChoiceType) => (dispatch: Dispatch) => {
  // Dispatch ana ction to make the choice visible in Redux dev tools.
  dispatch({ type: 'story/makeChoice', payload: choice })
  story.ChooseChoiceIndex(choice.index)
  dispatch(clearChoices())
  continueStory(dispatch)
}

export const tellStory = (storyJSON: string) => (dispatch: Dispatch) => {
  dispatch(reset())
  story = new ink.Story(storyJSON)
  continueStory(dispatch)
}

// Action creators are generated for each case reducer function
// Action for internal usage.
const { addParagraph, setChoices, reset, clearChoices } = storySlice.actions
// Actions to be used by the application.
export const {} = storySlice.actions

export default storySlice.reducer
