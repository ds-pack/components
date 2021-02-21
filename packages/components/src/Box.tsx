import React, { forwardRef } from 'react'
import styled from 'styled-components'
import createSimpleProps from 'simple-props'

let propConfig = {
  display: true,
  margin: {
    scale: 'space',
    property: 'margin',
  },
  m: {
    scale: 'space',
    property: 'margin',
  },
  mx: {
    scale: 'space',
    properties: ['marginLeft', 'marginRight'],
  },
  my: {
    scale: 'space',
    properties: ['marginTop', 'marginBottom'],
  },
  mt: {
    scale: 'space',
    property: 'marginTop',
  },
  mr: {
    scale: 'space',
    property: 'marginRight',
  },
  mb: {
    scale: 'space',
    property: 'marginBottom',
  },
  ml: {
    scale: 'space',
    property: 'marginLeft',
  },
  marginTop: {
    scale: 'space',
    property: 'marginTop',
  },
  marginRight: {
    scale: 'space',
    property: 'marginRight',
  },
  marginBottom: {
    scale: 'space',
    property: 'marginBottom',
  },
  marginLeft: {
    scale: 'space',
    property: 'marginLeft',
  },
  padding: {
    scale: 'space',
    property: 'padding',
  },
  p: {
    scale: 'space',
    property: 'padding',
  },
  px: {
    scale: 'space',
    properties: ['paddingLeft', 'paddingRight'],
  },
  py: {
    scale: 'space',
    properties: ['paddingTop', 'paddingBottom'],
  },
  pt: {
    scale: 'space',
    property: 'paddingTop',
  },
  pr: {
    scale: 'space',
    property: 'paddingRight',
  },
  pb: {
    scale: 'space',
    property: 'paddingBottom',
  },
  pl: {
    scale: 'space',
    property: 'paddingLeft',
  },
  paddingTop: {
    scale: 'space',
    property: 'paddingTop',
  },
  paddingRight: {
    scale: 'space',
    property: 'paddingRight',
  },
  paddingBottom: {
    scale: 'space',
    property: 'paddingBottom',
  },
  paddingLeft: {
    scale: 'space',
    property: 'paddingLeft',
  },
  color: {
    scale: 'colors',
    property: 'color',
  },
  backgroundColor: {
    scale: 'colors',
    property: 'backgroundColor',
  },
  bg: {
    scale: 'colors',
    property: 'backgroundColor',
  },
  fill: {
    scale: 'colors',
    property: 'fill',
  },
  stroke: {
    scale: 'colors',
    property: 'stroke',
  },
  opacity: {
    scale: 'colors',
    property: 'opacity',
  },
  fontFamily: {
    scale: 'fonts',
    property: 'fontFamily',
  },
  fontSize: {
    scale: 'fontSizes',
    property: 'fontSize',
  },
  lineHeight: {
    scale: 'lineHeights',
    property: 'lineHeight',
  },
  letterSpacing: {
    scale: 'letterSpacings',
    property: 'letterSpacing',
  },
  textAlign: {
    scale: '',
    property: 'textAlign',
  },
  fontStyle: {
    scale: '',
    property: 'fontStyle',
  },
  fontWeight: {
    scale: 'fontWeights',
    property: 'fontWeight',
  },
  width: {
    scale: 'sizes',
    property: 'width',
  },
  height: {
    scale: 'sizes',
    property: 'height',
  },
  maxWidth: {
    scale: 'sizes',
    property: 'maxWidth',
  },
  minWidth: {
    scale: 'sizes',
    property: 'minWidth',
  },
  maxHeight: {
    scale: 'sizes',
    property: 'maxHeight',
  },
  minHeight: {
    scale: 'sizes',
    property: 'minHeight',
  },
  size: {
    scale: 'sizes',
    property: ['height', 'width'],
  },
  overflow: {
    scale: '',
    property: 'overflow',
  },
  overflowX: {
    scale: '',
    property: 'overflowX',
  },
  overflowY: {
    scale: '',
    property: 'overflowY',
  },
  verticalAlign: {
    scale: '',
    property: 'verticalAlign',
  },
  alignItems: {
    scale: '',
    property: 'alignItems',
  },
  alignContent: {
    scale: '',
    property: 'alignContent',
  },
  justifyItems: {
    scale: '',
    property: 'justifyItems',
  },
  justifyContent: {
    scale: '',
    property: 'justifyContent',
  },
  flexWrap: {
    scale: '',
    property: 'flexWrap',
  },
  flexDirection: {
    scale: '',
    property: 'flexDirection',
  },
  flex: {
    scale: '',
    property: 'flex',
  },
  flexGrow: {
    scale: '',
    property: 'flexGrow',
  },
  flexShrink: {
    scale: '',
    property: 'flexShrink',
  },
  flexBasis: {
    scale: '',
    property: 'flexBasis',
  },
  justifySelf: {
    scale: '',
    property: 'justifySelf',
  },
  alignSelf: {
    scale: '',
    property: 'alignSelf',
  },
  order: {
    scale: '',
    property: 'order',
  },
  gridGap: {
    scale: 'space',
    property: 'gridGap',
  },
  gridColumnGap: {
    scale: 'space',
    property: 'gridColumnGap',
  },
  gridRowGap: {
    scale: 'space',
    property: 'gridRowGap',
  },
  gridColumn: {
    scale: '',
    property: 'gridColumn',
  },
  gridRow: {
    scale: '',
    property: 'gridRow',
  },
  gridAutoFlow: {
    scale: '',
    property: 'gridAutoFlow',
  },
  gridAutoColumns: {
    scale: '',
    property: 'gridAutoColumns',
  },
  gridAutoRows: {
    scale: '',
    property: 'gridAutoRows',
  },
  gridTemplateColumns: {
    scale: '',
    property: 'gridTemplateColumns',
  },
  gridTemplateRows: {
    scale: '',
    property: 'gridTemplateRows',
  },
  gridTemplateAreas: {
    scale: '',
    property: 'gridTemplateAreas',
  },
  gridArea: {
    scale: '',
    property: 'gridArea',
  },
  backgroundImage: {
    scale: '',
    property: 'backgroundImage',
  },
  backgroundSize: {
    scale: '',
    property: 'backgroundSize',
  },
  backgroundPosition: {
    scale: '',
    property: 'backgroundPosition',
  },
  backgroundRepeat: {
    scale: '',
    property: 'backgroundRepeat',
  },
  border: {
    scale: 'borders',
    property: 'border',
  },
  borderTop: {
    scale: 'borders',
    property: 'borderTop',
  },
  borderRight: {
    scale: 'borders',
    property: 'borderRight',
  },
  borderBottom: {
    scale: 'borders',
    property: 'borderBottom',
  },
  borderLeft: {
    scale: 'borders',
    property: 'borderLeft',
  },
  borderX: {
    scale: 'borders',
    property: 'borderX',
  },
  borderY: {
    scale: 'borders',
    property: 'borderY',
  },
  borderWidth: {
    scale: 'borderWidths',
    property: 'borderWidth',
  },
  borderTopWidth: {
    scale: 'borderWidths',
    property: 'borderTopWidth',
  },
  borderRightWidth: {
    scale: 'borderWidths',
    property: 'borderRightWidth',
  },
  borderBottomWidth: {
    scale: 'borderWidths',
    property: 'borderBottomWidth',
  },
  borderLeftWidth: {
    scale: 'borderWidths',
    property: 'borderLeftWidth',
  },
  borderStyle: {
    scale: 'borderStyles',
    property: 'borderStyle',
  },
  borderTopStyle: {
    scale: 'borderStyles',
    property: 'borderTopStyle',
  },
  borderRightStyle: {
    scale: 'borderStyles',
    property: 'borderRightStyle',
  },
  borderBottomStyle: {
    scale: 'borderStyles',
    property: 'borderBottomStyle',
  },
  borderLeftStyle: {
    scale: 'borderStyles',
    property: 'borderLeftStyle',
  },
  borderColor: {
    scale: 'colors',
    property: 'borderColor',
  },
  borderTopColor: {
    scale: 'colors',
    property: 'borderTopColor',
  },
  borderRightColor: {
    scale: 'colors',
    property: 'borderRightColor',
  },
  borderBottomColor: {
    scale: 'colors',
    property: 'borderBottomColor',
  },
  borderLeftColor: {
    scale: 'colors',
    property: 'borderLeftColor',
  },
  borderRadius: {
    scale: 'radii',
    property: 'borderRadius',
  },
  borderTopLeftRadius: {
    scale: 'radii',
    property: 'borderTopLeftRadius',
  },
  borderTopRightRadius: {
    scale: 'radii',
    property: 'borderTopRightRadius',
  },
  borderBottomLeftRadius: {
    scale: 'radii',
    property: 'borderBottomLeftRadius',
  },
  borderBottomRightRadius: {
    scale: 'radii',
    property: 'borderBottomRightRadius',
  },
  position: true,
  top: {
    scale: 'space',
    property: 'top',
  },
  right: {
    scale: 'space',
    property: 'right',
  },
  bottom: {
    scale: 'space',
    property: 'bottom',
  },
  left: {
    scale: 'space',
    property: 'left',
  },
  zIndex: {
    scale: 'zIndices',
    property: 'zIndex',
  },
  textShadow: {
    scale: 'shadows',
    property: 'textShadow',
  },
  boxShadow: {
    scale: 'shadows',
    property: 'boxShadow',
  },
  transform: true,
}

let pseudoProps = {
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
}

let simpleProps = createSimpleProps({
  props: propConfig,
  pseudoProps,
})

// Shown are the default values
// let system = createSystem({
//   strict: false,
//   pseudoSelectors: {
//     _hover: '&:hover',
//     _focus: '&:focus',
//     _hoverAndFocus: '&:hover, &:focus',
//     _disabled:
//       '[disabled], [disabled]:hover, [disabled]:focus, [aria-disabled], [aria-disabled]:hover, [aria-disabled]:focus',
//     _readOnly: '[readOnly]',
//     _first: '&:first-child',
//     _last: '&:last-child',
//     _odd: '&:nth-of-type(odd)',
//     _even: '&:nth-of-type(even)',
//     _target: ':target',
//   },
// })

function createTestIds(testIds = null) {
  if (testIds) {
    return {
      'data-testid': typeof testIds === 'string' ? testIds : testIds.default,
    }
  }
  return {}
}

export interface BoxProps {
  is?: any
  testIds?: string | { default: string }
  [key: string]: any
}

let WrappedBase = forwardRef(function WrappedBase(
  { is: Element = 'div', testIds, ...props }: BoxProps,
  ref,
) {
  let next = {}
  for (let prop in props) {
    if (prop in propConfig || prop in pseudoProps) {
      continue
    }
    next[prop] = props[prop]
  }
  return <Element ref={ref} {...createTestIds(testIds)} {...next} />
})

export let Box = styled(WrappedBase)(simpleProps)
