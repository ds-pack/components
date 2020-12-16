import React from 'react'
import { variant } from 'styled-system'
import styled from 'styled-components'
import { Box } from './Box'

let listVariant = variant({
  scale: 'lists',
  prop: 'variant',
})

export let List = styled(Box)(listVariant)

List.defaultProps = {
  variant: 'base',
}

export let ListItem = React.forwardRef(function ListItem(props: any, ref: any) {
  return <Box ref={ref} is="li" {...props} />
})
