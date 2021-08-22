import { forwardRef, useState, useEffect } from 'react'
import { ToggleInput } from './ToggleInput'
import styled, { css } from 'styled-components'
import { Box, BoxProps } from './Box'
import { useSharedRef } from '@ds-pack/use-refs'
import { Label } from './Label'
import ReactDOM from 'react-dom'

// @see https://github.com/facebook/react/issues/18591#issuecomment-613026224
function flush(cb) {
  // @ts-ignore
  ReactDOM.flushSync(cb)
}

export interface CheckboxProps extends BoxProps {
  checked: boolean
  onChange: (checked: boolean) => void
  disabled?: boolean
  indeterminate?: boolean
  autoFocus?: boolean
  children: React.ReactNode
}

let WithoutProps = forwardRef(function WithoutProps(
  { indeterminate, focused, ...props }: CheckboxProps,
  ref,
) {
  return <Box {...props} ref={ref} />
})

let StyledCheckbox = styled(WithoutProps)(
  ({ checked, disabled, focused, indeterminate }) => css`
    height: 20px;
    width: 20px;
    position: relative;
    flex-shrink: 0;
    border: solid 2px;
    border-color: ${(() => {
      if (disabled) {
        return `var(--colors-disabledFill)`
      }
      if (checked || indeterminate) {
        return `var(--colors-primaryDark)`
      }
      return `var(--colors-black)`
    })()};
    background-color: ${(() => {
      if (disabled) {
        return `var(--colors-disabledBg)`
      }
      if (checked || indeterminate) {
        return `var(--colors-primary)`
      }
      return `var(--colors-white)`
    })()};
    box-shadow: ${focused ? `var(--shadows-focusShadow)` : null};
    border-radius: var(--radii-0);
    &::before {
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 1;
      content: ' ';
      display: block;
      height: ${!indeterminate ? '5px' : '0px'};
      width: 10px;
      border-left: solid 2px
        ${(() => {
          if (disabled) {
            if (checked || indeterminate) {
              return `var(--colors-disabledFill)`
            }
            return 'transparent'
          }
          return `var(--colors-white)`
        })()};
      border-bottom: solid 2px
        ${(() => {
          if (disabled) {
            if (checked || indeterminate) {
              return `var(--colors-disabledFill)`
            }
            return 'transparent'
          }
          return `var(--colors-white)`
        })()};
      transform: translate(-50%, -75%) ${indeterminate ? '' : 'rotate(-45deg)'};
    }
  `,
)

export let Checkbox = forwardRef(function Checkbox(
  {
    checked,
    onChange,
    disabled,
    indeterminate,
    autoFocus,
    children,
    ...props
  }: CheckboxProps,
  ref,
) {
  let sharedRef = useSharedRef(ref)
  let [focused, setFocused] = useState(autoFocus)

  useEffect(() => {
    if (indeterminate) {
      sharedRef.current.indeterminate = indeterminate
    }
  }, [indeterminate])

  return (
    <Label flexDirection="row" {...props}>
      <StyledCheckbox
        mr="$2"
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
