import React from 'react'
import { render } from '@testing-library/react'
import { Box } from '../Box'
import { ThemeProvider } from '../ThemeProvider'

test('supports `is` prop', () => {
  let { container } = render(
    <ThemeProvider>
      <Box is="marquee">Box</Box>
    </ThemeProvider>,
  )

  let box = container.querySelector('marquee')
  expect(box).toBeDefined()
})

test('supports `is` prop with styles', () => {
  let { container } = render(
    <ThemeProvider>
      <Box is="marquee" mr={9}>
        Box
      </Box>
    </ThemeProvider>,
  )

  let box = container.querySelector('marquee')
  expect(box).toMatchInlineSnapshot(`
    <marquee
      class="Box-sc-1x62x1l-0 kTmeVK"
    >
      Box
    </marquee>
  `)
})

test('supports `testIds` string prop', () => {
  let { getByTestId, container } = render(
    <ThemeProvider>
      <Box is="marquee" testIds="foo">
        Box
      </Box>
    </ThemeProvider>,
  )

  let box = getByTestId('foo')
  expect(box).toBe(container.querySelector('marquee'))
})

test('supports `testIds` object prop', () => {
  let { getByTestId, container } = render(
    <ThemeProvider>
      <Box is="marquee" testIds={{ default: 'foo' }}>
        Box
      </Box>
    </ThemeProvider>,
  )

  let box = getByTestId('foo')
  expect(box).toBe(container.querySelector('marquee'))
})

test('supports outlines', () => {
  // test that it doesn't throw :)
  render(
    <ThemeProvider>
      <Box outline="$focusShadow">Box</Box>
    </ThemeProvider>,
  )
})
