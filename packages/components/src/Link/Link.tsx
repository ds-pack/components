import { forwardRef } from 'react'
import { Box, BoxProps } from '../Box'
import { link } from './Link.css'
import cx from '../classnames'

export interface LinkProps extends BoxProps {}

export let Link = forwardRef<any, LinkProps>(function Link(props, ref) {
  return (
    <Box
      className={cx({ [link]: true, [props.className]: !!props.className })}
      {...props}
      ref={ref}
    />
  )
})
