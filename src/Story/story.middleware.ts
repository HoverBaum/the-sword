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

/**
 * Redux middleware to add counts to StoryLines and Choices
 * so we can fade them in with the right timing.
 *
 * Affectively actions to add a StoryLine or Choice are mapped onto
 * actions that add counted versions of them.
 *
 * https://redux.js.org/understanding/history-and-design/middleware
 */
export const lineCountAdder: Middleware = () => (next) => (action) => {
  // Add counts to StoryLines.
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

  // Add counts to Choices.
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
