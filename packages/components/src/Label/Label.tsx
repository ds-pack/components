import { forwardRef } from 'react'
import { Box, BoxProps } from '../Box'
import { label } from './Label.css'

export interface LabelProps extends BoxProps {}

export let Label = forwardRef<HTMLLabelElement, LabelProps>(function Label(
  props: LabelProps,
  ref,
) {
  return <Box is="label" {...props} className={label} ref={ref} />
})
