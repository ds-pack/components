import React from 'react'
import { Box, BoxProps } from './Box'
import styled from 'styled-components'

let StyledImage = styled(Box)`
  max-width: 100%;
  height: auto;
`

export interface ImageProps extends BoxProps {
  src: string
  alt: string
}

export let Image = React.forwardRef(function Image(props: ImageProps, ref) {
  return <StyledImage is="img" ref={ref} {...props} />
})
