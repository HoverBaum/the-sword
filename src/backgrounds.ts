import { Background } from './story'
import beginningBonfire from './images/beginning-bonfire.jpg'
import beginningSword from './images/beginning-sword.jpg'

export const backgrounds: Background[] = [
  {
    id: 'beginning/bonfire',
    type: 'image',
    credit: 'Chirag Nayak',
    creditLink: 'https://unsplash.com/photos/iZwQbx4T8bQ',
    src: beginningBonfire,
    textColor: 'white',
  },
  {
    id: 'beginning/sword',
    type: 'image',
    credit: 'Ricardo Cruz',
    creditLink: 'https://unsplash.com/photos/DCqvWkXF74Q',
    src: beginningSword,
    textColor: 'white',
  },
]
