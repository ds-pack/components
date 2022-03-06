import { forwardRef } from 'react'
import { Box, BoxProps } from '../Box'
import { link } from './Link.css'

export interface LinkProps extends BoxProps {}

export let Link = forwardRef<any, LinkProps>(function Link(props, ref) {
  return <Box className={link} {...props} ref={ref} />
})
