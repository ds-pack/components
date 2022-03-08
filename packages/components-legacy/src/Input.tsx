import { forwardRef, useState } from 'react'
import type { ReactNode } from 'react'
import styled, { css } from 'styled-components'
import { Box, BoxProps } from './Box'
import { Label } from './Label'
import ReactDOM from 'react-dom'

// @see https://github.com/facebook/react/issues/18591#issuecomment-613026224
function flush(cb) {
  // @ts-ignore
  ReactDOM.flushSync(cb)
}

export interface InputProps extends BoxProps {
  disabled: boolean
  value: string
  onChange: (value: string) => void
  children: ReactNode
  autoFocus: boolean
  placeholder: string
  inputProps: BoxProps
}

let WithoutProps = forwardRef(function WithoutProps(
  { focused, hovered, ...props }: InputProps,
  ref,
) {
  return <Box {...props} ref={ref} />
})

let StyledInput = styled(WithoutProps)(
  ({ focused, hovered, disabled }: InputProps) => css`
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

    border-color: ${(() => {
      if (disabled) {
        return `var(--colors-disabledFill)`
      } else if (focused || hovered) {
        return `var(--colors-primary)`
      }
      return `var(--colors-black)`
    })()};
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
  }: InputProps,
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
