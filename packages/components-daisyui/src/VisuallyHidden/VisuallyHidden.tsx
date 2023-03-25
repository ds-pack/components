import { forwardRef } from 'react'
import { Box, BoxProps } from '../Box'

export interface VisuallyHiddenProps extends BoxProps {}

export let VisuallyHidden = forwardRef<any, VisuallyHiddenProps>(
  function VisuallyHidden(props: VisuallyHiddenProps, ref) {
    return <Box {...props} className="sr-only" ref={ref} />
  },
)

export default VisuallyHidden
