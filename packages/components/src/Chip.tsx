import React, { forwardRef } from 'react'
import { Box, Props as BoxProps } from './Box'
import styled, { css } from 'styled-components'

export interface Props extends BoxProps {
  variant?: 'primary' | 'default'
}

let WithoutProps = forwardRef(function WithoutProps(
  { variant, ...props }: Props,
  ref,
) {
  return <Box {...props} ref={ref} />
})

let InnerChip = styled(WithoutProps)(({ variant }) => {
  switch (variant) {
    case 'primary': {
      return css`
        display: inline-flex;
        background-color: var(--colors-primary);
        color: var(--colors-white);
        padding-left: var(--space-2);
        padding-right: var(--space-2);
        padding-top: var(--space-1);
        padding-bottom: var(--space-1);
        border-radius: var(--radii-1);
      `
    }
    case 'default':
    default: {
      return css`
        display: inline-flex;
        background-color: var(--colors-gray-3);
        color: var(--colors-black);
        padding-left: var(--space-2);
        padding-right: var(--space-2);
        padding-top: var(--space-1);
        padding-bottom: var(--space-1);
        border-radius: var(--radii-1);
      `
    }
  }
})

export let Chip = forwardRef(function Chip(props: Props, ref) {
  return <InnerChip {...props} ref={ref} />
})
