import styled from 'styled-components'
import { Box } from './Box'
import { types } from '@ds-pack/property-controls'
import { Tapable } from './Tapable'

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

Button.propertyControls = {
  children: {
    // @todo
    type: 'node',
    label: `The content within the Button`,
    default: 'Click here',
  },
  forwardedAs: {
    // @todo,
    type: 'component',
    label: `The rendered element of the Button component`,
    default: Tapable,
  },
  onClick: {
    // @todo
    type: 'function',
    label: `The function called when the user activates the Button`,
    default: () => console.log('Clicked'),
  },
}
