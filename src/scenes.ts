import { Scene } from './story'
import {
  bonfireImageAsset,
  bonfireSoundAsset,
  campImageAsset,
  forrestAmbienceSoundAsset,
  forrestImageAsset,
  morningBirdsSoundAsset,
  morningImageAsset,
  mountainImageAsset,
  mountainMeadowSoundAsset,
  swordImageAsset,
} from './assets'

export const scenes: Scene[] = [
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
    sound: morningBirdsSoundAsset,
    image: morningImageAsset,
  },
  {
    id: 'forrest',
    textColor: 'white',
    backgroundColor: '#151f1e',
    sound: forrestAmbienceSoundAsset,
    image: forrestImageAsset,
  },
  {
    id: 'mountain',
    textColor: 'white',
    backgroundColor: '#0f1a33',
    sound: mountainMeadowSoundAsset,
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
