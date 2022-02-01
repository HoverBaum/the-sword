/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Text } from '@geist-ui/core'
import { ComponentType, useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { fadeIn } from './animations'
import { useSettings } from './Settings/useSettings'
import { RootState } from './store'
import { StoredStoryLine } from './story'
import { lineToWords } from './Story/story.util'

export type TextLineProps = {
  storyLine: StoredStoryLine
}

export const TextLine: ComponentType<TextLineProps> = ({ storyLine }) => {
  const { type, text, wordCount } = storyLine
  const {
    headingFadeInTime,
    wordDelayTime,
    wordFadeInTime,
    initiallyDisplayedWords,
  } = useSettings()
  const currentLineId = useSelector(
    (state: RootState) => state.story.currentLineId
  )
  const [isFaded, setIsFaded] = useState(false)
  const { lineFadingTime } = useSettings()

  const words = useMemo(() => lineToWords(text), [text])

  useEffect(() => {
    // Delay the fading of the text.
    // Effectively we add the "lineFadeinTime" after all words are displayed.
    const allWordsDelay =
      (wordDelayTime * (wordCount + words.length) +
        wordFadeInTime +
        headingFadeInTime) *
      1000
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
          `}
        >
          {word + ' '}
        </span>
      ))}
    </Text>
  )
}
