import { createAction, Middleware } from '@reduxjs/toolkit'
import { Story } from 'inkjs/engine/Story'

export const saveGame = createAction('game/save')
export const loadGame = createAction('game/load')

export const saveMiddleware: Middleware = (store) => (next) => (action) => {
  if (saveGame.match(action)) {
    //@ts-ignore
    const story: Story = window.story
    const storyState = story.state.toJson()
    console.log(storyState)
    localStorage.setItem('story', storyState)
  }

  return next(action)
}

export const loadMiddleware: Middleware = (store) => (next) => (action) => {
  if (loadGame.match(action)) {
    console.log('loading game')
    const storyState = localStorage.getItem('story')
    if (storyState) {
      //@ts-ignore
      const story = window.story as Story
      story.state.LoadJson(storyState)
    }
  }

  return next(action)
}
