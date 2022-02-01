/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Button, Divider, Link, Page, Spacer, Text } from '@geist-ui/core'
import { ArrowLeft } from '@geist-ui/icons'
import * as allAssets from './assets'
import { Asset, AssetType } from './assetTypes'

const assets = Object.values(allAssets)

const only = (type: AssetType) => (asset: Asset) => asset.type === type

export const AssetsPage = () => {
  return (
    <Page>
      <Text h1>Assets</Text>
      <Text>
        Find here an overview of all the assets used in this game and where they
        are from.
      </Text>
      <Button type="secondary" ghost onClick={() => window.history.back()}>
        <ArrowLeft
          size={16}
          css={css`
            margin-right: 0.25rem;
          `}
        />
        Go back
      </Button>

      {/* Images */}
      <Spacer h={3} />
      <Text h2>Images</Text>
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
      <Text h2>Audio</Text>
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

      <Spacer h={3} />
      <Button type="secondary" ghost onClick={() => window.history.back()}>
        <ArrowLeft
          size={16}
          css={css`
            margin-right: 0.25rem;
          `}
        />
        Back
      </Button>
    </Page>
  )
}
