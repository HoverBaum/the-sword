/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Button, Page, Spacer, Text } from '@geist-ui/core'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { SwordIcon } from './Icons/SwordIcon'
import { reset } from './Story/story.slice'
import { TextLine } from './TextLine'
import { useSave } from './useSave'
import { useArrowNavigation } from './util/useArrowNavigation'

export const Home = () => {
  const navigate = useNavigate()
  const { hasSaveGame, removeSaveGame } = useSave()
  const dispatch = useDispatch()
  const buttonDivRef = useRef<HTMLDivElement>(null)
  useArrowNavigation(buttonDivRef)

  const newGame = () => {
    removeSaveGame()
    dispatch(reset())
    navigate('/story')
  }

  const continueGame = () => {
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
      <Text h1>
        The Sword <SwordIcon />
      </Text>

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
      <div ref={buttonDivRef}>
        <Button onClick={() => navigate('/about')} type="secondary" ghost>
          About
        </Button>
        <Spacer h={2} />
        <Button
          onClick={newGame}
          autoFocus={!hasSaveGame}
          type="secondary"
          ghost
        >
          New game
        </Button>
        <Spacer h={2} />
        {hasSaveGame && (
          <Button
            onClick={continueGame}
            autoFocus={true}
            type="secondary"
            ghost
          >
            Continue
          </Button>
        )}
      </div>
    </Page>
  )
}
