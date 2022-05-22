import { createRainbowSprinkles } from 'rainbow-sprinkles'
import { vars } from '../vars.css'
import { breakpoints } from '../theme'

/*

TODO:

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

*/

export let rainbowSprinkles = createRainbowSprinkles({
  conditions: {
    // all: {},
    _: {},
    small: {
      '@media': `screen and (min-width: ${breakpoints.small})`,
    },
    medium: {
      '@media': `screen and (min-width: ${breakpoints.medium})`,
    },
    large: {
      '@media': `screen and (min-width: ${breakpoints.large})`,
    },
    extraLarge: {
      '@media': `screen and (min-width: ${breakpoints.extraLarge})`,
    },
  },
  defaultCondition: '_',
  dynamicProperties: {
    margin: vars.space,
    marginTop: vars.space,
    marginRight: vars.space,
    marginBottom: vars.space,
    marginLeft: vars.space,
    padding: vars.space,
    paddingTop: vars.space,
    paddingRight: vars.space,
    paddingBottom: vars.space,
    paddingLeft: vars.space,
    color: vars.colors,
    backgroundColor: vars.colors,
    width: vars.sizes,
    maxWidth: vars.sizes,
    minWidth: vars.sizes,
    height: vars.sizes,
    maxHeight: vars.sizes,
    minHeight: vars.sizes,
    fontSize: vars.fontSizes,
    display: true,
    flexDirection: true,
    alignItems: true,
    justifyContent: true,
    flexGrow: true,
    flexShrink: true,
    gridTemplateColumns: true,
    gridTemplateRows: true,
    position: true,
    transform: true,
    top: true,
    left: true,
    right: true,
    bottom: true,
    borderRadius: vars.radii,
    border: true,
    textAlign: true,
    fontStyle: true,
    overflow: true,
  },
  shorthands: {
    m: ['margin'],
    ml: ['marginLeft'],
    mr: ['marginRight'],
    mt: ['marginTop'],
    mb: ['marginBottom'],
    p: ['padding'],
    pl: ['paddingLeft'],
    pr: ['paddingRight'],
    pt: ['paddingTop'],
    pb: ['paddingBottom'],
    marginY: ['marginTop', 'marginBottom'],
    my: ['marginTop', 'marginBottom'],
    paddingy: ['paddingTop', 'paddingBottom'],
    py: ['paddingTop', 'paddingBottom'],
    marginX: ['marginLeft', 'marginRight'],
    mx: ['marginLeft', 'marginRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    px: ['paddingLeft', 'paddingRight'],
    bg: ['backgroundColor'],
  },
})

export type Sprinkles = Parameters<typeof rainbowSprinkles>[1]
