import { SoundAsset } from './assetTypes'

// Play a sound using an audio element that gets added to and removed from the DOM.
export const useSound = () => {
  const play = (sound: SoundAsset, volume?: number) => {
    const audioElement = new Audio(sound.file)
    audioElement.src = sound.file
    audioElement.loop = false
    audioElement.volume = volume || 1
    document.body.appendChild(audioElement)
    audioElement.play()

    audioElement.onended = () => {
      if (!document.body.contains(audioElement)) return
      document.body.removeChild(audioElement)
    }
  }

  return { play }
}
