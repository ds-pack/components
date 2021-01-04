let baseBreakpoint = 20

let breakpoints = [
  baseBreakpoint,
  baseBreakpoint * 2,
  baseBreakpoint * 3,
  baseBreakpoint * 4,
].map((val) => `${val}em`)

let fontScale = 1.2

let baseFontSize = 18

let fontSizes = {
  0: 0.8 * baseFontSize,
  1: baseFontSize,
  2: baseFontSize * fontScale,
  3: baseFontSize * (fontScale * 2),
  4: baseFontSize * (fontScale * 3),
  get h1() {
    return this[4]
  },
  get h2() {
    return this[3]
  },
  get h3() {
    return this[2]
  },
  get h4() {
    return this[1]
  },
  get h5() {
    return this[1]
  },
  get h6() {
    return this[1]
  },
}

let baseColors = {
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
  get primary() {
    return this.blue[5]
  },
  get primaryLight() {
    return this.blue[2]
  },
  get primaryDark() {
    return this.blue[7]
  },
  get secondary() {
    return this.teal[5]
  },
  get secondaryLight() {
    return this.teal[2]
  },
  get secondaryDark() {
    return this.teal[7]
  },
  get tertiary() {
    return this.violet[5]
  },
  get tertiaryLight() {
    return this.violet[2]
  },
  get tertiaryDark() {
    return this.violet[7]
  },

  get disabledBg() {
    return this.gray[2]
  },
  get disabledFill() {
    return this.gray[5]
  },
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
  get mediaQueries() {
    return {
      small: `@media screen and (min-width: ${this.breakpoints[0]})`,
      medium: `@media screen and (min-width: ${this.breakpoints[1]})`,
      large: `@media screen and (min-width: ${this.breakpoints[2]})`,
      xLarge: `@media screen and (min-width: ${this.breakpoints[3]})`,
    }
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
  get banners() {
    return {
      success: {
        color: this.colors.black,
        backgroundColor: this.colors.teal[2],
        border: `solid 2px ${this.colors.teal[6]}`,
        borderRadius: this.radii[0],
        padding: this.space[3],
        display: 'flex',
        alignItems: 'center',
      },
      info: {
        color: this.colors.black,
        backgroundColor: this.colors.blue[2],
        border: `solid 2px ${this.colors.blue[6]}`,
        borderRadius: this.radii[0],
        padding: this.space[3],
        display: 'flex',
        alignItems: 'center',
      },
      error: {
        color: this.colors.black,
        backgroundColor: this.colors.red[2],
        border: `solid 2px ${this.colors.red[6]}`,
        borderRadius: this.radii[0],
        padding: this.space[3],
        display: 'flex',
        alignItems: 'center',
      },
      warning: {
        color: this.colors.black,
        backgroundColor: this.colors.yellow[2],
        border: `solid 2px ${this.colors.yellow[6]}`,
        borderRadius: this.radii[0],
        padding: this.space[3],
        display: 'flex',
        alignItems: 'center',
      },
    }
  },
  get headings() {
    return {
      h1: {
        // @ts-ignore
        fontSize: this.fontSizes.h1,
        fontWeight: this.fontWeights.bold,
      },
      lead: {
        // @ts-ignore
        fontSize: this.fontSizes.h1,
        fontWeight: this.fontWeights.bold,
        fontFamily: this.fonts.serif,
      },
      h2: {
        // @ts-ignore
        fontSize: this.fontSizes.h2,
        fontWeight: this.fontWeights.bold,
      },
      h3: {
        // @ts-ignore
        fontSize: this.fontSizes.h3,
        fontWeight: this.fontWeights.bold,
      },
      subhead: {
        // @ts-ignore
        fontSize: this.fontSizes.h4,
        fontWeight: this.fontWeights.bold,
      },
    }
  },
  get chips() {
    return {
      primary: {
        backgroundColor: this.colors.teal[2],
        color: this.colors.black,
      },
    }
  },
  get focusShadow() {
    return `0 0 4px 2px ${this.colors.primaryDark}`
  },
}
