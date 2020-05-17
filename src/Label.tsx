import * as React from 'react'
import { Box } from './Box'

export let Label = React.forwardRef(function Label(props: any, ref: any) {
  return (
    <Box
      forwardedAs="label"
      display="flex"
      flexDirection="column"
      {...props}
      ref={ref}
    />
  )
})
