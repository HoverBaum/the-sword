export type AssetType = 'image' | 'sound'
export type LicenseIdentifier = 'unsplash' | 'pixabay' | 'CCO 1.0'

export type Asset = {
  type: AssetType
  file: string
  credit: string
  creditLink: string
  license: LicenseIdentifier
}

export type ImageAsset = Asset & { type: 'image' }
export type SoundAsset = Asset & { type: 'sound' }

export type License = {
  identifier: LicenseIdentifier
  link: string
}
