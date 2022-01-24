import { Text } from '@geist-ui/core'
import { ComponentType } from 'react'
import { StoryLine } from './story'

export type TextLineProps = {
  storyLine: StoryLine
}

export const TextLine: ComponentType<TextLineProps> = ({ storyLine }) => {
  const { type, text } = storyLine
  return (
    <Text
      h2={type === 'chapter heading'}
      p={type === 'paragraph'}
      h1={type === 'title'}
    >
      {text}
    </Text>
  )
}
