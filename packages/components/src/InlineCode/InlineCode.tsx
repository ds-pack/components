import { forwardRef } from 'react'
import { Box, BoxProps } from '../Box'
import { inlineCode } from './InlineCode.css'
import cx from '../classnames'

export interface InlineCodeProps extends BoxProps {}

export let InlineCode = forwardRef<HTMLElement, InlineCodeProps>(
  function InlineCode(props: InlineCodeProps, ref) {
    return (
      <Box
        is="code"
        className={cx({
          [inlineCode]: true,
          [props.className]: !!props.className,
        })}
        {...props}
        ref={ref}
      />
    )
  },
)
