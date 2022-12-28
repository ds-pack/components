let baseBreakpoint = 20

export let breakpoints = [
  ['small', baseBreakpoint],
  ['medium', baseBreakpoint * 2],
  ['large', baseBreakpoint * 3],
  ['extraLarge', baseBreakpoint * 4],
].reduce(
  (acc, [label, val]): Partial<Record<string, string>> => ({
    ...acc,
    [label]: `${val}em`,
  }),
  {},
) as Record<string, string>
