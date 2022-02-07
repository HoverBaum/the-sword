/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Spacer, Text, Link, Divider } from '@geist-ui/core'
import { ComponentType } from 'react'
import * as allAssets from '../assets'
import { Asset, AssetType, ImageAsset, SoundAsset } from '../assetTypes'
import { licenses } from '../licenses'

const assets = Object.values(allAssets)

const only =
  (...types: AssetType[]) =>
  (asset: Asset) =>
    types.some((type) => asset.type === type)

// Let's keep things simple here and have two components in one file as we always use them together.
// This component only centralizes change.
const AssetLicenceLink: ComponentType<{ asset: ImageAsset | SoundAsset }> = ({
  asset,
}) => {
  return (
    <Text>
      License:{' '}
      <Link
        href={licenses[asset.license].link}
        target="_blank"
        rel="noopener noreferrer"
        icon
        underline
      >
        {asset.license}
      </Link>
      |{' '}
      <Link
        href={asset.creditLink}
        target="_blank"
        rel="noopener noreferrer"
        icon
        underline
      >
        Source
      </Link>
    </Text>
  )
}

export const AssetsOverview = () => {
  return (
    <>
      <Text h2>Assets</Text>
      <Text>
        Find here an overview of all the assets used in this game and where they
        are from.
      </Text>

      {/* Images */}
      <Spacer h={2} />
      <Text h3>Images</Text>
      {assets.filter(only('image')).map((asset) => (
        <div key={asset.creditLink}>
          <div
            css={css`
              padding: 1rem 0;
              display: flex;
            `}
          >
            <div
              css={css`
                width: 200px;
              `}
            >
              <img height="100px" src={asset.file} />
            </div>
            <div>
              <Text>
                {asset.name} by {asset.credit}
              </Text>

              <AssetLicenceLink asset={asset} />
            </div>
          </div>
          <Divider />
        </div>
      ))}

      {/* Audio Assets */}
      <Spacer h={3} />
      <Text h3>Audio</Text>
      {assets.filter(only('soundEffect', 'backgroundMusic')).map((asset) => (
        <div key={asset.creditLink}>
          <div
            css={css`
              padding: 1rem 0;
            `}
          >
            <Text>
              {asset.name} by {asset.credit}
            </Text>

            <AssetLicenceLink asset={asset} />

            <audio src={asset.file} controls />
          </div>
          <Divider />
        </div>
      ))}
    </>
  )
}
