'use client'
import { useState } from 'react'
import { Checkbox, Input, RadioButton, Textarea } from '@ds-pack/daisyui'

export default function Interactive() {
  let [checked, setChecked] = useState(false)
  let [val, setVal] = useState('')
  let [text, setText] = useState('')
  let [radio, setRadio] = useState()

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

      <div className="form-control">
        <RadioButton
          disabled
          name="foo"
          value="foo"
          checked={radio === 'foo'}
          onChange={setRadio}
        >
          Foo
        </RadioButton>
        <RadioButton
          name="foo"
          value="bar"
          checked={radio === 'bar'}
          onChange={setRadio}
        >
          Bar
        </RadioButton>
        <RadioButton
          name="foo"
          value="baz"
          checked={radio === 'baz'}
          onChange={setRadio}
        >
          Baz
        </RadioButton>
      </div>

      <Textarea value={text} onChange={setText}>
        Edit me:
      </Textarea>
    </>
  )
}
