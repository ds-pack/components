let baseBreakpoint = 10

interface Breakpoints {
  small: string
  medium: string
  large: string
  extraLarge: string
}

export let breakpoints = [
  ['small', baseBreakpoint],
  ['medium', baseBreakpoint * 2],
  ['large', baseBreakpoint * 3],
  ['extraLarge', baseBreakpoint * 4],
].reduce(
  (acc, [label, val]): Partial<Breakpoints> => ({
    ...acc,
    [label]: `${val}em`,
  }),
  {},
) as Breakpoints
