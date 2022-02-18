import { IconComponentType } from './Icons/IconTypes'

export type AssetType = 'image' | 'backgroundMusic' | 'soundEffect' | 'icon'
export type LicenseIdentifier = 'unsplash' | 'pixabay' | 'CC0 1.0' | 'CC BY 4.0'

export type Asset = {
  name: string
  type: AssetType
  credit: string
  creditLink: string
  license: LicenseIdentifier
}

export type FileAsset = {
  file: string
} & Asset

export type IconAsset = Asset & { type: 'icon'; icon: IconComponentType }
export type ImageAsset = FileAsset & { type: 'image' }
export type SoundAsset = FileAsset & {
  type: 'backgroundMusic' | 'soundEffect'
  volume?: number
}

export type License = {
  identifier: LicenseIdentifier
  link: string
}
