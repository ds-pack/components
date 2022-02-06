import React from 'react'
import { render } from '@testing-library/react'
import { Input } from '../Input'

test('forwards all props from inputProps to the input', () => {
  let { getByLabelText } = render(
    <Input inputProps={{ type: 'tel' }}>Label</Input>,
  )

  let input = getByLabelText('Label')
  // @ts-ignore
  expect(input.type).toBe('tel')
})
