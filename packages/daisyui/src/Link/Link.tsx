import { forwardRef } from 'react'
import { Box, BoxProps } from '../Box'
import { cx } from '../classnames'

export interface LinkProps extends BoxProps {
  variant?:
    | 'neutral'
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'success'
    | 'info'
    | 'warning'
    | 'error'
}

let variantClasses = {
  neutral: 'link-neutral',
  primary: 'link-primary',
  secondary: 'link-secondary',
  accent: 'link-accent',
  success: 'link-success',
  info: 'link-info',
  warning: 'link-warning',
  error: 'link-error',
}

export let Link = forwardRef<any, LinkProps>(function Link(
  { variant = 'primary', ...props }: LinkProps,
  ref,
) {
  return (
    <Box
      className={cx({
        link: true,
        [variantClasses[variant]]: !!variant,
        [props.className]: !!props.className,
      })}
      {...props}
      ref={ref}
    />
  )
})

export default Link
