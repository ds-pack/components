import React from 'react'
import { Box } from './Box'

export let Blockquote = React.forwardRef(function Blockquote(props, ref) {
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
