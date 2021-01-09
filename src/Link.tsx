import styled, { css } from 'styled-components'
import { Box } from './Box'

export let Link = styled(Box)(
  ({ theme }) => css`
    color: ${theme.colors.primary};
    text-decoration: underline;
    &:hover,
    &:focus {
      color: ${theme.colors.primaryDark};
      text-decoration: none;
    }
    &:focus {
      box-shadow: ${theme.focusShadow};
      outline: none;
    }
  `,
)
