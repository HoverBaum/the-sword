/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { Text, Link } from "@geist-ui/core"
import { ComponentType } from "react"

export type CreditProps = {
  href: string
  backgroundColor: string
}

export const Credit: ComponentType<CreditProps> = ({
  href,
  children,
  backgroundColor,
}) => {
  return (
    <Text
      span
      css={css`
        position: fixed;
        display: block;
        padding: 0 0.5rem;
        border-radius: 5px;
        bottom: 1rem;
        right: 1rem;
        opacity: 0.3;
        transition: all 0.3s ease-in-out;
        &:hover {
          opacity: 0.8;
          background-color: ${backgroundColor || "inherit"};
        }
      `}
    >
      <Link href={href} target="_blank" rel="noopener noreferrer" underline>
        {children}
      </Link>
    </Text>
  )
}
