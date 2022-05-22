import { forwardRef, useState } from 'react'
import type { ReactNode } from 'react'
import { Box, BoxProps } from '../Box'
import { Label } from '../Label'
import { RadioInput } from '../RadioInput'
import ReactDOM from 'react-dom'
import * as styles from './RadioButton.css'
import cx from '../classnames'

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

export let RadioButton = forwardRef<any, RadioButtonProps>(function RadioButton(
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
    <Label className={styles.radioLabel} {...props}>
      <Box
        className={cx({
          [styles.radioButton]: true,
          [styles.checked]: checked,
          [styles.disabled]: disabled,
          [styles.focused]: focused,
        })}
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
