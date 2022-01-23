import { Scene } from "./story"
import beginningBonfire from "./images/beginning-bonfire.jpg"
import beginningSword from "./images/beginning-sword.jpg"
import libraryImage from "./images/library.jpg"
import bonfireSound from "./sounds/bonfire.wav"

export const scenes: Scene[] = [
  {
    id: "library",
    type: "image",
    credit: "Prateek Katyal",
    creditLink: "https://unsplash.com/photos/Tl0lYXcyT-A",
    src: libraryImage,
    textColor: "white",
    backgroundColor: "#1b0a0e",
  },
  {
    id: "beginning/bonfire",
    type: "image",
    credit: "Chirag Nayak",
    creditLink: "https://unsplash.com/photos/iZwQbx4T8bQ",
    src: beginningBonfire,
    textColor: "white",
    backgroundColor: "#2d1a06",
    sound: {
      file: bonfireSound,
    },
  },
  {
    id: "beginning/sword",
    type: "image",
    credit: "Ricardo Cruz",
    creditLink: "https://unsplash.com/photos/DCqvWkXF74Q",
    src: beginningSword,
    textColor: "white",
    backgroundColor: "#1c1f14",
  },
]
