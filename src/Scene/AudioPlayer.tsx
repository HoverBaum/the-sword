/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Text } from '@geist-ui/core'
import { Volume2, VolumeX } from '@geist-ui/icons'
import { ComponentType, useState } from 'react'
import { SoundAsset } from '../assetTypes'

export type AudioPlayerProps = {
  sound?: SoundAsset
}

export const AudioPlayer: ComponentType<AudioPlayerProps> = ({ sound }) => {
  const [isMuted, setIsMuted] = useState(true)

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
      <Text span onClick={() => setIsMuted((current) => !current)}>
        {isMuted ? <VolumeX /> : <Volume2 />}
      </Text>
      {sound && (
        <audio src={sound.file} autoPlay={true} loop={true} muted={isMuted} />
      )}
    </div>
  )
}
