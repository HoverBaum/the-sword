/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Button, Spacer, Text, Link, Divider } from '@geist-ui/core'
import { ArrowLeft } from '@geist-ui/icons'
import * as allAssets from '../assets'
import { Asset, AssetType } from '../assetTypes'

const assets = Object.values(allAssets)

const only = (type: AssetType) => (asset: Asset) => asset.type === type

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

              <Text>
                {asset.license} -{' '}
                <Link
                  href={asset.creditLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  icon
                  underline
                >
                  Original Link
                </Link>
              </Text>
            </div>
          </div>
          <Divider />
        </div>
      ))}

      {/* Audio Assets */}
      <Spacer h={3} />
      <Text h3>Audio</Text>
      {assets.filter(only('sound')).map((asset) => (
        <div key={asset.creditLink}>
          <div
            css={css`
              padding: 1rem 0;
            `}
          >
            <Text>
              {asset.name} by {asset.credit}
            </Text>

            <Text>
              {asset.license} -{' '}
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

            <audio src={asset.file} controls />
          </div>
          <Divider />
        </div>
      ))}
    </>
  )
}