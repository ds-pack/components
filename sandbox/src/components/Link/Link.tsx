import React from 'react'
import { Link as StyledLink } from '@ds-pack/components'
import NextLink from 'next/link'

export default function Link({ href, ...props }) {
  return (
    <NextLink href={href} passHref>
      <StyledLink is="a" {...props} />
    </NextLink>
  )
}
