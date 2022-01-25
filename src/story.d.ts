import { ImageAsset, SoundAsset } from './assetTypes'

export type ChoiceType = {
  index: number
  text: string
}

export type StoryLine = {
  text: string
  type: 'paragraph' | 'chapter heading' | 'title'
}

export type Counted = {
  lineNumber: number
  wordCount: number
}

export type CountedStoryLine = Counted & StoryLine
export type CountedChoice = Counted & ChoiceType

export type Tag = {
  originalContent: string
  type: string
  value: string
}

export type Scene = {
  id: string
  textColor: string
  backgroundColor: string
  sound?: SoundAsset
  image: ImageAsset
}
