import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Button } from '../Button'
import { ThemeProvider } from '../ThemeProvider'
import { Tapable } from '../Tapable'

test('Button does not call onClick when disabled', () => {
  let handleClick = jest.fn(() => null)
  let { getByText } = render(
    <ThemeProvider>
      <Button forwardedAs={Tapable} disabled onClick={() => handleClick()}>
        Test
      </Button>
    </ThemeProvider>,
  )
  fireEvent.click(getByText('Test'))

  expect(handleClick).not.toHaveBeenCalled()
})
