import styled from 'styled-components'
import { Box } from './Box'

export let Link = styled(Box)(
  ({ theme }) => `
  color: ${theme.colors.primary};
  text-decoration: underline;
  &:hover,
  &:focus {
    color: ${theme.colors.primaryLight};
    text-decoration: none;
  }
  &:focus {
    box-shadow: ${theme.focusShadow};
    outline: none;
  }
`,
)
