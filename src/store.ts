import { configureStore } from '@reduxjs/toolkit'
import storySlice from './Story/story.slice'
import settingsSlice from './Settings/settings.slice'
import { lineCountAdder } from './Story/story.middleware'
import { loadMiddleware, saveMiddleware } from './game.middleware'

export const store = configureStore({
  reducer: {
    story: storySlice,
    settings: settingsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      lineCountAdder,
      saveMiddleware,
      loadMiddleware,
    ]),
})

export type RootState = ReturnType<typeof store.getState>
export type RootDispatch = typeof store.dispatch
