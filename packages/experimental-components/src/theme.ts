let baseBreakpoint = 10

interface Breakpoints {
  small: string
  medium: string
  large: string
  extraLarge: string
}

// @ts-ignore
export let breakpoints: Breakpoints = [
  ['small', baseBreakpoint],
  ['medium', baseBreakpoint * 2],
  ['large', baseBreakpoint * 3],
  ['extraLarge', baseBreakpoint * 4],
].reduce(
  // @ts-ignore
  (acc, [label, val]): Breakpoints => ({ ...acc, [label]: `${val}em` }),
  {},
)
