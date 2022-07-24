import { forwardRef } from 'react'
import { Box, BoxProps } from '../Box'
import { image } from './Image.css'
import cx from '../classnames'

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
      className={cx({ [image]: true, [props.className]: !!props.className })}
      is="img"
      ref={ref}
      {...props}
    />
  )
})
