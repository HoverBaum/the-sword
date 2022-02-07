export type AssetType = 'image' | 'backgroundMusic' | 'soundEffect'
export type LicenseIdentifier = 'unsplash' | 'pixabay' | 'CCO 1.0' | 'CC BY 4.0'

export type Asset = {
  name: string
  type: AssetType
  file: string
  credit: string
  creditLink: string
  license: LicenseIdentifier
}

export type ImageAsset = Asset & { type: 'image' }
export type SoundAsset = Asset & {
  type: 'backgroundMusic' | 'soundEffect'
  volume?: number
}

export type License = {
  identifier: LicenseIdentifier
  link: string
}
