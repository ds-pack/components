import { forwardRef } from 'react'
import { Box, BoxProps } from '../Box'
import { cx } from '../classnames'

export interface HeadingProps extends BoxProps {
  variant: 'h1' | 'lead' | 'h2' | 'h3' | 'subhead'
}

let variantClasses = {
  lead: 'text-4xl font-serif',
  h1: 'text-3xl',
  h2: 'text-2xl',
  h3: 'text-xl',
  subhead: 'text-base',
}

export let Heading = forwardRef<any, HeadingProps>(function Heading(
  { variant, ...props }: HeadingProps,
  ref,
) {
  return (
    <Box
      {...props}
      className={cx({
        [variantClasses[variant]]: !!variant,
        'font-bold': true,
        [props.className]: !!props.className,
      })}
      ref={ref}
    />
  )
})

export default Heading
