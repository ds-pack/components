import { forwardRef } from 'react'
import { Box, BoxProps } from '../Box'
// import { inlineCode } from './InlineCode.css'
import { cx } from '../classnames'

export interface InlineCodeProps extends BoxProps {
  size?: 'large' | 'medium' | 'small' | 'extra-small'
}

let variantClasses = {
  large: 'kbd-lg',
  medium: 'kbd-md',
  small: 'kbd-sm',
  'extra-small': 'kbd-xs',
}

export let InlineCode = forwardRef<HTMLElement, InlineCodeProps>(
  function InlineCode({ size, ...props }: InlineCodeProps, ref) {
    return (
      <Box
        is="code"
        className={cx({
          kbd: true,
          [variantClasses[size]]: !!size,
          [props.className]: !!props.className,
        })}
        {...props}
        ref={ref}
      />
    )
  },
)

export default InlineCode
