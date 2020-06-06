import * as React from 'react'
import { Link } from './Link'

interface Props {
  children: string
  [key: string]: any
}

export let GitHubMention = React.forwardRef(function GitHubMention(
  { children, ...props }: Props,
  ref,
) {
  return (
    <Link
      ref={ref}
      forwardedAs="a"
      rel="nooperner noreferrer"
      target="_blank"
      href={`https://github.com/${children}`}
      {...props}
    >
      {children}
    </Link>
  )
})
