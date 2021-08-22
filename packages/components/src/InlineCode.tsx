import { forwardRef } from 'react'
import { Box, BoxProps } from './Box'

export interface InlineCodeProps extends BoxProps {}

export let InlineCode = forwardRef(function InlineCode(
  props: InlineCodeProps,
  ref,
) {
  return (
    <Box
      is="code"
      bg="$gray-1"
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
