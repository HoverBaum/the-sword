import { Scene } from './story'
import {
  bonfireImageAsset,
  bonfireSoundAsset,
  campImageAsset,
  libraryImageAsset,
  swordImageAsset,
} from './assets'

export const scenes: Scene[] = [
  {
    id: 'library',
    textColor: 'white',
    backgroundColor: '#1b0a0e',
    image: libraryImageAsset,
  },
  {
    id: 'beginning/bonfire',
    textColor: 'white',
    backgroundColor: '#2d1a06',
    sound: bonfireSoundAsset,
    image: bonfireImageAsset,
  },
  {
    id: 'beginning/sword',
    textColor: 'white',
    backgroundColor: '#1c1f14',
    image: swordImageAsset,
  },
  {
    id: 'atTheSword/camp',
    textColor: 'white',
    backgroundColor: '#033300',
    image: campImageAsset,
  },
]
