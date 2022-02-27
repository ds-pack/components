import { forwardRef } from 'react'
import type { ReactNode } from 'react'
import { Box, BoxProps } from '../Box'
import { Image } from '../Image'
import { caption as captionClass } from './Figure.css'

interface FigureProps extends BoxProps {
  caption: ReactNode
  src: string
  alt: string
}

export let Figure = forwardRef(function Figure(
  { caption, src, alt, ...props }: FigureProps,
  ref,
) {
  return (
    <Box {...props} is="figure" ref={ref}>
      <Image src={src} alt={alt} />
      <Box className={captionClass} is="figcaption">
        {caption}
      </Box>
    </Box>
  )
})
