import styled from 'styled-components'
import { Box } from './Box'

export let Button = styled(Box)(
  ({ theme, disabled }) => `
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: ${theme.radii[0]};
  background-color: ${
    disabled ? theme.colors.disabledBg : theme.colors.primary
  };
  color: ${disabled ? theme.colors.disabledFill : theme.colors.white};
  padding: .5em 1em;
  cursor: ${disabled ? 'not-allowed' : 'pointer'};
  &:hover, &:focus {
    background-color: ${
      disabled ? theme.colors.disabledBg : theme.colors.primaryLight
    };
  }
  &:focus {
    box-shadow: ${disabled ? null : theme.focusShadow};
    outline: none;
  }
`,
)
