'use client'
import { forwardRef, useState, useEffect } from 'react'
import { ToggleInput } from '../ToggleInput'
import { Box, BoxProps } from '../Box'
import { useSharedRef } from '@ds-pack/use-refs'
import * as styles from './Checkbox.css'
import ReactDOM from 'react-dom'
import cx from '../classnames'

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

export let Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox(
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
      <Box className={styles.checkboxLabel} {...props}>
        <Box
          className={cx({
            [styles.checkbox]: true,
            [styles.checked]: checked,
            [styles.indeterminate]: indeterminate,
            [styles.focused]: focused,
            [styles.disabled]: disabled,
          })}
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
      </Box>
    )
  },
)
