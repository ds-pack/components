import * as React from 'react'
import { Box } from './Box'

type StackProps = {
  props?: { [key: string]: any }
  inline: boolean
  gap: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
  children: any
  [key: string]: any
}

export function Stack({
  gap,
  children,
  inline = false,
  props = {},
  ...rest
}: StackProps) {
  return (
    <Box
      {...rest}
      display={inline ? 'inline-flex' : 'flex'}
      flexDirection={inline ? 'row' : 'column'}
    >
      {React.Children.map(children, (child: any, index: number) => (
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
}
