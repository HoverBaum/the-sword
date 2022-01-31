/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { ComponentType } from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { Choices } from '../Choices'
import { SceneDisplay } from '../Scene/SceneDisplay'
import { RootState } from '../store'
import { TextLine } from '../TextLine'
import { StoryThemeProvider } from './StoryThemeProvider'

export const Story: ComponentType = () => {
  const { storyLines } = useSelector((state: RootState) => state.story)

  return (
    <StoryThemeProvider>
      <Outlet />
      <SceneDisplay>
        <div
          css={css`
            max-width: 40rem;
          `}
        >
          {storyLines.map((line) => (
            <TextLine storyLine={line} key={line.text} />
          ))}

          <Choices />
        </div>
      </SceneDisplay>
    </StoryThemeProvider>
  )
}
