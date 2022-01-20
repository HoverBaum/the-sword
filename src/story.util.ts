import { Choice } from 'inkjs/engine/Choice'
import { ChoiceType, Tag } from './story'

export const parseTag = (tag: string): Tag => {
  const trimmedTag = tag.trim()
  const isValidTag = /^\w+:\s.+$/.test(trimmedTag)
  if (!isValidTag) {
    return {
      originalContent: tag,
      type: 'Malformed',
      value: '',
    }
  }
  const [type, value] = trimmedTag.split(': ')
  return {
    originalContent: tag,
    type,
    value,
  }
}

export const parseChoice = (choice: Choice): ChoiceType => ({
  index: choice.index,
  text: choice.text,
})
