import { forwardRef } from 'react'
import { Link, LinkProps } from '../Link'

export interface TwitterMentionProps extends LinkProps {
  children: string
}

export let TwitterMention = forwardRef<any, TwitterMentionProps>(
  function TwitterMention({ children, ...props }: TwitterMentionProps, ref) {
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
  },
)

export default TwitterMention
