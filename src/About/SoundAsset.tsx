/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Text } from '@geist-ui/core'
import { ComponentType, useEffect } from 'react'
import { SoundAsset } from '../assetTypes'
import { AssetLicenceLink } from './AssetLicenceLink'

export type SoundAssetDisplayProps = {
  sound: SoundAsset
}

export const SoundAssetDisplay: ComponentType<SoundAssetDisplayProps> = ({
  sound,
}) => {
  const id = `SoundAsset-${sound.name.replace(/\s/g, '-')}`

  useEffect(() => {
    const audio = document.querySelector(`#${id}`) as HTMLAudioElement
    if (!audio || !sound) return
    audio.volume = sound.volume || 1
  })

  return (
    <div
      css={css`
        padding: 1rem 0;
      `}
    >
      <Text>
        {sound.name} by {sound.credit}
      </Text>

      <AssetLicenceLink asset={sound} />

      <audio id={id} src={(sound as SoundAsset).file} controls />
    </div>
  )
}
