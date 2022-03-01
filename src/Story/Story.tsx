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
import { useArrowNavigation } from '../util/useArrowNavigation'

export const Story: ComponentType = () => {
  const { storyLines, storyState } = useSelector(
    (state: RootState) => state.story
  )
  const dispatch = useDispatch()
  const { hasSaveGame, saveGame } = useSave()
  const storyDivRef = useRef<HTMLDivElement>(null)
  useArrowNavigation(storyDivRef)

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

          <Choices />
        </SceneDisplay>
      </StoryThemeProvider>
    </div>
  )
}
