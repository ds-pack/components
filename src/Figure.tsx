import React from 'react'
import { Box } from './Box'
import { Image } from './Image'

interface Props {
  caption: any
  src: string
  alt: string
  [key: string]: any
}

export let Figure = React.forwardRef(function Figure(
  { caption, src, alt, ...props }: Props,
  ref,
) {
  return (
    <Box {...props} is="figure" ref={ref}>
      <Image src={src} alt={alt} />
      <Box is="figcaption">{caption}</Box>
    </Box>
  )
})
