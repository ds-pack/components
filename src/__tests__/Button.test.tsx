import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Button } from '../Button'
import { ThemeProvider } from '../ThemeProvider'

test('Button does not call onClick when disabled', () => {
  let handleClick = jest.fn(() => null)
  let { getByText } = render(
    <ThemeProvider>
      <Button disabled onClick={() => handleClick()}>
        Test
      </Button>
    </ThemeProvider>,
  )
  fireEvent.click(getByText('Test'))

  expect(handleClick).not.toHaveBeenCalled()
})

test('Button calls onClick when focused and the user hits enter', () => {
  let handleClick = jest.fn(() => null)
  let { getByText } = render(
    <ThemeProvider>
      <Button onClick={() => handleClick()}>Test</Button>
    </ThemeProvider>,
  )

  let button = getByText('Test')

  fireEvent.focus(button)

  fireEvent.keyDown(button, { key: 'Enter' })

  expect(handleClick).toHaveBeenCalled()
})

test('Button calls onClick when focused and the user hits spacebar', () => {
  let handleClick = jest.fn(() => null)
  let { getByText } = render(
    <ThemeProvider>
      <Button onClick={() => handleClick()}>Test</Button>
    </ThemeProvider>,
  )

  let button = getByText('Test')

  fireEvent.focus(button)

  fireEvent.keyDown(button, { key: ' ' })

  expect(handleClick).toHaveBeenCalled()
})
