import LibraryImage from './images/library.jpg'
import BonfireImage from './images/beginning-bonfire.jpg'
import SwordImage from './images/beginning-sword.jpg'
import CampImage from './images/camp.jpg'
import ForrestImage from './images/forrest.jpg'
import MountainImage from './images/mountain.jpg'
import MorningImage from './images/morning.jpg'
import BonfireSound from './sounds/bonfire.wav'
import PageTurnSound from './sounds/page_turn.mp3'
import { ImageAsset, SoundAsset } from './assetTypes'

export const morningImageAsset: ImageAsset = {
  name: 'Morning sunrise',
  type: 'image',
  file: MorningImage,
  credit: 'Dawid Zawiła',
  creditLink: 'https://unsplash.com/photos/-G3rw6Y02D0',
  license: 'unsplash',
}

export const mountainImageAsset: ImageAsset = {
  name: 'Mountain landscape',
  type: 'image',
  file: MountainImage,
  credit: 'Jashandeep Singh Kaleka',
  creditLink: 'https://unsplash.com/photos/0i1xlrAXroY',
  license: 'unsplash',
}

export const forrestImageAsset: ImageAsset = {
  name: 'Forrest path',
  type: 'image',
  file: ForrestImage,
  credit: 'Ali Kazal',
  creditLink: 'https://unsplash.com/photos/nvkLOtFC0Wc',
  license: 'unsplash',
}

export const campImageAsset: ImageAsset = {
  name: 'Medieval camp',
  type: 'image',
  file: CampImage,
  credit: 'Amuljar',
  creditLink:
    'https://pixabay.com/de/photos/mittelalter-zelte-veranstaltung-2111885/',
  license: 'CCO 1.0',
}

export const bonfireImageAsset: ImageAsset = {
  name: 'Bonfire',
  type: 'image',
  file: BonfireImage,
  credit: 'Chirag Nayak',
  creditLink: 'https://unsplash.com/photos/iZwQbx4T8bQ',
  license: 'pixabay',
}

export const libraryImageAsset: ImageAsset = {
  name: 'Library',
  type: 'image',
  file: LibraryImage,
  credit: 'Prateek Katyal',
  creditLink: 'https://unsplash.com/photos/Tl0lYXcyT-A',
  license: 'unsplash',
}

export const swordImageAsset: ImageAsset = {
  name: 'Mystic sword',
  type: 'image',
  file: SwordImage,
  credit: 'Ricardo Cruz',
  creditLink: 'https://unsplash.com/photos/DCqvWkXF74Q',
  license: 'unsplash',
}

export const bonfireSoundAsset: SoundAsset = {
  name: 'Bonfire',
  type: 'sound',
  file: BonfireSound,
  credit: 'forfie',
  creditLink: 'https://freesound.org/people/forfie/sounds/364992/',
  license: 'CCO 1.0',
}

export const pageTurnSoundAsset: SoundAsset = {
  name: 'Page turn',
  type: 'sound',
  file: PageTurnSound,
  credit: 'parteeban',
  creditLink: 'https://freesound.org/people/partheeban/sounds/457767/',
  license: 'CCO 1.0',
}
