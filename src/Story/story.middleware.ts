import { Middleware } from '@reduxjs/toolkit'
import {
  ChoiceType,
  CountedChoice,
  CountedStoryLine,
  StoryLine,
} from '../story'
import {
  addCountedStoryLine,
  addStoryLine,
  setChoices,
  setCountedChoices,
} from './story.slice'
import { lineToWords } from './story.util'

let linesSinceLastChoice = 0
let wordsSinceLastChoice = 0

export const lineCountAdder: Middleware = (store) => (next) => (action) => {
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
