/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Button, Page, Spacer, Text } from '@geist-ui/core'
import { useNavigate } from 'react-router-dom'
import { TextLine } from './TextLine'

export const Home = () => {
  const navigate = useNavigate()

  const startGame = () => {
    navigate('/story')
  }

  return (
    <Page
      css={css`
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
      `}
    >
      <Text h1>The Sword 🗡</Text>

      <TextLine
        storyLine={{
          text: 'There are many stories worth telling, this is but one of them.',
          id: 'home',
          lineNumber: 0,
          wordCount: 0,
          type: 'paragraph',
          wasDisplayed: false,
          isFaded: false,
        }}
      />

      <Spacer h={3} />
      <Button onClick={() => navigate('/about')} type="secondary" ghost>
        About
      </Button>
      <Spacer h={2} />
      <Button onClick={startGame} autoFocus={true} type="secondary" ghost>
        Start game
      </Button>
    </Page>
  )
}
