import { forwardRef } from 'react'
import { Box, BoxProps } from '../Box'
import { visuallyHidden } from './VisuallyHidden.css'

export interface VisuallyHiddenProps extends BoxProps {}

export let VisuallyHidden = forwardRef(function VisuallyHidden(
  props: VisuallyHiddenProps,
  ref,
) {
  return <Box className={visuallyHidden} {...props} ref={ref} />
})
