import { forwardRef } from 'react'
import { Box, BoxProps } from '../Box'
import * as styles from './Heading.css'

export interface HeadingProps extends BoxProps {
  variant: 'h1' | 'lead' | 'h2' | 'h3' | 'subhead'
}

export let Heading = forwardRef<any, HeadingProps>(function Heading(
  { variant, ...props }: HeadingProps,
  ref,
) {
  return <Box className={styles[variant]} {...props} ref={ref} />
})
