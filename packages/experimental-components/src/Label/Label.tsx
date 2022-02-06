import { forwardRef } from 'react'
import { Box, BoxProps } from '../Box'

export interface LabelProps extends BoxProps {}

export let Label = forwardRef(function Label(props: LabelProps, ref) {
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
