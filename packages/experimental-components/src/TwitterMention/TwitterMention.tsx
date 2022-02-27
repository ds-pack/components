import { forwardRef } from 'react'
import { Link, LinkProps } from '../Link'

export interface TwitterMentionProps extends LinkProps {
  children: string
}

export let TwitterMention = forwardRef(function TwitterMention(
  { children, ...props }: TwitterMentionProps,
  ref,
) {
  return (
    // @ts-ignore
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
