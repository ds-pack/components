import React, { forwardRef, useState } from 'react'
import styled, { css } from 'styled-components'
import { Box } from './Box'
import { Label } from './Label'
import ReactDOM from 'react-dom'

// @see https://github.com/facebook/react/issues/18591#issuecomment-613026224
function flush(cb) {
  // @ts-ignore
  ReactDOM.flushSync(cb)
}

export interface Props {
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

let WithoutProps = forwardRef(function WithoutProps(
  { focused, hovered, ...props }: Props,
  ref,
) {
  return <Box {...props} ref={ref} />
})

let StyledInput = styled(WithoutProps)(
  ({ focused, hovered, disabled }: Props) => css`
    border: solid 2px;
    width: 100%;
    display: inline-flex;
    flex-grow: 1;
    flex-shrink: 0;
    padding: 0.5em 1em;
    border-radius: var(--radii-0);
    color: var(--colors-black);
    box-shadow: ${focused ? `var(--shadows-focusShadow)` : null};
    outline: none;
    font-size: var(--fontSizes-1);

    border-color: ${disabled
      ? `var(--colors-disabledFill)`
      : focused || hovered
      ? `var(--colors-primary)`
      : `var(--colors-black)`};
    background-color: ${disabled
      ? `var(--colors-disabledBg)`
      : `var(--colors-gray-0)`};
  `,
)

export let Input = forwardRef(function Input(
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
  let [focused, setFocused] = useState(autoFocus)

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
      <StyledInput
        mt="$1"
        placeholder={placeholder}
        focused={focused}
        type="text"
        disabled={disabled}
        value={value}
        {...inputProps}
        is="input"
        ref={ref}
        onChange={({ target: { value } }) => onChange(value)}
      />
    </Label>
  )
})
