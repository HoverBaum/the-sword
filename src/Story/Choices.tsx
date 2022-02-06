/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { ComponentType, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fadeIn } from '../animations'
import { ChoiceButton } from './ChoiceButton'
import { useSettings } from '../Settings/useSettings'
import { RootState } from '../store'
import { choicesWereDisplayed, makeChoice } from './story.slice'

export type ChoicesProps = {}

export const Choices: ComponentType<ChoicesProps> = () => {
  // We hide choices after users made one and while the story runs.
  const [isHdden, setIsHidden] = useState(true)
  const { choices } = useSelector((state: RootState) => state.story)
  const dispatch = useDispatch()
  const { wordDelayTime, wordFadeInTime, headingFadeInTime } = useSettings()

  // Allways hide new choices.
  useEffect(() => {
    if (choices.length === 0) return setIsHidden(true)
    if (choices[0].wasDisplayed) {
      setIsHidden(false)
    } else {
      setIsHidden(true)
    }
  }, [choices])

  // Show chocies after all text faded in.
  useEffect(() => {
    if (choices.length < 1) return
    const delay =
      choices[0].wordCount * wordDelayTime + wordFadeInTime + headingFadeInTime
    const showTimer = setTimeout(() => {
      setIsHidden(false)
      dispatch(choicesWereDisplayed())
    }, delay * 1000)
    return () => window.clearTimeout(showTimer)
  }, [choices])

  if (isHdden) return <></>

  return (
    <div
      css={css`
        opacity: 0;
        animation: ${fadeIn} ${wordFadeInTime * 2}s ease-in-out forwards;
        ${choices.length > 0 &&
        choices[0].wasDisplayed &&
        css`
          animation: none;
          opacity: 1;
        `}
      `}
    >
      {choices.map((choice) => (
        <ChoiceButton
          key={choice.index + choice.text}
          text={choice.text}
          onClick={() => {
            // Hide again
            setIsHidden(true)
            dispatch(makeChoice(choice))
          }}
        />
      ))}
    </div>
  )
}
