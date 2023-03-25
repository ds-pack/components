'use client'
import { forwardRef, useEffect, useCallback, useId } from 'react'
import { Box, BoxProps } from '../Box'
import { useSharedRef } from '@ds-pack/use-refs'
import { cx } from '../classnames'

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

    useEffect(() => {
      if (indeterminate) {
        sharedRef.current.indeterminate = indeterminate
      }
    }, [indeterminate])

    let toggle = useCallback(() => onChange(!checked), [checked])

    let id = useId()

    return (
      <Box className="form-control" {...props}>
        <Box is="label" htmlFor={id} className="label" {...props}>
          <Box is="span" className="label-text">
            {children}
          </Box>
          <Box
            id={id}
            className={cx({
              checkbox: true,
            })}
            is="input"
            type="checkbox"
            disabled={disabled}
            onChange={toggle}
            checked={checked}
            autoFocus={autoFocus}
            ref={sharedRef}
          />
        </Box>
      </Box>
    )
  },
)

export default Checkbox
