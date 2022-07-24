import { forwardRef } from 'react'
import { Box, BoxProps } from '../Box'
import cx from '../classnames'
import * as styles from './Banner.css'

export interface BannerProps extends BoxProps {
  variant: 'info' | 'warning' | 'error' | 'success'
}

export let Banner = forwardRef<any, BannerProps>(function Banner(
  { variant = 'info', ...props }: BannerProps,
  ref,
) {
  return (
    <Box
      {...props}
      className={cx({
        [styles.banner]: true,
        [styles[variant]]: !!variant,
        [props.className]: !!props.className,
      })}
      ref={ref}
    />
  )
})
