import { Choice } from 'inkjs/engine/Choice'
import { ChoiceType, StoryLine, Tag } from './story'

export const parseTag = (tag: string): Tag => {
  const trimmedTag = tag.trim()
  const isValidTag =
    /^\w+:\s.+$/.test(trimmedTag) || /^[A-Z]+$/.test(trimmedTag)
  if (!isValidTag) {
    return {
      originalContent: tag,
      type: 'malformed',
      value: '',
    }
  }
  const [type, value] = trimmedTag.split(': ')
  return {
    originalContent: tag,
    type: type.toLocaleLowerCase(),
    value,
  }
}

export const parseChoice = (choice: Choice): ChoiceType => ({
  index: choice.index,
  text: choice.text,
})

export const lineToWords = (line: string) => line.split(' ')
