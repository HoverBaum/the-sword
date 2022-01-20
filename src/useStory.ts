import { useSelector } from 'react-redux'
import { StoryState } from './store'
import { makeChoice, resetStory } from './story.slice'

export const useStory = () => {
  const { paragraphs, choices } = useSelector(
    (state: StoryState) => state.story
  )

  return {
    paragraphs,
    choices,
    makeChoice,
    resetStory,
  }
}
