import { forwardRef } from 'react'
import { Box, BoxProps } from './Box'

export interface BlockquoteProps extends BoxProps {}

export let Blockquote = forwardRef(function Blockquote(
  props: BlockquoteProps,
  ref,
) {
  return (
    <Box
      ref={ref}
      pl="$2"
      borderLeftStyle="solid"
      borderLeftWidth="2px"
      borderLeftColor="$black"
      fontStyle="italic"
      color="$gray-8"
      {...props}
    />
  )
})
