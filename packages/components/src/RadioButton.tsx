import { forwardRef, useState } from 'react'
import type { ReactNode } from 'react'
import styled, { css } from 'styled-components'
import { Box, BoxProps } from './Box'
import { Label } from './Label'
import { RadioInput } from './RadioInput'
import ReactDOM from 'react-dom'

// @see https://github.com/facebook/react/issues/18591#issuecomment-613026224
function flush(cb) {
  // @ts-ignore
  ReactDOM.flushSync(cb)
}

export interface RadioButtonProps extends BoxProps {
  checked: boolean
  name: string
  value: string
  onChange: (value: string) => void
  disabled?: boolean
  children: ReactNode
  autoFocus?: boolean
}

let WithoutProps = forwardRef(function WithoutProps(
  { focused, ...props }: RadioButtonProps,
  ref,
) {
  return <Box {...props} ref={ref} />
})

let StyledRadio = styled(WithoutProps)(
  ({ checked, disabled, focused }) => css`
    height: 20px;
    width: 20px;
    position: relative;
    flex-shrink: 0;
    border-radius: 50%;
    border: solid 2px;
    border-color: ${(() => {
      if (disabled) {
        return `var(--colors-disabledFill)`
      }
      if (checked) {
        return `var(--colors-primary)`
      }
      return `var(--colors-black)`
    })()};
    box-shadow: ${focused ? `var(--shadows-focusShadow)` : null};
    &::before {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;
      border-radius: 50%;
      content: ' ';
      display: block;
      height: 10px;
      width: 10px;
      background-color: ${(() => {
        if (disabled) {
          return `var(--colors-disabledBg)`
        }
        if (checked) {
          return `var(--colors-primary)`
        }
        return `transparent`
      })()};
    }
  `,
)

export let RadioButton = forwardRef(function RadioButton(
  {
    checked,
    onChange,
    value,
    name,
    disabled,
    children,
    autoFocus,
    ...props
  }: RadioButtonProps,
  ref,
) {
  let [focused, setFocused] = useState(autoFocus)

  return (
    <Label flexDirection="row" {...props}>
      <StyledRadio
        mr="$2"
        focused={focused}
        checked={checked}
        disabled={disabled}
      />
      <RadioInput
        onChange={onChange}
        onFocus={() => flush(() => setFocused(true))}
        onBlur={() => flush(() => setFocused(false))}
        autoFocus={autoFocus}
        value={value}
        name={name}
        disabled={disabled}
        ref={ref}
      />
      {children}
    </Label>
  )
})
