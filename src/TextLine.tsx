/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Text } from '@geist-ui/core'
import { ComponentType, useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fadeIn } from './animations'
import { useSettings } from './Settings/useSettings'
import { RootState } from './store'
import { StoredStoryLine } from './story'
import { lineWasDisplayed } from './Story/story.slice'
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
  const { type, text, wordCount, wasDisplayed } = storyLine
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
  const [isFaded, setIsFaded] = useState(false)
  const { lineFadingTime } = useSettings()

  const words = useMemo(() => lineToWords(text), [text])

  // How lon in ms it will take to display everything.
  const allWordsDelay =
    (wordDelayTime * (wordCount + words.length) +
      wordFadeInTime +
      headingFadeInTime) *
    1000

  // Set this line as displayed after all animations finished.
  useEffect(() => {
    const setDisplayed = () => {
      dispatch(lineWasDisplayed(storyLine.id))
    }
    setTimeout(setDisplayed, allWordsDelay)
  }, [])

  // CSS to remove animation from lines that were previously displayed.
  const alreadyDisplayedCSS = css`
    animation: none;
    opacity: 1;
  `

  useEffect(() => {
    // Delay the fading of the text.
    // Effectively we add the "lineFadeinTime" after all words are displayed.
    const delay = lineFadingTime * 1000 + allWordsDelay
    const fadingTimer = setTimeout(() => setIsFaded(true), delay)
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
