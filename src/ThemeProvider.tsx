import React from 'react'
import defaultTheme from './theme'
import {
  ThemeProvider as StyledProvider,
  DefaultTheme,
} from 'styled-components'

export let themeContext = React.createContext(defaultTheme)

interface Props {
  theme?: DefaultTheme
  children: any
}

export function ThemeProvider({ theme = defaultTheme, children }: Props) {
  return (
    <themeContext.Provider
      // @ts-ignore
      value={theme}
    >
      <StyledProvider theme={theme}>{children}</StyledProvider>
    </themeContext.Provider>
  )
}
