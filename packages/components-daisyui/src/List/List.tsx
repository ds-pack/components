import { forwardRef } from 'react'
import { Box, BoxProps } from '../Box'
// import * as styles from './List.css'
import { cx } from '../classnames'

export interface ListProps extends BoxProps {
  variant: 'base' | 'ordered' | 'unordered'
}

let variantClasses = {
  base: 'list-none',
  ordered: 'list-decimal ml-[1rem]',
  unordered: 'list-disc ml-[1rem]',
}

export let List = forwardRef<any, ListProps>(function List(
  { variant, ...props }: ListProps,
  ref,
) {
  return (
    <Box
      is={variant === 'ordered' ? 'ol' : 'ul'}
      className={cx({
        [variantClasses[variant]]: !!variant,
        [props.className]: !!props.className,
      })}
      {...props}
      ref={ref}
    />
  )
})

export default List

export interface ListItemProps extends BoxProps {}

export let ListItem = forwardRef(function ListItem(props: ListItemProps, ref) {
  return <Box ref={ref} is="li" {...props} />
})
