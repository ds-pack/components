import { forwardRef } from 'react'
import { Box, BoxProps } from '../Box'
import * as styles from './Heading.css'
import cx from '../classnames'

export interface HeadingProps extends BoxProps {
  variant: 'h1' | 'lead' | 'h2' | 'h3' | 'subhead'
}

export let Heading = forwardRef<any, HeadingProps>(function Heading(
  { variant, ...props }: HeadingProps,
  ref,
) {
  return (
    <Box
      className={cx({
        [styles[variant]]: true,
        [props.className]: !!props.className,
      })}
      {...props}
      ref={ref}
    />
  )
})
