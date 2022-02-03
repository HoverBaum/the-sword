import { Choice } from 'inkjs/engine/Choice'
import { ChoiceType, Tag } from '../story'

/**
 * Parse tags from ink strings into tag objects.
 * @param tag string like '#CHAPTER: Title of chapter'
 */
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

/**
 * Turn ink Choice into our ChoiceType.
 */
export const parseChoice = (choice: Choice): ChoiceType => ({
  index: choice.index,
  text: choice.text,
})

/**
 * Turn a link of text into individual words.
 * Currently just a split by space.
 */
export const lineToWords = (line: string) => line.split(' ')
