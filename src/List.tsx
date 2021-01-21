import React from 'react'
import { variant } from 'styled-system'
import styled from 'styled-components'
import { Box } from './Box'

// @TODO replace
let listVariant = variant({
  scale: 'lists',
  prop: 'variant',
})

export let List = styled(Box)(listVariant)

List.defaultProps = {
  variant: 'base',
}

export interface ListItemProps {
  children?: React.ReactNode
  [key: string]: any
}

export let ListItem = React.forwardRef(function ListItem(
  props: ListItemProps,
  ref,
) {
  return <Box ref={ref} is="li" {...props} />
})
