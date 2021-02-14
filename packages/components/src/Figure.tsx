import React from 'react'
import { Box, BoxProps } from './Box'
import { Image } from './Image'

interface FigureProps extends BoxProps {
  caption: React.ReactNode
  src: string
  alt: string
}

export let Figure = React.forwardRef(function Figure(
  { caption, src, alt, ...props }: FigureProps,
  ref,
) {
  return (
    <Box {...props} is="figure" ref={ref}>
      <Image src={src} alt={alt} />
      <Box is="figcaption">{caption}</Box>
    </Box>
  )
})
