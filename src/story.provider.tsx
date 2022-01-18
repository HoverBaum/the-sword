import * as ink from 'inkjs'
import { Choice } from 'inkjs/engine/Choice'
import React, {
  ComponentType,
  Dispatch,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
} from 'react'

export type ChoiceType = {
  index: number
  text: string
}

export type ParagraphType = string

export type StoryState = {
  choices: ChoiceType[]
  paragraphs: ParagraphType[]
}

export type StoryAction = any

export type StoryContextType = {
  state: StoryState
  dispatch: (action: StoryAction) => void
  reset: () => void
  makeChoice: (choiceIndex: number) => void
}

//@ts-ignore
const story = new ink.Story(storyContent)

const initialState: StoryState = {
  choices: [],
  paragraphs: [],
}

export const StoryContext = React.createContext<StoryContextType>({
  state: initialState,
  dispatch: () => {},
  reset: () => {},
  makeChoice: () => {},
})

const reducer = (state: StoryState, action: StoryAction): StoryState => {
  switch (action.type) {
    case 'setChoices':
      return {
        ...state,
        choices: action.choices,
      }
    case 'makeChoice':
      return {
        ...state,
        choices: [],
      }
    case 'reset':
      return initialState
    case 'addParagraph':
      const nextParagraphs = [...state.paragraphs, action.paragraph]
      return {
        ...state,
        paragraphs: nextParagraphs,
      }
    default:
      return state
  }
}

const toChoiceType = (choice: Choice): ChoiceType => ({
  index: choice.index,
  text: choice.text,
})

const continueStory = (dispatch: Dispatch<any>) => {
  while (story.canContinue) {
    dispatch({ type: 'addParagraph', paragraph: story.Continue() })
  }
  dispatch({
    type: 'setChoices',
    choices: story.currentChoices.map(toChoiceType),
  })
}

export const StoryProvider: ComponentType = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  useEffect(() => {
    continueStory(dispatch)
  }, [])

  const reset = useCallback(() => {
    console.log('Resetting story')
    story.ResetState()
    dispatch({ type: 'reset' })
    continueStory(dispatch)
  }, [dispatch])

  const makeChoice = (choiceIndex: number) => {
    story.ChooseChoiceIndex(choiceIndex)
    dispatch({ type: 'makeChoice' })
    continueStory(dispatch)
  }

  const contextValue = useMemo(
    () => ({ state, dispatch, reset, makeChoice }),
    [state, dispatch, reset, makeChoice]
  )

  return (
    <StoryContext.Provider value={contextValue}>
      {children}
    </StoryContext.Provider>
  )
}
