/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react'
import { Text } from '@geist-ui/core'
import { ComponentType } from 'react'
import { fadeIn } from './animations'
import { useSettings } from './Settings/useSettings'
import { CountedStoryLine } from './story'
import { lineToWords } from './Story/story.util'

export type TextLineProps = {
  storyLine: CountedStoryLine
}

export const TextLine: ComponentType<TextLineProps> = ({ storyLine }) => {
  const { type, text, wordCount } = storyLine
  const {
    headingFadeInTime,
    wordDelayTime,
    wordFadeInTime,
    initiallyDisplayedWords,
  } = useSettings()

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
    <Text p>
      {lineToWords(text).map((word, index) => (
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
