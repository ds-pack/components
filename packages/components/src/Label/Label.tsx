import { forwardRef } from 'react'
import { Box, BoxProps } from '../Box'
import { label } from './Label.css'
import cx from '../classnames'

export interface LabelProps extends BoxProps {}

export let Label = forwardRef<HTMLLabelElement, LabelProps>(function Label(
  props: LabelProps,
  ref,
) {
  return (
    <Box
      is="label"
      {...props}
      className={cx({ [label]: true, [props.className]: !!props.className })}
      ref={ref}
    />
  )
})
