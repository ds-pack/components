import * as React from 'react'
import defaultTheme from './theme'
import { ThemeProvider as StyledProvider } from 'styled-components'

export let themeContext = React.createContext(defaultTheme)

interface Props {
  theme?: typeof defaultTheme
  children: any
}

export function ThemeProvider({ theme = defaultTheme, children }: Props) {
  return (
    <themeContext.Provider value={theme}>
      <StyledProvider theme={theme}>{children}</StyledProvider>
    </themeContext.Provider>
  )
}
