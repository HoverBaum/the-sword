import { Scene } from './story'
import {
  bonfireImageAsset,
  bonfireSoundAsset,
  campImageAsset,
  forrestImageAsset,
  libraryImageAsset,
  morningImageAsset,
  mountainImageAsset,
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
    id: 'bonfire',
    textColor: 'white',
    backgroundColor: '#010101',
    sound: bonfireSoundAsset,
    image: bonfireImageAsset,
  },
  {
    id: 'morning',
    textColor: 'white',
    backgroundColor: '#4e2d0e',
    image: morningImageAsset,
  },
  {
    id: 'forrest',
    textColor: 'white',
    backgroundColor: '#151f1e',
    image: forrestImageAsset,
  },
  {
    id: 'mountain',
    textColor: 'white',
    backgroundColor: '#0f1a33',
    image: mountainImageAsset,
  },
  {
    id: 'sword',
    textColor: 'white',
    backgroundColor: '#1c1f14',
    image: swordImageAsset,
  },
  {
    id: 'camp',
    textColor: 'white',
    backgroundColor: '#033300',
    image: campImageAsset,
  },
]
