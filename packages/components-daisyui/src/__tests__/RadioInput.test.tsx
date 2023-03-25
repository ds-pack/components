import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { RadioInput } from '../RadioInput'

test('it calls onChange with the value of the input', () => {
  let onChange = jest.fn()

  render(
    <label>
      label
      <RadioInput value="foo" name="input" onChange={onChange} />
    </label>,
  )

  fireEvent.click(screen.getByLabelText('label'))

  expect(onChange).toHaveBeenCalledWith('foo')
})
