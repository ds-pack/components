import * as React from 'react'
import styled from 'styled-components'
import { Box } from './Box'
import { Label } from './Label'
import ReactDOM from 'react-dom'

// @see https://github.com/facebook/react/issues/18591#issuecomment-613026224
function flush(cb) {
  // @ts-ignore
  ReactDOM.flushSync(cb)
}

let StyledTextarea = styled(Box)(
  ({ theme, focused, disabled }) => `
  border: solid 2px;
  width: 100%;
  display: inline-flex;
  flex-grow: 1;
  flex-shrink: 0;
  padding: .5em;
  border-radius: ${theme.radii[0]};
  color: ${theme.colors.black};
  box-shadow: ${focused ? theme.focusShadow : null};
  outline: none;
  font-size: ${theme.fontSizes[1]}px;
  font-family: ${theme.fonts.base};

  border-color: ${
    disabled
      ? theme.colors.disabledFill
      : focused
      ? theme.colors.primary
      : theme.colors.black
  };
  background-color: ${
    disabled ? theme.colors.disabledBg : theme.colors.gray[0]
  };
`,
)

interface Props {
  disabled: boolean
  value: string
  onChange: (value: string) => void
  children: any
  autoFocus: boolean
  placeholder: any
  inputProps: {
    [key: string]: any
  }
  [key: string]: any
}

export let Textarea = React.forwardRef(function Textarea(
  {
    disabled,
    value,
    onChange,
    children,
    autoFocus,
    placeholder,
    inputProps,
    ...props
  }: Props,
  ref,
) {
  let [focused, setFocused] = React.useState(autoFocus)

  function handleFocus() {
    setFocused(true)
  }
  function handleBlur() {
    setFocused(false)
  }

  return (
    <Label
      onFocus={() => flush(handleFocus)}
      onBlur={() => flush(handleBlur)}
      {...props}
    >
      {children}
      <StyledTextarea
        mt={1}
        placeholder={placeholder}
        focused={focused}
        disabled={disabled}
        value={value}
        {...inputProps}
        forwardedAs="textarea"
        ref={ref}
        onChange={({ target: { value } }) => onChange(value)}
      />
    </Label>
  )
})
