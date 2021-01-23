import React from 'react'
import { Link, Props as LinkProps } from './Link'

interface Props extends LinkProps {}

export let GitHubMention = React.forwardRef(function GitHubMention(
  { children, ...props }: Props,
  ref,
) {
  return (
    <Link
      ref={ref}
      is="a"
      rel="nooperner noreferrer"
      target="_blank"
      href={`https://github.com/${children}`}
      {...props}
    >
      {children}
    </Link>
  )
})
