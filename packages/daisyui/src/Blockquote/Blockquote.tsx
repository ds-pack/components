import { forwardRef } from 'react'
import { Box, BoxProps } from '../Box'
import { cx } from '../classnames'

export interface BlockquoteProps extends BoxProps {}

export let Blockquote = forwardRef<any, BlockquoteProps>(function Blockquote(
  props: BlockquoteProps,
  ref,
) {
  return (
    <Box
      ref={ref}
      {...props}
      className={cx({
        'border-l-4': true,
        'border-base-content': true,
        italic: true,
        'text-neutral': true,
        'pl-2': true,
        [props.className]: !!props.className,
      })}
    />
  )
})

export default Blockquote
