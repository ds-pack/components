import React from 'react'
import { Box, Props as BoxProps } from './Box'

export interface Props extends BoxProps {}

export let InlineCode = React.forwardRef(function InlineCode(
  props: Props,
  ref,
) {
  return (
    <Box
      is="code"
      background="$gray-1"
      fontFamily="$monospace"
      display="inline-flex"
      justifyContent="center"
      alignItems="center"
      px=".25em"
      py=".15em"
      borderRadius="$0"
      color="$blue-7"
      {...props}
      ref={ref}
    />
  )
})
