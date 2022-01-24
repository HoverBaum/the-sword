/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react'
import { Text } from '@geist-ui/core'
import { ComponentType } from 'react'
import { CountedStoryLine } from './story'
import { lineToWords } from './story.util'

const INITIALLY_DISPLAYED_WORDS = 3
const WORD_FADE_IN_TIME = 0.5
const WORD_DELAY_TIME = 0.1

export type TextLineProps = {
  storyLine: CountedStoryLine
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const TextLine: ComponentType<TextLineProps> = ({ storyLine }) => {
  const { type, text, wordCount } = storyLine

  if (type === 'title') return <Text h1>text</Text>
  if (type === 'chapter heading') return <Text h2>{text}</Text>

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
            WORD_DELAY_TIME}s;
          `}
        >
          {word + ' '}
        </span>
      ))}
    </Text>
  )
}
