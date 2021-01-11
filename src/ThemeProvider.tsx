import React from 'react'
import defaultTheme from './theme'
import {
  ThemeProvider as StyledProvider,
  DefaultTheme,
} from 'styled-components'
import { flagContext, Flags } from './flagContext'

export let themeContext = React.createContext<DefaultTheme>(defaultTheme)

interface Props {
  theme?: DefaultTheme
  flags?: Flags
  children: any
}

export function ThemeProvider({
  theme = defaultTheme,
  flags,
  children,
}: Props) {
  return (
    <themeContext.Provider value={theme}>
      <flagContext.Provider value={flags}>
        <StyledProvider theme={theme}>{children}</StyledProvider>
      </flagContext.Provider>
    </themeContext.Provider>
  )
}
