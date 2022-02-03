/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Button } from '@geist-ui/core'
import { ComponentType, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fadeIn } from './animations'
import { useSettings } from './Settings/useSettings'
import { RootState } from './store'
import { makeChoice } from './Story/story.slice'

export type ChoicesProps = {}

export const Choices: ComponentType<ChoicesProps> = () => {
  // We hide choices after users made one and while the story runs.
  const [isHdden, setIsHidden] = useState(true)
  const { choices } = useSelector((state: RootState) => state.story)
  const dispatch = useDispatch()
  const { wordDelayTime, wordFadeInTime } = useSettings()

  // Allways hide new choices.
  useEffect(() => {
    setIsHidden(true)
  }, [choices])

  // Show chocies after all thext faded in.
  useEffect(() => {
    if (choices.length < 1) return
    setTimeout(
      () => setIsHidden(false),
      (choices[0].wordCount * wordDelayTime + wordFadeInTime) * 1000
    )
  }, [choices])

  if (isHdden) return <></>

  return (
    <div
      css={css`
        opacity: 0;
        animation: ${fadeIn} ${wordFadeInTime}s ease-in-out forwards;
      `}
    >
      {choices.map((choice) => (
        <div key={choice.index + choice.text}>
          <br />
          <Button
            key={choice.index + choice.text}
            onClick={() => {
              // Hide again
              setIsHidden(true)
              dispatch(makeChoice(choice))
            }}
            // We focus the first possible choice.
            autoFocus={choice.index === 0}
          >
            {choice.text}
          </Button>
          <br />
        </div>
      ))}
    </div>
  )
}
