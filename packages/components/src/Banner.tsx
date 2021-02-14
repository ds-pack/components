import React, { forwardRef } from 'react'
import styled, { css } from 'styled-components'
import { Box, BoxProps } from './Box'

export interface Props extends BoxProps {
  variant: 'info' | 'warning' | 'error' | 'success'
}

let WithoutProps = forwardRef(function WithoutProps(
  { variant, ...props }: Props,
  ref,
) {
  return <Box {...props} ref={ref} />
})

export let Banner = styled(WithoutProps)(({ variant }) => {
  switch (variant) {
    case 'success': {
      return css`
        color: var(--colors-black);
        background-color: var(--colors-teal-2);
        border: 2px solid var(--colors-teal-6);
        border-radius: var(--radii-0);
        display: flex;
        align-items: center;
        padding: var(--space-3);
      `
    }
    case 'error': {
      return css`
        color: var(--colors-black);
        background-color: var(--colors-red-2);
        border: 2px solid var(--colors-red-6);
        border-radius: var(--radii-0);
        display: flex;
        align-items: center;
        padding: var(--space-3);
      `
    }
    case 'warning': {
      return css`
        color: var(--colors-black);
        background-color: var(--colors-yellow-2);
        border: 2px solid var(--colors-yellow-6);
        border-radius: var(--radii-0);
        display: flex;
        align-items: center;
        padding: var(--space-3);
      `
    }
    case 'info':
    default: {
      return css`
        color: var(--colors-black);
        background-color: var(--colors-blue-2);
        border: 2px solid var(--colors-blue-6);
        border-radius: var(--radii-0);
        display: flex;
        align-items: center;
        padding: var(--space-3);
      `
    }
  }
})
