import React from 'react'
import { Link, Props as LinkProps } from './Link'

interface Props extends LinkProps {}

export let TwitterMention = React.forwardRef(function TwitterMention(
  { children, ...props }: Props,
  ref,
) {
  return (
    <Link
      ref={ref}
      is="a"
      rel="nooperner noreferrer"
      target="_blank"
      href={`https://twitter.com/${children}`}
      {...props}
    >
      {children}
    </Link>
  )
})
