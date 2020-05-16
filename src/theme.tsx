let baseBreakpoint = 20

let breakpoints = [
  baseBreakpoint,
  baseBreakpoint * 2,
  baseBreakpoint * 3,
  baseBreakpoint * 4,
].map((val) => `${val}em`)

let fontScale = 1.2

let baseFontSize = 18

let fontSizes = [
  0.8 * baseFontSize,
  baseFontSize,
  baseFontSize * fontScale,
  baseFontSize * (fontScale * 2),
  baseFontSize * (fontScale * 3),
]

let baseColors = {
  base: '#07c',
  black: '#374047',
  gray: [
    '#f8f9f9',
    '#ebedee',
    '#dee1e3',
    '#cfd3d6',
    '#bec4c8',
    '#acb4b9',
    '#97a1a7',
    '#7f8a93',
    '#5f6e78',
    '#374047',
  ],
  blue: [
    '#e4f0f9',
    '#c6e1f3',
    '#a5cfed',
    '#7db9e5',
    '#4a9eda',
    '#0077cc',
    '#006bb7',
    '#005da0',
    '#004d84',
    '#00365d',
  ],
  indigo: [
    '#eaebfa',
    '#d2d5f6',
    '#b7bbf0',
    '#959ce9',
    '#6872e0',
    '#0011cc',
    '#000fb7',
    '#000da0',
    '#000a83',
    '#00075c',
  ],
  violet: [
    '#f0e9fa',
    '#e1d2f6',
    '#ceb6f0',
    '#b894e9',
    '#9966e0',
    '#5500cc',
    '#4c00b8',
    '#4300a1',
    '#370084',
    '#27005e',
  ],
  fuschia: [
    '#f9e9fa',
    '#f2d1f5',
    '#ebb5f0',
    '#e293e9',
    '#d665e0',
    '#bb00cc',
    '#a900b8',
    '#9400a2',
    '#7b0086',
    '#580061',
  ],
  pink: [
    '#fae9f3',
    '#f5d1e6',
    '#f0b6d8',
    '#e994c6',
    '#e066ad',
    '#cc0077',
    '#b8006b',
    '#a2005e',
    '#86004e',
    '#610038',
  ],
  red: [
    '#faeaeb',
    '#f6d2d5',
    '#f0b7bc',
    '#ea969d',
    '#e16973',
    '#cc0011',
    '#b8000f',
    '#a2000d',
    '#86000b',
    '#610008',
  ],
  orange: [
    '#f9ede4',
    '#f3d9c6',
    '#ecc2a4',
    '#e4a87c',
    '#da864a',
    '#cc5500',
    '#b84c00',
    '#a04300',
    '#843700',
    '#5e2700',
  ],
  yellow: [
    '#f8f6de',
    '#f1ecba',
    '#e9e293',
    '#e0d668',
    '#d7c938',
    '#ccbb00',
    '#b8a900',
    '#a29400',
    '#867b00',
    '#615800',
  ],
  lime: [
    '#eef8df',
    '#dcf1bd',
    '#c7ea97',
    '#b1e16c',
    '#96d73b',
    '#77cc00',
    '#6bb800',
    '#5ea200',
    '#4e8600',
    '#386100',
  ],
  green: [
    '#e5f9e4',
    '#c9f3c6',
    '#a9eca3',
    '#84e47b',
    '#54da48',
    '#11cc00',
    '#0fb800',
    '#0da200',
    '#0b8600',
    '#086100',
  ],
  teal: [
    '#e3f9ec',
    '#c5f3d8',
    '#a2ecc1',
    '#79e4a6',
    '#46da84',
    '#00cc55',
    '#00b84c',
    '#00a243',
    '#008638',
    '#006128',
  ],
  cyan: [
    '#e3f9f7',
    '#c4f3ef',
    '#a0ece5',
    '#77e3da',
    '#44d9cd',
    '#00ccbb',
    '#00b8a9',
    '#00a294',
    '#00867b',
    '#006159',
  ],
}

let colors = {
  ...baseColors,
  white: '#fdfefe',
  primary: baseColors.teal[4],
  primaryLight: baseColors.teal[2],
  primaryDark: baseColors.teal[6],
  secondary: baseColors.blue[4],
  secondaryLight: baseColors.blue[2],
  secondaryDark: baseColors.blue[6],
  tertiary: baseColors.orange[4],
  tertiaryLight: baseColors.orange[2],
  tertiaryDark: baseColors.orange[6],
}

export default {
  space: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40],
  fontSizes,
  fonts: {
    base: 'system-ui, sans-serif',
    serif: '"Times New Roman", serif',
    monospace: 'monospace',
  },
  fontWeights: {
    base: 500,
    bold: 700,
  },
  sizes: {
    content: '60em',
  },
  radii: ['4px', '1rem', '50%'],
  zIndices: [1, 5, 10, 20, 50],
  breakpoints,
  mediaQueries: {
    small: `@media screen and (min-width: ${breakpoints[0]})`,
    medium: `@media screen and (min-width: ${breakpoints[1]})`,
    large: `@media screen and (min-width: ${breakpoints[2]})`,
    xLarge: `@media screen and (min-width: ${breakpoints[3]})`,
  },
  colors,
  lists: {
    base: {
      listStyleType: 'none',
      marginLeft: 0,
      marginRight: 0,
      marginTop: 0,
      marginBottom: 0,
      paddingLeft: 0,
      paddingRight: 0,
      paddingBottom: 0,
      paddingTop: 0,
    },
    ordered: {
      listStyleType: 'decimal',
      listStylePosition: 'inside',
      marginLeft: 0,
      marginRight: 0,
      marginTop: 0,
      marginBottom: 0,
      paddingLeft: 0,
      paddingRight: 0,
      paddingBottom: 0,
      paddingTop: 0,
    },
    unordered: {
      listStyleType: 'disc',
      listStylePosition: 'inside',
      marginLeft: 0,
      marginRight: 0,
      marginTop: 0,
      marginBottom: 0,
      paddingLeft: 0,
      paddingRight: 0,
      paddingBottom: 0,
      paddingTop: 0,
    },
  },
  banners: {
    success: {
      color: colors.black,
      backgroundColor: colors.primaryLight,
      border: `solid 2px ${colors.primaryDark}`,
      borderRadius: '4px',
      padding: '10px',
      minHeight: '50px',
      display: 'flex',
      alignItems: 'center',
    },
    info: {
      color: colors.black,
      backgroundColor: colors.secondaryLight,
      border: `solid 2px ${colors.secondaryDark}`,
      borderRadius: '4px',
      padding: '10px',
      minHeight: '50px',
      display: 'flex',
      alignItems: 'center',
    },
    error: {
      color: colors.black,
      backgroundColor: colors.red[2],
      border: `solid 2px ${colors.red[6]}`,
      borderRadius: '4px',
      padding: '10px',
      minHeight: '50px',
      display: 'flex',
      alignItems: 'center',
    },
    warning: {
      color: colors.black,
      backgroundColor: colors.orange[2],
      border: `solid 2px ${colors.orange[6]}`,
      borderRadius: '4px',
      padding: '10px',
      minHeight: '50px',
      display: 'flex',
      alignItems: 'center',
    },
  },
  outline: `dashed 1px ${colors.secondary}`,
}