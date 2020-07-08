import * as React from 'react'
import { Box } from './Box'
import { Image } from './Image'
import { types } from '@ds-pack/property-controls'

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
    <Box {...props} forwardedAs="figure" ref={ref}>
      <Image src={src} alt={alt} />
      <Box forwardedAs="figcaption">{caption}</Box>
    </Box>
  )
})

Figure.propertyControls = {
  caption: {
    // @todo
    type: 'node',
    label: `The caption content for the Figure`,
  },
  src: {
    type: types.string,
    label: `The image source attribute`,
  },
  alt: {
    type: types.string,
    label: `The image alt attribute`,
  },
}
