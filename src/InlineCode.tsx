import * as React from 'react'
import { Box } from './Box'

export let InlineCode = React.forwardRef(function InlineCode(
  props: any,
  ref: any,
) {
  return (
    <Box
      forwardedAs="code"
      bg="gray.1"
      fontFamily="monospace"
      display="inline-flex"
      justifyContent="center"
      alignItems="center"
      px=".25em"
      py=".15em"
      borderRadius={0}
      color="blue.7"
      {...props}
      ref={ref}
    />
  )
})
