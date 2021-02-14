import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { Box, Props as BoxProps } from './Box'

export interface ListProps extends BoxProps {
  variant: 'base' | 'ordered' | 'unordered'
}

let WithoutProps = forwardRef(function WithoutProps(
  { variant, ...props }: ListProps,
  ref,
) {
  return <Box {...props} ref={ref} />
})

export let List = styled(WithoutProps)(({ variant = 'base' }) => {
  switch (variant) {
    case 'base': {
      return {
        listStyleType: 'none',
        marginLeft: 0,
        marginRight: 0,
        marginTop: 0,
        marginBottom: 0,
        paddingLeft: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingTop: 0,
      }
    }
    case 'ordered': {
      return {
        listStyleType: 'decimal',
        listStylePosition: 'inside',
        marginLeft: 0,
        marginRight: 0,
        marginTop: 0,
        marginBottom: 0,
        paddingLeft: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingTop: 0,
      }
    }
    case 'unordered': {
      return {
        listStyleType: 'disc',
        listStylePosition: 'inside',
        marginLeft: 0,
        marginRight: 0,
        marginTop: 0,
        marginBottom: 0,
        paddingLeft: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingTop: 0,
      }
    }
  }
})

export interface ListItemProps extends BoxProps {}

export let ListItem = React.forwardRef(function ListItem(
  props: ListItemProps,
  ref,
) {
  return <Box ref={ref} is="li" {...props} />
})
