import { forwardRef, MouseEvent } from 'react'
import { cx } from '../classnames'
import { Box, BoxProps } from '../Box'
import { Tapable } from '../Tapable'
import * as styles from './Button.css'

export interface ButtonProps extends BoxProps {
  disabled?: boolean
  variant?: 'primary' | 'ghost' | 'text'
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  children?: React.ReactNode
}
export let Button = forwardRef<any, ButtonProps>(function Button(
  { variant = 'primary', ...props }: ButtonProps,
  ref,
) {
  return (
    <Box
      is={Tapable}
      className={cx({
        [styles.button]: true,
        [styles[variant]]: !!variant,
        [props.className]: !!props.className,
      })}
      {...props}
      ref={ref}
    />
  )
})
