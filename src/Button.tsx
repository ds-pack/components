import React, { forwardRef, MouseEvent } from 'react'
import styled from 'styled-components'
import { Box } from './Box'
import { Tapable } from './Tapable'

interface ButtonProps {
  disabled?: boolean
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  children?: React.ReactNode
}
let ButtonImpl = forwardRef(function ButtonImpl(props: ButtonProps, ref) {
  return <Box is={Tapable} {...props} ref={ref} />
})

export let Button = styled(ButtonImpl)(
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
  // match border for Input elements
  border: solid 2px ${
    disabled ? theme.colors.disabledBg : theme.colors.primary
  };
  &:hover, &:focus {
    background-color: ${
      disabled ? theme.colors.disabledBg : theme.colors.primaryLight
    };
    border-color: border-color: ${
      disabled ? theme.colors.disabledBg : theme.colors.primaryLight
    };
  }
  &:focus {
    box-shadow: ${disabled ? null : theme.focusShadow};
    outline: none;
  }
`,
)
