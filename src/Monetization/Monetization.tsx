/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Link, Spacer, Spinner, Text } from '@geist-ui/core'
import { useWebMonetization } from './useWebMonetization'

export const Monetization = () => {
  const state = useWebMonetization()

  if (state === 'deactivated') return null

  if (state === 'loading' || state === 'pending')
    return (
      <div
        css={css`
          display: flex;
          align-items: center;
        `}
      >
        <Text>Web Monetization:</Text>
        <Spacer w={1} />
        <Spinner />
      </div>
    )

  if (state === 'started') return <Text>Web Monetization: active </Text>
  if (state === 'stopped') return <Text>Web Monetization: stopped </Text>

  return (
    <Text>
      Consider supporting this project through{' '}
      <Link color underline href="https://webmonetization.org/">
        Web Monetization
      </Link>
      .
    </Text>
  )
}
