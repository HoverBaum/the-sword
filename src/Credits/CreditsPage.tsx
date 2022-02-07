/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Button, Divider, Link, Page, Spacer, Text } from '@geist-ui/core'
import { ArrowLeft } from '@geist-ui/icons'
import { AssetsOverview } from './AssetsOverview'

export const CreditsPage = () => {
  return (
    <Page>
      <Text h1>Credits</Text>
      <Text>
        <b>The Sword</b> is created by{' '}
        <Link
          href="https://hendrikwallbaum.de/"
          target="_blank"
          rel="noopener noreferrer"
          icon
          underline
        >
          Hendrik Wallbaum
        </Link>{' '}
        as a technical demonstration of using Ink and React to create a
        "Wanderlust - Travel stories" like experiences.
      </Text>

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
