/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react'
import { Text } from '@geist-ui/core'
import { ComponentType } from 'react'
import { fadeIn } from './animations'
import { config } from './config'
import { CountedStoryLine } from './story'
import { lineToWords } from './story.util'

const {
  WORD_DELAY_TIME,
  WORD_FADE_IN_TIME,
  INITIALLY_DISPLAYED_WORDS,
  HEADING_FADE_IN_TIME,
} = config

export type TextLineProps = {
  storyLine: CountedStoryLine
}

export const TextLine: ComponentType<TextLineProps> = ({ storyLine }) => {
  const { type, text, wordCount } = storyLine

  if (type === 'title') return <Text h1>{text}</Text>
  if (type === 'chapter heading')
    return (
      <Text
        h2
        css={css`
          opacity: 0;
          animation: ${fadeIn} ${HEADING_FADE_IN_TIME}s ease-in-out forwards;
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
            animation: ${fadeIn} ${WORD_FADE_IN_TIME}s ease-in-out forwards;
            // 0-indexed array require us to add 1 again so the config does what it says.
            animation-delay: ${(wordCount +
              index -
              INITIALLY_DISPLAYED_WORDS +
              1) *
              WORD_DELAY_TIME +
            HEADING_FADE_IN_TIME}s;
          `}
        >
          {word + ' '}
        </span>
      ))}
    </Text>
  )
}
