import { forwardRef } from 'react'
import type { ReactNode } from 'react'
import { Box, BoxProps } from '../Box'
import { cx } from '../classnames'

export interface StackProps extends BoxProps {
  inline: boolean
  gap: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
  children: ReactNode
}

let gapClasses = {
  0: '',
  1: 'gap-1',
  2: 'gap-2',
  3: 'gap-3',
  4: 'gap-4',
  5: 'gap-5',
  6: 'gap-6',
  7: 'gap-7',
  8: 'gap-8',
  9: 'gap-9',
  10: 'gap-10',
}

export let Stack = forwardRef<any, StackProps>(function Stack(
  { gap, children, inline = false, ...rest }: StackProps,
  ref: any,
) {
  return (
    <Box
      {...rest}
      className={cx({
        flex: true,
        'flex-row': inline,
        'flex-col': !inline,
        [gapClasses[gap]]: !!gap,
        [rest.className]: !!rest.className,
      })}
      ref={ref}
    >
      {children}
    </Box>
  )
})

export default Stack
