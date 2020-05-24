import * as React from 'react'
import { ToggleInput } from './ToggleInput'
import styled from 'styled-components'
import { Box } from './Box'
import { useSharedRef } from '@matthamlin/use-refs'
import { Label } from './Label'

let StyledCheckbox = styled(Box)(
  ({ theme, checked, disabled, focused, indeterminate }) => `
  height: 20px;
  width: 20px;
  position: relative;
  flex-shrink: 0;
  border: solid 2px;
  border-color: ${
    disabled
      ? theme.colors.gray[4]
      : checked || indeterminate
      ? theme.colors.teal[8]
      : theme.colors.black
  };
  background-color: ${
    disabled
      ? theme.colors.gray[2]
      : checked || indeterminate
      ? theme.colors.teal[4]
      : theme.colors.white
  };
  box-shadow: ${focused ? theme.focusShadow : null};
  border-radius: ${theme.radii[0]};
  &::before {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;
    content: " ";
    display: block;
    height: ${!indeterminate ? '5px' : '0px'};
    width: 10px;
    border-left: solid 2px ${
      disabled
        ? checked || indeterminate
          ? theme.colors.gray[5]
          : 'transparent'
        : theme.colors.white
    };
    border-bottom: solid 2px ${
      disabled
        ? checked || indeterminate
          ? theme.colors.gray[5]
          : 'transparent'
        : theme.colors.white
    };
    transform: translate(-50%, -75%) ${indeterminate ? '' : 'rotate(-45deg)'};
  }
`,
)

interface Props {
  checked: boolean
  onChange: (event: any) => void
  disabled?: boolean
  value?: any
  indeterminate?: boolean
  autoFocus?: boolean
  children: any
}

export let Checkbox = React.forwardRef(function Checkbox(
  {
    checked,
    onChange,
    disabled,
    value,
    indeterminate,
    autoFocus,
    children,
    ...props
  }: Props,
  ref,
) {
  let sharedRef = useSharedRef(ref)
  let [focused, setFocused] = React.useState(autoFocus)

  React.useEffect(() => {
    if (indeterminate) {
      sharedRef.current.indeterminate = indeterminate
    }
  }, [indeterminate])

  return (
    <Label flexDirection="row" {...props}>
      <StyledCheckbox
        mr={2}
        indeterminate={indeterminate}
        focused={focused}
        checked={checked}
        disabled={disabled}
      />
      <ToggleInput
        // @ts-ignore
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        autoFocus={autoFocus}
        checked={checked}
        onChange={() => {
          onChange(!checked, { value })
        }}
        disabled={disabled}
        value={value}
        ref={sharedRef}
      />
      {children}
    </Label>
  )
})
