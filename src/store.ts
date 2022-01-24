import { configureStore, Middleware } from '@reduxjs/toolkit'
import storySlice, {
  addCountedStoryLine,
  addStoryLine,
  setChoices,
  setCountedChoices,
  tellStory,
} from './story.slice'
import { storyContent } from '../story/storyContent'
import { ChoiceType, CountedChoice, CountedStoryLine, StoryLine } from './story'
import { lineToWords } from './story.util'

let linesSinceLastChoice = 0
let wordsSinceLastChoice = 0

const lineCountAdder: Middleware = (store) => (next) => (action) => {
  if (addStoryLine.match(action)) {
    const line: CountedStoryLine = {
      ...(action.payload as StoryLine),
      lineNumber: linesSinceLastChoice,
      wordCount: wordsSinceLastChoice,
    }
    linesSinceLastChoice += 1
    wordsSinceLastChoice += lineToWords(line.text).length
    return next(addCountedStoryLine(line))
  }
  if (setChoices.match(action)) {
    const choices: CountedChoice[] = (action.payload as ChoiceType[]).map(
      (choice) => ({
        ...choice,
        lineNumber: linesSinceLastChoice,
        wordCount: wordsSinceLastChoice,
      })
    )
    linesSinceLastChoice = 0
    wordsSinceLastChoice = 0
    return next(setCountedChoices(choices))
  }
  return next(action)
}

export const store = configureStore({
  reducer: {
    story: storySlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(lineCountAdder),
})

export type StoryState = ReturnType<typeof store.getState>
export type StoryDispatch = typeof store.dispatch

//@ts-ignore
store.dispatch(tellStory(storyContent))
