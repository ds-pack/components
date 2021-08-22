import { forwardRef } from 'react'
import { Box, BoxProps } from './Box'

export interface TextProps extends BoxProps {}

export let Text = forwardRef(function Text(props: TextProps, ref) {
  return <Box is="p" {...props} ref={ref} />
})
