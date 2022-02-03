/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Text } from '@geist-ui/core'
import { Volume2, VolumeX } from '@geist-ui/icons'
import { ComponentType, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { SoundAsset } from '../assetTypes'
import { useSettings } from '../Settings/useSettings'
import { RootState } from '../store'

export type AudioPlayerProps = {
  sound?: SoundAsset
}

/**
 * Simple component to play background music.
 */
export const AudioPlayer: ComponentType<AudioPlayerProps> = ({ sound }) => {
  // Muted state is linked to the global settings.
  const { isMuted, toggleMute } = useSettings()
  const storyState = useSelector((state: RootState) => state.story.storyState)
  const isPaused = storyState === 'paused'
  const isMutedOrPaused = isMuted || isPaused

  // Stop and start audio when pausing or continuing the game.
  useEffect(() => {
    const audio = document.querySelector('#audioPlayer') as HTMLAudioElement
    if (isMutedOrPaused) {
      audio.pause()
    } else {
      audio.play()
    }
  }, [isMutedOrPaused])

  return (
    <div
      css={css`
        position: fixed;
        top: 1rem;
        right: 1rem;
        cursor: pointer;
        opacity: 0.3;
        transition: all 0.3s ease-out;
        &:hover {
          opacity: 1;
        }
      `}
    >
      <Text span onClick={toggleMute}>
        {isMuted ? <VolumeX /> : <Volume2 />}
      </Text>
      {sound && (
        <audio
          id="audioPlayer"
          src={sound.file}
          loop={true}
          muted={isMutedOrPaused}
        />
      )}
    </div>
  )
}
