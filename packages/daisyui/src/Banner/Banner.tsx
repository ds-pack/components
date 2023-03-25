import { forwardRef } from 'react'
import { Box, BoxProps } from '../Box'
import { cx } from '../classnames'

export interface BannerProps extends BoxProps {
  variant: 'info' | 'warning' | 'error' | 'success'
}

let variantClasses = {
  info: 'alert-info',
  warning: 'alert-warning',
  error: 'alert-error',
  success: 'alert-success',
}

export let Banner = forwardRef<any, BannerProps>(function Banner(
  { variant = 'info', ...props }: BannerProps,
  ref,
) {
  return (
    <Box
      {...props}
      className={cx({
        alert: true,
        'shadow-lg': true,
        [variantClasses[variant]]: !!variant,
        [props.className]: !!props.className,
      })}
      ref={ref}
    />
  )
})

export default Banner
