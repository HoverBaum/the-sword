/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { ComponentType, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { storyContent } from '../../story/storyContent'
import { Choices } from './Choices'
import { SceneDisplay } from '../Scene/SceneDisplay'
import { RootState } from '../store'
import { TextLine } from '../TextLine'
import { loadStory, tellStory } from './story.slice'
import { StoryThemeProvider } from './StoryThemeProvider'
import { useSave } from '../useSave'
import { KeyCode, useKeyboard } from '@geist-ui/core'

export const Story: ComponentType = () => {
  const { storyLines, storyState } = useSelector(
    (state: RootState) => state.story
  )
  const dispatch = useDispatch()
  const { hasSaveGame, saveGame } = useSave()
  const storyDivRef = useRef<HTMLDivElement>(null)
  const choicesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (storyState === 'idle') {
      if (hasSaveGame && !!saveGame) {
        //@ts-ignore
        dispatch(loadStory(storyContent, saveGame))
      } else {
        //@ts-ignore
        dispatch(tellStory(storyContent))
      }
    }
  }, [])

  const focusNextButton = (root: HTMLElement) => {
    const buttons = [...root.querySelectorAll('button')]
    const tabableButtons = buttons.filter(
      (button) => button.getAttribute('tabindex') !== '-1'
    )
    const activeIndex = tabableButtons.reduce((foundIndex, button, index) => {
      if (button === document.activeElement) return index
      return foundIndex
    }, -1)
    const nextIndex =
      activeIndex >= tabableButtons.length - 1 ? 0 : activeIndex + 1
    tabableButtons[nextIndex].focus()
  }

  const focusPreviousButton = (root: HTMLElement) => {
    const buttons = [...root.querySelectorAll('button')]
    const tabableButtons = buttons.filter(
      (button) => button.getAttribute('tabindex') !== '-1'
    )
    const activeIndex = tabableButtons.reduce((foundIndex, button, index) => {
      if (button === document.activeElement) return index
      return foundIndex
    }, -1)
    const nextIndex =
      activeIndex <= 0 ? tabableButtons.length - 1 : activeIndex - 1
    tabableButtons[nextIndex].focus()
  }

  useKeyboard(
    (event) => {
      const storyDiv = storyDivRef.current
      if (!storyDiv) return
      if (event.key === 'ArrowDown') focusNextButton(storyDiv)
      if (event.key === 'ArrowUp') focusPreviousButton(storyDiv)
    },
    [KeyCode.DownArrow, KeyCode.UpArrow]
  )

  return (
    <div ref={storyDivRef}>
      <StoryThemeProvider>
        <SceneDisplay>
          <div
            css={css`
              max-width: 40rem;
            `}
          >
            {storyLines.map((line) => (
              <TextLine storyLine={line} key={line.text} />
            ))}
          </div>
          <div ref={choicesRef}>
            <Choices />
          </div>
        </SceneDisplay>
      </StoryThemeProvider>
    </div>
  )
}
