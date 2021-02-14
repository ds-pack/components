import React from 'react'
import { Box, BoxProps } from './Box'

export interface TextProps extends BoxProps {}

export let Text = React.forwardRef(function Text(props: TextProps, ref) {
  return <Box is="p" {...props} ref={ref} />
})
