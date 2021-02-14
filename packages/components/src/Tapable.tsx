import React from 'react'
import { Box, Props as BoxProps } from './Box'
import { useTapable } from './useTapable'

export interface Props extends BoxProps {}

export let Tapable = React.forwardRef(function Tapable(props: Props, ref) {
  let ariaProps = useTapable(props, ref)
  return <Box {...props} {...ariaProps} />
})
