import { forwardRef } from 'react'
import { Box, BoxProps } from '../Box'
import { cx } from '../classnames'

export interface HeadingProps extends BoxProps {
  variant: 'h1' | 'lead' | 'h2' | 'h3' | 'subhead'
}

let variantClasses = {
  lead: 'text-6xl font-serif',
  h1: 'text-6xl',
  h2: 'text-4xl',
  h3: 'text-2xl',
  subhead: 'text-lg',
}

export let Heading = forwardRef<any, HeadingProps>(function Heading(
  { variant, ...props }: HeadingProps,
  ref,
) {
  return (
    <Box
      className={cx({
        [variantClasses[variant]]: !!variant,
        'font-bold': true,
        [props.className]: !!props.className,
      })}
      {...props}
      ref={ref}
    />
  )
})

export default Heading
