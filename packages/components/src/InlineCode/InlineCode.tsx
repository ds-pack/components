import { forwardRef } from 'react'
import { Box, BoxProps } from '../Box'
import { inlineCode } from './InlineCode.css'

export interface InlineCodeProps extends BoxProps {}

export let InlineCode = forwardRef<HTMLElement, InlineCodeProps>(
  function InlineCode(props: InlineCodeProps, ref) {
    return <Box is="code" className={inlineCode} {...props} ref={ref} />
  },
)
