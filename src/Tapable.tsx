import * as React from 'react'
import { Box } from './Box'
import { useTapable } from './useTapable'

export let Tapable = React.forwardRef(function Tapable(props, ref) {
  let ariaProps = useTapable(props, ref)
  return <Box {...props} {...ariaProps} />
})
