import { forwardRef, useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { Box, BoxProps } from '../Box'
import { Portal } from '../Portal'
import { Tapable } from '../Tapable'
import { reposition } from 'nanopop'

export interface DropdownMenuProps extends BoxProps {
  isOpen: boolean
}

export let DropdownMenu = forwardRef(function DropdownMenu(
  { isOpen, ...props }: DropdownMenuProps,
  ref,
) {
  return (
    <Portal isOpen={isOpen}>
      <Box position="fixed" ref={ref}>
        <Box {...props} />
      </Box>
    </Portal>
  )
})

export interface DropdownButtonProps extends BoxProps {
  isOpen: boolean
  focused: boolean
  hovered: boolean
  autoFocus?: boolean
}

let WithoutProps = forwardRef(function WithoutProps(
  { isOpen, focused, hovered, ...props }: DropdownButtonProps,
  ref,
) {
  return <Box is={Tapable} {...props} ref={ref} />
})

let StyledDropdownButton = styled(WithoutProps)(
  ({ isOpen, disabled, focused, hovered }) => css`
    border: solid 2px;
    width: 100%;
    display: inline-flex;
    flex-grow: 1;
    flex-shrink: 0;
    padding: 0.5em 1em;
    border-radius: var(--radii-0);
    color: var(--colors-black);
    box-shadow: ${focused || isOpen ? `var(--shadows-focusShadow)` : null};
    outline: none;
    font-size: var(--fontSizes-1);
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
    background-color: ${disabled
      ? `var(--colors-disabledBg)`
      : `var(--colors-gray-0)`};
    border-color: ${(() => {
      if (disabled) {
        return `var(--colors-disabledFill)`
      } else if (focused || isOpen) {
        return `var(--colors-primary)`
      }
      return `var(--colors-black)`
    })()};
  `,
)

export let DropdownButton = forwardRef(function DropdownButton(
  { children, disabled, isOpen, autoFocus, ...props }: DropdownButtonProps,
  ref,
) {
  let [focused, setFocused] = useState(autoFocus)

  return (
    <StyledDropdownButton
      ref={ref}
      disabled={disabled}
      {...props}
      focused={focused}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    >
      {children}
    </StyledDropdownButton>
  )
})

export function useDropdown() {
  let [isOpen, setOpen] = useState(false)
  let [buttonRef, setButtonRef] = useState(null)
  let [menuRef, setMenuRef] = useState()
  let [menuStyles, setMenuStyles] = useState({})

  useEffect(() => {
    if (buttonRef && menuRef) {
      let buttonWidth = buttonRef.clientWidth
      setMenuStyles({ width: buttonWidth })
      reposition(buttonRef, menuRef, {
        position: 'bottom-start',
      })
    }
  }, [buttonRef, menuRef])

  return {
    isOpen,
    setOpen,
    onClick(e) {
      if (!e.defaultPrevented) {
        setOpen((o) => !o)
      }
    },
    buttonRef: setButtonRef,
    menuRef: setMenuRef,
    menuStyles,
  }
}
