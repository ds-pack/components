import React from 'react'
import { Box, Props as BoxProps } from './Box'

export interface Props extends BoxProps {}

export let Text = React.forwardRef(function Text(props: Props, ref) {
  return <Box is="p" {...props} ref={ref} />
})
