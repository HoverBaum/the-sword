/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Button, Page, Spacer, Text } from '@geist-ui/core'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
  const navigate = useNavigate()
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
      <Text h4>Adventure awaits</Text>

      <Spacer h={3} />
      <Button onClick={() => navigate('/credits')}>Credits</Button>
      <Spacer h={2} />
      <Button onClick={() => navigate('/story')} autoFocus={true}>
        Start game
      </Button>
    </Page>
  )
}
