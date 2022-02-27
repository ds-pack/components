import { forwardRef } from 'react'
import { Box, BoxProps } from '../Box'
import cx from '../classnames'
import * as styles from './Banner.css'

export interface Props extends BoxProps {
  variant: 'info' | 'warning' | 'error' | 'success'
}

export let Banner = forwardRef(function Banner(
  { variant = 'info', ...props }: Props,
  ref,
) {
  return (
    <Box
      {...props}
      className={cx({
        [styles.banner]: true,
        [styles[variant]]: !!variant,
      })}
      ref={ref}
    />
  )
})
