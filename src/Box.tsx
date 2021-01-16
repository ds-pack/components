import React, { forwardRef } from 'react'
import styled from 'styled-components'
import Base from '@ds-pack/base-styled'

import {
  createSystem,
  border,
  color,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
  typography,
} from 'system-props'

// Shown are the default values
let system = createSystem({
  strict: false,
  pseudoSelectors: {
    _hover: '&:hover',
    _focus: '&:focus',
    _hoverAndFocus: '&:hover, &:focus',
    _disabled:
      '[disabled], [disabled]:hover, [disabled]:focus, [aria-disabled], [aria-disabled]:hover, [aria-disabled]:focus',
    _readOnly: '[readOnly]',
    _first: '&:first-child',
    _last: '&:last-child',
    _odd: '&:nth-of-type(odd)',
    _even: '&:nth-of-type(even)',
    _target: ':target',
  },
})

function createTestIds(testIds = null) {
  if (testIds) {
    return {
      'data-testid': typeof testIds === 'string' ? testIds : testIds.default,
    }
  }
  return {}
}

export interface Props {
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
  system({
    ...border,
    ...color,
    ...flexbox,
    ...grid,
    ...layout,
    ...position,
    ...shadow,
    ...space,
    ...typography,
  }),
)
