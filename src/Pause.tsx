/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Button, Drawer, Slider, Text } from '@geist-ui/core'
import { PauseFill } from '@geist-ui/icons'
import { useState } from 'react'
import { useSettings } from './Settings/useSettings'

export const Pause = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { textSpeed, setSpeed } = useSettings()

  const closeDrawer = () => setIsOpen(false)

  return (
    <>
      <PauseFill
        onClick={() => setIsOpen(true)}
        css={css`
          position: fixed;
          top: 1rem;
          left: 1rem;
          opacity: 0.3;
          cursor: pointer;
          transition: all 0.3s ease-in-out;
          &:hover {
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
          padding: 0 1rem;
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
          <Text p>Text speed</Text>
          <Slider value={textSpeed} onChange={setSpeed} max={20} min={1} />
          <div
            css={css`
              flex-grow: 1;
            `}
          ></div>
          <Button onClick={closeDrawer}>Close</Button>
        </Drawer.Content>
      </Drawer>
    </>
  )
}
