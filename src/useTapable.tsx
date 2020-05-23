import { useEffect, useCallback, useState } from 'react'
import { useSharedRef } from '@matthamlin/use-refs'

interface Props {
  disabled?: boolean
  autoFocus?: boolean
  onClick?: (e: any) => void
  [key: string]: any
}

export function useTapable(
  { disabled, autoFocus, onClick, ...props }: Props,
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

  return {
    ...props,
    onClick: handleClick,
    ref: sharedRef,
    role: 'button',
    tabIndex: disabled ? '-1' : '0',
    'aria-disabled': disabled ? 'true' : undefined,
  }
}
