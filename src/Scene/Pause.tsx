/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import {
  Button,
  Divider,
  Drawer,
  Link,
  Radio,
  Spacer,
  Text,
} from '@geist-ui/core'
import { PauseFill } from '@geist-ui/icons'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { IconButton } from '../IconButton'
import { Monetization } from '../Monetization/Monetization'
import { useSettings } from '../Settings/useSettings'
import { RootState } from '../store'
import { setStoryState } from '../Story/story.slice'

/**
 * Pause menu that can be opened to the left.
 * This renders a button to open a drawer.
 */
export const Pause = () => {
  const storyState = useSelector((state: RootState) => state.story.storyState)
  const isOpen = storyState === 'paused'
  const dispatch = useDispatch()
  const { textSpeed, setSpeed } = useSettings()
  const navigate = useNavigate()

  const closeDrawer = () => dispatch(setStoryState('running'))
  const openDrawer = () => dispatch(setStoryState('paused'))

  // Custom navigation function so that we close the Drawer on navigation.
  // This prevents a bug where navigation alone doesn't reset overflow:hidden on body.
  const navigateTo =
    (path: string) => (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      closeDrawer()
      e.preventDefault()
      setTimeout(() => navigate(path), 0)
    }

  const selectSpeed = (value: string | number) => {
    if (typeof value !== 'number') return
    setSpeed(value)
  }

  return (
    <>
      <IconButton
        icon={<PauseFill />}
        onClick={openDrawer}
        styling={css`
          position: fixed !important;
          top: 1rem;
          left: 1rem;
          opacity: 0.8;
          cursor: pointer;
          transition: all 0.3s ease-in-out;
          &:hover,
          &:focus {
            opacity: 1;
          }
        `}
      />

      <Drawer
        visible={isOpen}
        onClose={closeDrawer}
        placement="left"
        css={css`
          min-width: 20rem;
          /* Important overwrite more specific rules from the ui lib. */
          padding-right: 2rem !important;
        `}
      >
        <Drawer.Title>Paused</Drawer.Title>
        <Drawer.Subtitle>Take a breath</Drawer.Subtitle>
        <Drawer.Content
          css={css`
            display: flex;
            flex-direction: column;
            /* Well, this is ugly but allows us to keep the semantic of the Drawer. */
            height: 100% !important;
          `}
        >
          <Text>Text speed</Text>

          <Radio.Group
            css={css`
              & span {
                /* Else radio labels are bold. */
                font-weight: normal !important;
              }
            `}
            value={textSpeed}
            onChange={selectSpeed}
          >
            <Radio value={1}>Default</Radio>
            <Radio value={2}>Faster</Radio>
            <Radio value={10000}>Instant</Radio>
          </Radio.Group>

          <Spacer h={1} />
          <Divider />

          <Monetization />
          <Text>
            View{' '}
            <Link onClick={navigateTo('/about')} underline color>
              About
            </Link>
          </Text>
          <div
            css={css`
              /* Only here to move buttons to the buttom. */
              flex-grow: 1;
            `}
          ></div>
          <Button onClick={navigateTo('/')}>Main Menu</Button>
          <Spacer h={1} />
          <Button onClick={closeDrawer} type="secondary" ghost>
            Close
          </Button>
        </Drawer.Content>
      </Drawer>
    </>
  )
}
