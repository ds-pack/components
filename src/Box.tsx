import React, { forwardRef } from 'react'
import styled from 'styled-components'
import {
  space,
  layout,
  flexbox,
  typography,
  color,
  grid,
  background,
  border,
  position,
  shadow,
  compose,
} from 'styled-system'

import Base from '@matthamlin/base-styled'

function createTestIds(testIds = null) {
  if (testIds) {
    return {
      'data-testid': typeof testIds === 'string' ? testIds : testIds.default,
    }
  }
  return {}
}

interface Props {
  is?: any
  forwardedAs?: any
  as?: any
  testIds?: string | { default: string }
  [key: string]: any
}

let WrappedBase = forwardRef(function WrappedBase(
  { is, forwardedAs, as, testIds, ...props }: Props,
  ref,
) {
  let Element
  if (typeof is !== 'undefined') {
    Element = is
  } else if (typeof forwardedAs !== 'undefined') {
    Element = forwardedAs
  } else if (typeof as !== 'undefined') {
    Element = as
  }
  return <Base ref={ref} {...createTestIds(testIds)} {...props} as={Element} />
})

export let Box = styled(WrappedBase)(
  compose(
    space,
    layout,
    flexbox,
    typography,
    color,
    grid,
    background,
    border,
    position,
    shadow,
  ),
)
