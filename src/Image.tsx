import React from 'react'
import { Box } from './Box'
import styled from 'styled-components'

let StyledImage = styled(Box)`
  max-width: 100%;
  height: auto;
`

interface Props {
  src: string
  alt: string
  [key: string]: any
}

export let Image = React.forwardRef(function Image(props: Props, ref) {
  return <StyledImage is="img" ref={ref} {...props} />
})
