'use client'
import { useState } from 'react'
import { Checkbox, Input } from '@ds-pack/components-daisyui'

export default function Interactive() {
  let [checked, setChecked] = useState(false)
  let [val, setVal] = useState('')

  return (
    <>
      <Checkbox checked={checked} onChange={setChecked}>
        Hello!
      </Checkbox>
      <Checkbox disabled checked={checked} onChange={setChecked}>
        Disabled
      </Checkbox>

      <Checkbox disabled onChange={setChecked}>
        Disabled not checked
      </Checkbox>

      <Checkbox indeterminate checked={checked} onChange={setChecked}>
        Indeterminate
      </Checkbox>

      <Input value={val} onChange={setVal}>
        Enter your name:
      </Input>
    </>
  )
}
