import { License, LicenseIdentifier } from './assetTypes'

export const licenses: { [key in LicenseIdentifier]: License } = {
  unsplash: {
    identifier: 'unsplash',
    link: 'https://unsplash.com/license',
  },
  'CCO 1.0': {
    identifier: 'CCO 1.0',
    link: 'https://creativecommons.org/publicdomain/zero/1.0/',
  },
  pixabay: {
    identifier: 'pixabay',
    link: 'https://pixabay.com/de/service/license/',
  },
}