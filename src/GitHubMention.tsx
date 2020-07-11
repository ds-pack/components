import * as React from 'react'
import { Link } from './Link'
import { types } from '@ds-pack/property-controls'

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

let propertyControls = {
  children: {
    type: types.string,
    label: `The GitHub username being linked to`,
    default: 'hamlim',
  },
}
