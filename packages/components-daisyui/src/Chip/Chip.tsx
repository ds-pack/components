'use client'
import { forwardRef } from 'react'
import { Box, BoxProps } from '../Box'
import { cx } from '../classnames'

export interface ChipProps extends BoxProps {
  variant?:
    | 'outline'
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'ghost'
    | 'info'
    | 'success'
    | 'warning'
    | 'error'
}

let variantClasses = {
  outline: 'badge-outline',
  primary: 'badge-primary',
  secondary: 'badge-secondary',
  accent: 'badge-accent',
  ghost: 'badge-ghost',
  info: 'badge-info',
  success: 'badge-success',
  warning: 'badge-warning',
  error: 'badge-error',
}

export let Chip = forwardRef<any, ChipProps>(function Chip(
  { variant, ...props }: ChipProps,
  ref,
) {
  return (
    <Box
      className={cx({
        badge: true,
        [variantClasses[variant]]: !!variant,
        [props.className]: !!props.className,
      })}
      {...props}
      ref={ref}
    />
  )
})

export default Chip
