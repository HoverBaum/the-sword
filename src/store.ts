import { configureStore } from '@reduxjs/toolkit'
import storySlice, { tellStory } from './Story/story.slice'
import { storyContent } from '../story/storyContent'
import settingsSlice from './Settings/settings.slice'
import { lineCountAdder } from './Story/story.middleware'

export const store = configureStore({
  reducer: {
    story: storySlice,
    settings: settingsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(lineCountAdder),
})

export type RootState = ReturnType<typeof store.getState>
export type RootDispatch = typeof store.dispatch

//@ts-ignore
store.dispatch(tellStory(storyContent))
