import * as React from 'react'
import { ToggleInput } from './ToggleInput'
import styled from 'styled-components'
import { Box } from './Box'
import { useSharedRef } from '@matthamlin/use-refs'
import { Label } from './Label'
import ReactDOM from 'react-dom'

// @see https://github.com/facebook/react/issues/18591#issuecomment-613026224
function flush(cb) {
  // @ts-ignore
  ReactDOM.flushSync(cb)
}

let StyledCheckbox = styled(Box)(
  ({ theme, checked, disabled, focused, indeterminate }) => `
  height: 20px;
  width: 20px;
  position: relative;
  flex-shrink: 0;
  border: solid 2px;
  border-color: ${
    disabled
      ? theme.colors.disabledFill
      : checked || indeterminate
      ? theme.colors.teal[8]
      : theme.colors.black
  };
  background-color: ${
    disabled
      ? theme.colors.disabledBg
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
          ? theme.colors.disabledFill
          : 'transparent'
        : theme.colors.white
    };
    border-bottom: solid 2px ${
      disabled
        ? checked || indeterminate
          ? theme.colors.disabledFill
          : 'transparent'
        : theme.colors.white
    };
    transform: translate(-50%, -75%) ${indeterminate ? '' : 'rotate(-45deg)'};
  }
`,
)

interface Props {
  checked: boolean
  onChange: (checked: boolean) => void
  disabled?: boolean
  indeterminate?: boolean
  autoFocus?: boolean
  children: any
  [key: string]: any
}

export let Checkbox = React.forwardRef(function Checkbox(
  {
    checked,
    onChange,
    disabled,
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
        onFocus={() => flush(() => setFocused(true))}
        onBlur={() => flush(() => setFocused(false))}
        autoFocus={autoFocus}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        ref={sharedRef}
      />
      {children}
    </Label>
  )
})
