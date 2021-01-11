import { createContext } from 'react'

let defaultFlags = {
  useCSSVars: false,
}

export interface Flags {
  useCSSVars?: boolean
}
export let flagContext = createContext<Flags>(defaultFlags)
