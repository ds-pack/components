import * as React from 'react'
import { Link } from './Link'

interface Props {
  children: string
  [key: string]: any
}

export let TwitterMention = React.forwardRef(function TwitterMention(
  { children, ...props }: Props,
  ref,
) {
  return (
    <Link
      ref={ref}
      forwardedAs="a"
      rel="nooperner noreferrer"
      target="_blank"
      href={`https://twitter.com/${children}`}
      {...props}
    >
      {children}
    </Link>
  )
})
