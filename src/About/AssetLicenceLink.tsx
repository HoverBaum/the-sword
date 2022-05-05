import { Text, Link } from '@geist-ui/core'
import { ComponentType } from 'react'
import { Asset } from '../assetTypes'
import { licenses } from '../licenses'

export const AssetLicenceLink: ComponentType<{ asset: Asset }> = ({
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
      </Link>{' '}
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
