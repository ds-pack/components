import * as React from 'react'
import defaultTheme from './theme'
import { ThemeProvider as StyledProvider } from 'styled-components'

export let themeContext = React.createContext(defaultTheme)

export function ThemeProvider({
  theme = defaultTheme,
  children,
}: {
  theme: typeof defaultTheme
  children: any
}) {
  return (
    <themeContext.Provider value={theme}>
      <StyledProvider theme={theme}>{children}</StyledProvider>
    </themeContext.Provider>
  )
}
