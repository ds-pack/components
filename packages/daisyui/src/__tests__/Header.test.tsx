import React from 'react'
import { render } from '@testing-library/react'
import { Heading } from '../Heading'

test('custom className preserves default styles too', () => {
  let { getByText } = render(
    <Heading className="bg-primary text-white" variant="h1" is="h1">
      Heading
    </Heading>,
  )

  let heading = getByText('Heading')
  expect(heading.className).toMatchInlineSnapshot(
    `"text-6xl font-bold bg-primary text-white"`,
  )
})
