'use client'
import { forwardRef, useEffect, useState } from 'react'
import { Box, BoxProps } from '../Box'
import { Portal } from '../Portal'
import { Tapable } from '../Tapable'
import { reposition } from 'nanopop'
import * as styles from './Dropdown.css'
import { cx } from '../classnames'

export interface DropdownMenuProps extends BoxProps {
  isOpen: boolean
}

export let DropdownMenu = forwardRef<any, DropdownMenuProps>(
  function DropdownMenu({ isOpen, ...props }: DropdownMenuProps, ref) {
    return (
      <Portal isOpen={isOpen}>
        <Box position="fixed" ref={ref}>
          <Box {...props} />
        </Box>
      </Portal>
    )
  },
)

export interface DropdownButtonProps extends BoxProps {
  isOpen: boolean
  focused: boolean
  hovered: boolean
  autoFocus?: boolean
}

export let DropdownButton = forwardRef<any, DropdownButtonProps>(
  function DropdownButton(
    { children, disabled, isOpen, autoFocus, ...props }: DropdownButtonProps,
    ref,
  ) {
    let [focused, setFocused] = useState(autoFocus)

    return (
      <Tapable
        ref={ref}
        className={cx({
          [styles.dropdown]: true,
          [styles.disabled]: disabled,
          [styles.focused]: focused,
        })}
        disabled={disabled}
        {...props}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      >
        {children}
      </Tapable>
    )
  },
)

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
