import React from 'react'
import { Box, Props as BoxProps } from './Box'

export interface Props extends BoxProps {}

export let Label = React.forwardRef(function Label(props: Props, ref) {
  return (
    <Box
      is="label"
      display="flex"
      flexDirection="column"
      {...props}
      ref={ref}
    />
  )
})
