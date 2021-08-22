import { forwardRef } from 'react'
import { Box, BoxProps } from './Box'
import { useTapable } from './useTapable'

export interface TapableProps extends BoxProps {}

export let Tapable = forwardRef(function Tapable(props: TapableProps, ref) {
  let ariaProps = useTapable(props, ref)
  return <Box {...props} {...ariaProps} />
})
