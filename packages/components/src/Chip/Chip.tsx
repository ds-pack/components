import { forwardRef } from 'react'
import { Box, BoxProps } from '../Box'
import { chip, base, primary } from './Chip.css'
import cx from '../classnames'

export interface ChipProps extends BoxProps {
  variant?: 'primary' | 'default'
}

export let Chip = forwardRef<any, ChipProps>(function Chip(
  { variant = 'default', ...props }: ChipProps,
  ref,
) {
  return (
    <Box
      className={cx({
        [chip]: true,
        [primary]: variant === 'primary',
        [base]: variant === 'default',
      })}
      {...props}
      ref={ref}
    />
  )
})
