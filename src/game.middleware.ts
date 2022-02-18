import { createAction, Middleware } from '@reduxjs/toolkit'
import { Story } from 'inkjs/engine/Story'
import { StoryState } from './Story/story.slice'

export type SaveGameType = {
  store: StoryState
  storyState: string
}

export const saveGame = createAction('game/save')

export const saveMiddleware: Middleware = (store) => (next) => (action) => {
  const saveGameKey = store.getState().settings.savegameKey
  if (saveGame.match(action)) {
    //@ts-ignore
    const story: Story = window.story
    const storyState = story.state.toJson()
    const saveGame: SaveGameType = {
      storyState,
      store: store.getState().story,
    }
    console.log(storyState)
    localStorage.setItem(saveGameKey, JSON.stringify(saveGame))
  }

  return next(action)
}
