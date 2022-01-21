import { configureStore } from '@reduxjs/toolkit'
import storySlice, { tellStory } from './story.slice'
import { storyContent } from '../story/storyContent'

export const store = configureStore({
  reducer: {
    story: storySlice,
  },
})

export type StoryState = ReturnType<typeof store.getState>
export type StoryDispatch = typeof store.dispatch

//@ts-ignore
store.dispatch(tellStory(storyContent))
