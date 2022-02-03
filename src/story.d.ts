import { ImageAsset, SoundAsset } from './assetTypes'

// A choice coming from ink reduced to the minimum.
export type ChoiceType = {
  index: number
  text: string
}

// A single line returned from the ink story.
export type StoryLine = {
  text: string
  type: 'paragraph' | 'chapter heading' | 'title'
}

// Helper to fade things in with the right timing.
export type Counted = {
  // The number of this line after the last choices (0 based).
  lineNumber: number
  // Word in all lines previous to this since last choice.
  wordCount: number
}

export type CountedStoryLine = Counted & StoryLine
export type CountedChoice = Counted & ChoiceType

export type StoredStoryLine = {
  id: string
  // This enables us to navigate back to the same state of the story.
  wasDisplayed: boolean
  isFaded: boolean
} & CountedStoryLine

// A parsed tag from the ink story.
export type Tag = {
  originalContent: string
  type: string
  value: string
}

// Scene that the story is currently taking place in.
export type Scene = {
  id: string
  textColor: string
  backgroundColor: string
  sound?: SoundAsset
  image: ImageAsset
}
