import { forwardRef } from 'react'
import { Box, BoxProps } from '../Box'
import { image } from './Image.css'

export interface ImageProps extends BoxProps {
  src: string
  alt: string
}

export let Image = forwardRef(function Image(props: ImageProps, ref) {
  return <Box className={image} is="img" ref={ref} {...props} />
})
