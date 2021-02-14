import styled from 'styled-components'
import { Box, BoxProps } from './Box'

export interface LinkProps extends BoxProps {}

export let Link = styled(Box)<LinkProps>`
  color: var(--colors-primary);
  text-decoration: underline;
  display: inline-flex;
  cursor: pointer;
  &:hover,
  &:focus {
    color: var(--colors-primaryDark);
    text-decoration: none;
  }
  &:focus {
    box-shadow: var(--shadows-focusShadow);
    outline: none;
  }
`
