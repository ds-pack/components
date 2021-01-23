import 'styled-components'

// Source: https://github.com/DefinitelyTyped/DefinitelyTyped/blob/93cc323acc6331cc92c57aea122c67bbb4ffdf4e/types/styled-system/index.d.ts#L30
type ObjectOrArray<T, K extends keyof any = keyof any> =
  | T[]
  | Record<K, T | Record<K, T> | T[]>

// Source: https://stackoverflow.com/a/59906630
type ArrayLengthMutationKeys =
  | 'splice'
  | 'push'
  | 'pop'
  | 'shift'
  | 'unshift'
  | number
type ArrayItems<T extends Array<any>> = T extends Array<infer TItems>
  ? TItems
  : never
type FixedLengthArray<T extends any[]> = Pick<
  T,
  Exclude<keyof T, ArrayLengthMutationKeys>
> & { [Symbol.iterator]: () => IterableIterator<ArrayItems<T>> }

type Colors = FixedLengthArray<string, 10>

type Variant = any

declare module 'styled-components' {
  export interface DefaultTheme {
    space: Array<string>
    fontSizes: any
    colors: {
      black: string
      white: string
      primary: string
      primaryLight: string
      primaryDark: string
      secondary: string
      secondaryLight: string
      secondaryDark: string
      tertiary: string
      tertiaryLight: string
      tertiaryDark: string
      disabledBg: string
      disabledFill: string
      gray: Colors
      blue: Colors
      indigo: Colors
      violet: Colors
      fuschia: Colors
      pink: Colors
      red: Colors
      orange: Colors
      yellow: Colors
      lime: Colors
      green: Colors
      teal: Colors
      cyan: Colors
    }
    fonts: {
      base: string
      serif: string
      monospace: string
    }
    fontWeights: {
      base: number
      bold: number
    }
    sizes: {
      content: string
    }
    radii: FixedLengthArray<string, 3>
    zIndices: FixedLengthArray<number, 5>
    breakpoints: FixedLengthArray<string, 4>
    mediaQueries: {
      small: string
      medium: string
      large: string
      xLarge: string
    }
    lists: {
      base: Variant
      ordered: Variant
      unordered: Variant
    }
    banners: {
      success: Variant
      info: Variant
      error: Variant
      warning: Variant
    }
    headings: {
      h1: variant
      lead: Variant
      h2: Variant
      h3: Variant
      subhead: Variant
    }
    focusShadow: string
    chips: {
      primary: {
        backgroundColor: string
        color: string
      }
    }
    shadows: {
      focusShadow: string
    }
  }
}
