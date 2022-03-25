import BonfireImage from './images/bonfire.jpg'
import SwordImage from './images/sword.jpg'
import SwordOriginalImage from './images/sword-original.jpg'
import CampImage from './images/camp.jpg'
import CampOriginalImage from './images/camp-original.jpg'
import ForrestImage from './images/forrest.jpg'
import ForrestOriginalImage from './images/forrest-original.jpg'
import MountainImage from './images/mountain.jpg'
import MountainOriginalImage from './images/mountain-original.jpg'
import MorningImage from './images/morning.jpg'
import FortuneImage from './images/fortune.jpg'
import FortuneOriginalImage from './images/fortune-original.jpg'
import DiceImage from './images/dice.jpg'
import DiceOriginalImage from './images/dice-original.jpg'
import BonfireSound from './sounds/bonfire.wav'
import PageTurnSound from './sounds/page_turn.mp3'
import MorgningBirtsSound from './sounds/birds.mp3'
import ForrestAmbienceSound from './sounds/forrest.mp3'
import MountainMeadowSound from './sounds/mountain.mp3'
import CampSound from './sounds/camp.wav'
import { SwordIcon } from './Icons/SwordIcon'
import { IconAsset, ImageAsset, SoundAsset } from './assetTypes'

export const SwordIconImageAsset: IconAsset = {
  name: 'Sword Icon',
  type: 'icon',
  icon: SwordIcon,
  credit: 'SVG Repo',
  license: 'CC0 1.0',
  creditLink: 'https://www.svgrepo.com/svg/99557/sword',
}

export const diceImageAsset: ImageAsset = {
  name: 'Dice game',
  type: 'image',
  file: DiceImage,
  original: DiceOriginalImage,
  credit: 'Alois Komenda',
  creditLink: 'https://unsplash.com/photos/hAdfTKFXmwM',
  license: 'unsplash',
}

export const fortuneImageAsset: ImageAsset = {
  name: 'Fortune teller',
  type: 'image',
  file: FortuneImage,
  original: FortuneOriginalImage,
  credit: 'Damir Spanic',
  creditLink: 'https://unsplash.com/photos/NZuRKh8hiRA',
  license: 'unsplash',
}

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
  original: MountainOriginalImage,
  credit: 'Jashandeep Singh Kaleka',
  creditLink: 'https://unsplash.com/photos/0i1xlrAXroY',
  license: 'unsplash',
}

export const forrestImageAsset: ImageAsset = {
  name: 'Forrest path',
  type: 'image',
  file: ForrestImage,
  original: ForrestOriginalImage,
  credit: 'Ali Kazal',
  creditLink: 'https://unsplash.com/photos/nvkLOtFC0Wc',
  license: 'unsplash',
}

export const campImageAsset: ImageAsset = {
  name: 'Medieval camp',
  type: 'image',
  file: CampImage,
  original: CampOriginalImage,
  credit: 'Amuljar',
  creditLink:
    'https://pixabay.com/de/photos/mittelalter-zelte-veranstaltung-2111885/',
  license: 'CC0 1.0',
}

export const bonfireImageAsset: ImageAsset = {
  name: 'Bonfire',
  type: 'image',
  file: BonfireImage,
  credit: 'Chirag Nayak',
  creditLink: 'https://unsplash.com/photos/iZwQbx4T8bQ',
  license: 'pixabay',
}

export const swordImageAsset: ImageAsset = {
  name: 'Mystic sword',
  type: 'image',
  file: SwordImage,
  original: SwordOriginalImage,
  credit: 'Ricardo Cruz',
  creditLink: 'https://unsplash.com/photos/DCqvWkXF74Q',
  license: 'unsplash',
}

export const bonfireSoundAsset: SoundAsset = {
  name: 'Bonfire',
  type: 'backgroundMusic',
  file: BonfireSound,
  credit: 'forfie',
  creditLink: 'https://freesound.org/people/forfie/sounds/364992/',
  license: 'CC0 1.0',
}

export const pageTurnSoundAsset: SoundAsset = {
  name: 'Page turn',
  type: 'soundEffect',
  file: PageTurnSound,
  credit: 'parteeban',
  creditLink: 'https://freesound.org/people/partheeban/sounds/457767/',
  license: 'CC0 1.0',
}

export const morningBirdsSoundAsset: SoundAsset = {
  name: 'Birds in the morning',
  type: 'backgroundMusic',
  file: MorgningBirtsSound,
  credit: 'BurghRecords',
  creditLink: 'https://freesound.org/people/BurghRecords/sounds/554513/',
  license: 'CC0 1.0',
}

export const forrestAmbienceSoundAsset: SoundAsset = {
  name: 'Forrest Ambience',
  type: 'backgroundMusic',
  file: ForrestAmbienceSound,
  credit: 'tbrenneche',
  creditLink: 'https://freesound.org/people/tbrenneche/sounds/475566/',
  license: 'CC0 1.0',
  volume: 0.5,
}

export const mountainMeadowSoundAsset: SoundAsset = {
  name: 'Mountain Meadow',
  type: 'backgroundMusic',
  file: MountainMeadowSound,
  credit: 'Tonmeister',
  creditLink: 'https://freesound.org/people/Tonmeister88/sounds/454841/',
  license: 'CC0 1.0',
}

export const campSoundAsset: SoundAsset = {
  name: 'Camp Ambience',
  type: 'backgroundMusic',
  file: CampSound,
  credit: 'GagaMan',
  creditLink: 'https://freesound.org/people/GagaMan/sounds/46730/',
  license: 'CC0 1.0',
  volume: 0.2,
}
