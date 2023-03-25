import { forwardRef } from 'react'
import { Box, BoxProps } from '../Box'

export interface ListItemProps extends BoxProps {}

export let ListItem = forwardRef(function ListItem(props: ListItemProps, ref) {
  return <Box ref={ref} is="li" {...props} />
})

export default ListItem
