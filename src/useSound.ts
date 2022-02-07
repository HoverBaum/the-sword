import { SoundAsset } from './assetTypes'
import { useSettings } from './Settings/useSettings'

// Play a sound using an audio element that gets added to and removed from the DOM.
export const useSound = () => {
  const { isMuted } = useSettings()
  const soundEffectVolume = 0.25

  const playSoundEffect = (sound: SoundAsset, volume?: number) => {
    if (isMuted) return
    const audioElement = new Audio(sound.file)
    audioElement.src = sound.file
    audioElement.loop = false

    // Sound Effects are quieter by default.
    audioElement.volume = volume
      ? soundEffectVolume * volume
      : soundEffectVolume
    document.body.appendChild(audioElement)
    audioElement.play()

    audioElement.onended = () => {
      if (!document.body.contains(audioElement)) return
      document.body.removeChild(audioElement)
    }
  }

  return { playSoundEffect }
}
