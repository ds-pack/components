import * as React from 'react'
import { render } from '@testing-library/react'
import { Textarea } from '../Textarea'
import { ThemeProvider } from '../ThemeProvider'

test('forwards all props from inputProps to the input', () => {
  let { getByLabelText } = render(
    <ThemeProvider>
      <Textarea inputProps={{ rows: 10 }}>Label</Textarea>
    </ThemeProvider>,
  )

  let input = getByLabelText('Label') as HTMLTextAreaElement
  expect(input.rows).toBe(10)
})
