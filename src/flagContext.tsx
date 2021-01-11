import { createContext } from 'react'

export let defaultFlags = {
  useCSSVars: false,
}

export interface Flags {
  useCSSVars?: boolean
}
export let flagContext = createContext<Flags>(defaultFlags)
