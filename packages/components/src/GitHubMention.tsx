import React from 'react'
import { Link, LinkProps } from './Link'

interface GitHubMentionProps extends LinkProps {}

export let GitHubMention = React.forwardRef(function GitHubMention(
  { children, ...props }: GitHubMentionProps,
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
