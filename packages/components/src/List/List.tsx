import { forwardRef } from 'react'
import { Box, BoxProps } from '../Box'
import * as styles from './List.css'
import cx from '../classnames'

export interface ListProps extends BoxProps {
  variant: 'base' | 'ordered' | 'unordered'
}

export let List = forwardRef<any, ListProps>(function List(
  { variant, ...props }: ListProps,
  ref,
) {
  return (
    <Box
      is={variant === 'ordered' ? 'ol' : 'ul'}
      className={cx({
        [styles[variant]]: true,
        [props.className]: !!props.className,
      })}
      {...props}
      ref={ref}
    />
  )
})

export interface ListItemProps extends BoxProps {}

export let ListItem = forwardRef(function ListItem(props: ListItemProps, ref) {
  return <Box ref={ref} is="li" {...props} />
})
