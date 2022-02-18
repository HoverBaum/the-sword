import { License, LicenseIdentifier } from './assetTypes'

export const licenses: { [key in LicenseIdentifier]: License } = {
  unsplash: {
    identifier: 'unsplash',
    link: 'https://unsplash.com/license',
  },
  'CC0 1.0': {
    identifier: 'CC0 1.0',
    link: 'https://creativecommons.org/publicdomain/zero/1.0/',
  },
  pixabay: {
    identifier: 'pixabay',
    link: 'https://pixabay.com/de/service/license/',
  },
  'CC BY 4.0': {
    identifier: 'CC BY 4.0',
    link: 'https://creativecommons.org/licenses/by/4.0/',
  },
}
