import { forwardRef } from 'react'
import type { ReactNode } from 'react'
import { Box, BoxProps } from '../Box'
import { Image } from '../Image'
import { cx } from '../classnames'

export interface FigureProps extends BoxProps {
  caption: ReactNode
  src: string
  alt: string
}

export let Figure = forwardRef<HTMLElement, FigureProps>(function Figure(
  { caption, src, alt, ...props }: FigureProps,
  ref,
) {
  return (
    <Box {...props} is="figure" ref={ref}>
      <Image src={src} alt={alt} />
      <Box
        className={cx({
          'text-neutral': true,
          italic: true,
          'pl-2': true,
          'pr-2': true,
          'border-l-4': true,
          'border-neutral': true,
        })}
        is="figcaption"
      >
        {caption}
      </Box>
    </Box>
  )
})

export default Figure
