import * as React from 'react'
import { Box } from './Box'
import styled from 'styled-components'

let StyledImage = styled(Box)`
  max-width: 100%;
  height: auto;
`

export let Image = React.forwardRef(function Image(props, ref) {
  return <StyledImage forwardedAs="img" ref={ref} {...props} />
})
