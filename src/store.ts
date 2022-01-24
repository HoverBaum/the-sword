import { configureStore, Middleware } from '@reduxjs/toolkit'
import storySlice, {
  addCountedStoryLine,
  addStoryLine,
  setChoices,
  tellStory,
} from './story.slice'
import { storyContent } from '../story/storyContent'
import { CountedStoryLine, StoryLine } from './story'
import { lineToWords } from './story.util'

let countSinceLastChoice = 0
let wordCountSinceLastChoice = 0

const lineCountAdder: Middleware = (store) => (next) => (action) => {
  if (addStoryLine.match(action)) {
    const line: CountedStoryLine = {
      ...(action.payload as StoryLine),
      lineNumber: countSinceLastChoice,
      wordCount: wordCountSinceLastChoice,
    }
    countSinceLastChoice += 1
    wordCountSinceLastChoice += lineToWords(line.text).length
    return next(addCountedStoryLine(line))
  }
  if (setChoices.match(action)) {
    countSinceLastChoice = 0
    wordCountSinceLastChoice = 0
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
