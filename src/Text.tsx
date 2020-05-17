import * as React from 'react'
import { Box } from './Box'

export let Text = React.forwardRef(function Text(props: any, ref: any) {
  return <Box forwardedAs="p" {...props} ref={ref} />
})
