import React from 'react'
import { Box, Props as BoxProps } from './Box'

export interface Props extends BoxProps {
  props?: BoxProps
  inline: boolean
  gap: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
  children: React.ReactNode
}

export let Stack = React.forwardRef(function Stack(
  { gap, children, inline = false, props = {}, ...rest }: Props,
  ref: any,
) {
  return (
    <Box
      display="flex"
      flexDirection={inline ? 'row' : 'column'}
      {...rest}
      ref={ref}
    >
      {React.Children.toArray(children)
        .filter(React.isValidElement)
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
