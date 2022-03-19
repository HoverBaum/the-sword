/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Text } from '@geist-ui/core'
import { ComponentType, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fadeIn } from './animations'
import { useSettings } from './Settings/useSettings'
import { RootState } from './store'
import { StoredStoryLine } from './story'
import { lineHasFaded, lineWasDisplayed } from './Story/story.slice'
import { lineToWords } from './Story/story.util'

export type TextLineProps = {
  storyLine: StoredStoryLine
}

/**
 * A single StoryLine.
 * Takes care of fading in words one after another.
 * StoryLine will fade into less opacity after a while.
 */
export const TextLine: ComponentType<TextLineProps> = ({ storyLine }) => {
  const { type, text, wordCount, wasDisplayed, isFaded } = storyLine
  const {
    headingFadeInTime,
    wordDelayTime,
    wordFadeInTime,
    initiallyDisplayedWords,
  } = useSettings()
  const dispatch = useDispatch()
  const currentLineId = useSelector(
    (state: RootState) => state.story.currentLineId
  )
  const { lineFadingTime } = useSettings()

  const words = useMemo(() => lineToWords(text), [text])

  // How lon in ms it will take to display everything.
  const allWordsDelay =
    (wordDelayTime * (wordCount + words.length) +
      wordFadeInTime +
      headingFadeInTime) *
    1000

  // CSS to remove animation from lines that were previously displayed.
  const alreadyDisplayedCSS = css`
    animation: none;
    opacity: 1;
  `

  // Set this line as displayed after all animations finished.
  useEffect(() => {
    const setDisplayed = () => {
      dispatch(lineWasDisplayed(storyLine.id))
    }
    const displayedTime = setTimeout(setDisplayed, allWordsDelay)
    return () => clearTimeout(displayedTime)
  }, [])

  // Fade the text some time after all words are displayed.
  useEffect(() => {
    const delay = lineFadingTime * 1000 + allWordsDelay
    const setFaded = () => {
      dispatch(lineHasFaded(storyLine.id))
    }
    const fadingTimer = setTimeout(setFaded, delay)
    return () => clearTimeout(fadingTimer)
  }, [])

  if (type === 'title') return <Text h1>{text}</Text>
  if (type === 'chapter heading')
    return (
      <Text
        h2
        css={css`
          opacity: 0;
          animation: ${fadeIn} ${headingFadeInTime}s ease-in-out forwards;
          ${wasDisplayed && alreadyDisplayedCSS}
        `}
      >
        {text}
      </Text>
    )

  if (type === 'section heading')
    return (
      <Text
        h3
        css={css`
          margin-top: 2rem;
          opacity: 0;
          animation: ${fadeIn} ${headingFadeInTime}s ease-in-out forwards;
          ${wasDisplayed && alreadyDisplayedCSS}
        `}
      >
        {text}
      </Text>
    )

  return (
    <Text
      p
      css={css`
        transition: opacity ${wordFadeInTime * 2}s ease-in-out;
        /* All but the current line fade out after some time. */
        ${isFaded && currentLineId !== storyLine.id
          ? css`
              opacity: 0.75;
            `
          : ''}
      `}
    >
      {words.map((word, index) => (
        <span
          key={index + word}
          css={css`
            opacity: 0;
            animation: ${fadeIn} ${wordFadeInTime}s ease-in-out forwards;
            // 0-indexed array require us to add 1 again so the config does what it says.
            animation-delay: ${(wordCount +
              index -
              initiallyDisplayedWords +
              1) *
              wordDelayTime +
            headingFadeInTime}s;
            ${wasDisplayed && alreadyDisplayedCSS}
          `}
        >
          {word + ' '}
        </span>
      ))}
    </Text>
  )
}
