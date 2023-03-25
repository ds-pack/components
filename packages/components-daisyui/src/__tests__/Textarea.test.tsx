import React from 'react'
import { render } from '@testing-library/react'
import { Textarea } from '../Textarea'

test('forwards all props from inputProps to the input', () => {
  let { getByLabelText } = render(
    <Textarea inputProps={{ rows: 10 }}>Label</Textarea>,
  )

  let input = getByLabelText('Label') as HTMLTextAreaElement
  expect(input.rows).toBe(10)
})
