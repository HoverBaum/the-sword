import { Story } from 'inkjs'
import { useContext } from 'react'
import { StoryContext } from './story.provider'

export const useStory = () => {
  const { state, dispatch, reset, makeChoice } = useContext(StoryContext)

  return {
    paragraphs: state.paragraphs,
    choices: state.choices,
    makeChoice,
    reset,
  }
}
