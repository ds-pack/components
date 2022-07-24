import { forwardRef } from 'react'
import { Box, BoxProps } from '../Box'
import { blockquote } from './Blockquote.css'
import cx from '../classnames'

export interface BlockquoteProps extends BoxProps {}

export let Blockquote = forwardRef<any, BlockquoteProps>(function Blockquote(
  props: BlockquoteProps,
  ref,
) {
  return (
    <Box
      ref={ref}
      className={cx({
        [blockquote]: true,
        [props.className]: !!props.className,
      })}
      {...props}
    />
  )
})
