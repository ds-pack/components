import { forwardRef, MouseEvent } from 'react'
import { cx } from '../classnames'
import { Box, BoxProps } from '../Box'
import Tapable from '../Tapable'

export interface ButtonProps extends BoxProps {
  disabled?: boolean
  variant?:
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'info'
    | 'warning'
    | 'success'
    | 'ghost'
    | 'link'
    | 'outline'
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  children?: React.ReactNode
}

let variantClasses = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  accent: 'btn-accent',
  info: 'btn-info',
  success: 'btn-success',
  warning: 'btn-warning',
  ghost: 'btn-ghost',
  link: 'btn-link',
  outline: 'btn-outline',
}

export let Button = forwardRef<any, ButtonProps>(function Button(
  { variant = 'primary', ...props }: ButtonProps,
  ref,
) {
  return (
    <Box
      is={Tapable}
      {...props}
      className={cx({
        btn: true,
        [variantClasses[variant]]: !!variant,
        'btn-disabled': props.disabled,
        [props.className]: !!props.className,
      })}
      ref={ref}
    />
  )
})

export default Button
