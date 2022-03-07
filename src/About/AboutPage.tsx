/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Button, Divider, Link, Page, Spacer, Text } from '@geist-ui/core'
import { ArrowLeft } from '@geist-ui/icons'
import { Monetization } from '../Monetization/Monetization'
import { useWebMonetization } from '../Monetization/useWebMonetization'
import { AssetsOverview } from './AssetsOverview'

export const AboutPage = () => {
  const monitizationState = useWebMonetization()
  return (
    <Page>
      <Text h1>About</Text>
      <Text>
        <b>The Sword</b> is created by{' '}
        <Link
          href="https://hendrikwallbaum.de/"
          target="_blank"
          rel="noopener noreferrer"
          icon
          underline
        >
          Hendrik Wallbaum.
        </Link>{' '}
        The game is highly inspired by "Wanderlust - Travel stories" and build
        upon React, using ink as it's story engine.
      </Text>

      <Text>
        This Project is Open Source and available on{' '}
        <Link
          href="https://github.com/HoverBaum/the-sword"
          icon
          underline
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Link>
        .
      </Text>

      {monitizationState !== 'deactivated' && (
        <>
          <Text>
            You can support <b>The Sword</b> through{' '}
            <Link
              underline
              icon
              target="_blank"
              rel="noopener noreferrer"
              href="https://webmonetization.org/"
            >
              Web Monetization
            </Link>
            .
          </Text>
          <Monetization />
        </>
      )}

      <Button type="secondary" ghost onClick={() => window.history.back()}>
        <ArrowLeft
          size={16}
          css={css`
            margin-right: 0.25rem;
          `}
        />
        Back
      </Button>
      <Spacer h={1} />

      <Divider />

      <AssetsOverview />

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
