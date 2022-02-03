/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { ComponentType, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { storyContent } from '../../story/storyContent'
import { Choices } from '../Choices'
import { SceneDisplay } from '../Scene/SceneDisplay'
import { RootState } from '../store'
import { TextLine } from '../TextLine'
import { tellStory } from './story.slice'
import { StoryThemeProvider } from './StoryThemeProvider'

export const Story: ComponentType = () => {
  const { storyLines } = useSelector((state: RootState) => state.story)
  const dispatch = useDispatch()

  useEffect(() => {
    //@ts-ignore
    dispatch(tellStory(storyContent))
  }, [])

  return (
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
  )
}
