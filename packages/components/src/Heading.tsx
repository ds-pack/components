import React, { forwardRef } from 'react'
import styled, { css } from 'styled-components'
import { Box, Props as BoxProps } from './Box'

export interface Props extends BoxProps {
  variant: 'h1' | 'lead' | 'h2' | 'h3' | 'subhead'
}

let WithoutProps = forwardRef(function WithoutProps(
  { variant, ...props }: Props,
  ref,
) {
  return <Box {...props} ref={ref} />
})

export let Heading = styled(WithoutProps)(({ variant }) => {
  switch (variant) {
    case 'h1': {
      return css`
        font-size: var(--fontSizes-h1);
        font-weight: var(--fontWeights-bold);
      `
    }
    case 'lead': {
      return css`
        font-size: var(--fontSizes-h1);
        font-weight: var(--fontWeights-bold);
        font-family: var(--fonts-serif);
      `
    }
    case 'h2': {
      return css`
        font-size: var(--fontSizes-h2);
        font-weight: var(--fontWeights-bold);
      `
    }
    case 'h3': {
      return css`
        font-size: var(--fontSizes-h3);
        font-weight: var(--fontWeights-bold);
      `
    }
    case 'subhead': {
      return css`
        font-size: var(--fontSizes-h4);
        font-weight: var(--fontWeights-bold);
      `
    }
  }
})
