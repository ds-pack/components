import { Box, Link } from '@ds-pack/components'
import NextLink from 'next/link'

export default function Foo() {
  return (
    <Box>
      Server Components!
      <Link is={NextLink} href="/">
        Go back
      </Link>
    </Box>
  )
}
