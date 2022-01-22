import { Scene } from './story'
import beginningBonfire from './images/beginning-bonfire.jpg'
import beginningSword from './images/beginning-sword.jpg'

export const scenes: Scene[] = [
  {
    id: 'beginning/bonfire',
    type: 'image',
    credit: 'Chirag Nayak',
    creditLink: 'https://unsplash.com/photos/iZwQbx4T8bQ',
    src: beginningBonfire,
    textColor: 'white',
    backgroundColor: '#2d1a06'
  },
  {
    id: 'beginning/sword',
    type: 'image',
    credit: 'Ricardo Cruz',
    creditLink: 'https://unsplash.com/photos/DCqvWkXF74Q',
    src: beginningSword,
    textColor: 'white',
    backgroundColor: '#1c1f14'
  },
]
