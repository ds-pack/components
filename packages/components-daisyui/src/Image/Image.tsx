import { forwardRef } from 'react'
import { Box, BoxProps } from '../Box'
import { cx } from '../classnames'

export interface ImageProps extends BoxProps {
  src: string
  alt: string
}

export let Image = forwardRef<HTMLImageElement, ImageProps>(function Image(
  props: ImageProps,
  ref,
) {
  return (
    <Box
      className={cx({
        'max-w-[100%]': true,
        'h-[auto]': true,
        [props.className]: !!props.className,
      })}
      is="img"
      ref={ref}
      {...props}
    />
  )
})

export default Image
