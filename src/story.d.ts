export type ChoiceType = {
  index: number
  text: string
}

export type StoryLine = {
  text: string
  type: 'paragraph' | 'chapter heading' | 'title'
}

export type Tag = {
  originalContent: string
  type: string
  value: string
}

export type ImageBackground = {
  type: 'image'
  credit: string
  creditLink: string
  src: string
}

export type Sound = {
  file: string
  volume?: number
}

export type Scene = {
  id: string
  textColor: string
  backgroundColor: string
  sound?: Sound
} & ImageBackground
