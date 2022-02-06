import { forwardRef } from 'react'
import { Box, BoxProps } from '../Box'
import { blockquote } from './Blockquote.css'

export interface BlockquoteProps extends BoxProps {}

export let Blockquote = forwardRef(function Blockquote(
  props: BlockquoteProps,
  ref,
) {
  return <Box ref={ref} className={blockquote} {...props} />
})
