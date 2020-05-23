import styled from 'styled-components'
import { Box } from './Box'

export let Link = styled(Box)(
  ({ theme }) => `
  color: ${theme.colors.primary};
  text-decoration: underline;
  display: inline-flex;
  &:hover,
  &:focus {
    color: ${theme.colors.secondary};
    text-decoration: none;
  }
  &:focus {
    box-shadow: 0 0 4px 2px ${theme.colors.secondary};
    outline: none;
  }
`,
)
