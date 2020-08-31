import * as React from 'react'
import { render } from '@testing-library/react'
import { Input } from '../Input'
import { ThemeProvider } from '../ThemeProvider'

test('forwards all props from inputProps to the input', () => {
  let { getByLabelText } = render(
    <ThemeProvider>
      <Input inputProps={{ type: 'tel' }}>Label</Input>
    </ThemeProvider>,
  )

  let input = getByLabelText('Label')
  // @ts-ignore
  expect(input.type).toBe('tel')
})
