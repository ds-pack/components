import { forwardRef, Children, isValidElement } from 'react'
import type { ReactNode } from 'react'
import { Box, BoxProps } from '../Box'

export interface StackProps extends BoxProps {
  props?: BoxProps
  inline: boolean
  gap: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
  children: ReactNode
}

export let Stack = forwardRef(function Stack(
  { gap, children, inline = false, props = {}, ...rest }: StackProps,
  ref: any,
) {
  return (
    <Box
      display="flex"
      flexDirection={inline ? 'row' : 'column'}
      {...rest}
      ref={ref}
    >
      {Children.toArray(children)
        .filter(isValidElement)
        .map((child: any, index: number) => (
          <Box
            key={index}
            {...(inline
              ? { ml: index !== 0 ? gap : null }
              : { mt: index !== 0 ? gap : null })}
            {...props}
          >
            {child}
          </Box>
        ))}
    </Box>
  )
})
