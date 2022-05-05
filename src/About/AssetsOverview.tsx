/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Spacer, Text, Divider } from '@geist-ui/core'
import * as allAssets from '../assets'
import {
  Asset,
  AssetType,
  IconAsset,
  ImageAsset,
  SoundAsset,
} from '../assetTypes'
import { AssetLicenceLink } from './AssetLicenceLink'
import { SoundAssetDisplay } from './SoundAsset'

const assets = Object.values(allAssets)

const only =
  (...types: AssetType[]) =>
  (asset: Asset) =>
    types.some((type) => asset.type === type)

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
                width: 220px;
              `}
            >
              <img
                width="200px"
                src={
                  (asset as ImageAsset).original || (asset as ImageAsset).file
                }
              />
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
      {assets.filter(only('icon')).map((filteredAsset) => {
        const asset = filteredAsset as IconAsset
        return (
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
                <asset.icon width="100" height="100" />
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
        )
      })}

      {/* Audio Assets */}
      <Spacer h={3} />
      <Text h3>Audio</Text>
      {assets.filter(only('soundEffect', 'backgroundMusic')).map((asset) => (
        <div key={asset.creditLink}>
          <SoundAssetDisplay sound={asset as SoundAsset} />
          <Divider />
        </div>
      ))}
    </>
  )
}
