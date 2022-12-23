'use client'
import { useEffect, useCallback, useState } from 'react'
import { useSharedRef } from '@ds-pack/use-refs'

export interface UseTapableProps {
  disabled?: boolean
  autoFocus?: boolean
  onClick?: (e: MouseEvent) => void
  onKeyDown?: (e: KeyboardEvent) => void
  [key: string]: unknown
}

function noop() {}

export function useTapable(
  {
    disabled = false,
    autoFocus = false,
    onClick = noop,
    onKeyDown = noop,
    ...props
  }: UseTapableProps,
  ref: any,
) {
  let sharedRef = useSharedRef(ref)
  let [focused, setFocused] = useState(autoFocus)

  useEffect(() => {
    if (focused) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          sharedRef.current.focus()
        })
      })
    }
  }, [focused])

  let handleClick = useCallback(
    function handleClick(event) {
      onClick(event)
      setFocused(true)
    },
    [onClick],
  )

  let handleKeyDown = useCallback(
    function handleKeyDown(event) {
      onKeyDown(event)
      if (event.key === 'Enter' || event.key === ' ') {
        if (event.key === ' ') {
          event.preventDefault()
        }
        onClick(event)
      }
    },
    [onClick, onKeyDown],
  )

  return {
    ...props,
    onKeyDown: disabled ? noop : handleKeyDown,
    onClick: disabled ? noop : handleClick,
    ref: sharedRef,
    role: 'button',
    tabIndex: disabled ? '-1' : '0',
    'aria-disabled': disabled ? 'true' : undefined,
  }
}
