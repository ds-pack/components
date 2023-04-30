import { Stack, Heading, Link as StyledLink, Text } from '@ds-pack/daisyui'
import Link from 'next/link'

export default function Headings() {
  return (
    <>
      <Stack gap="4" className="m-10">
        <StyledLink is={Link} href="/">
          Back
        </StyledLink>
        <Heading is="h1" variant="lead">
          Lead
        </Heading>
        <Heading is="h1" variant="h1">
          h1
        </Heading>
        <Heading is="h2" variant="h2">
          h2
        </Heading>
        <Heading is="h3" variant="h3">
          h3
        </Heading>
        <Heading is="h4" variant="subhead">
          subhead
        </Heading>
        <Heading is="h5" variant="subhead">
          subhead
        </Heading>
        <Heading is="h6" variant="subhead">
          subhead
        </Heading>
        <Text>Text</Text>
      </Stack>
    </>
  )
}
