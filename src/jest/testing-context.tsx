import { createContext } from 'react'

export interface ComponentContextShape {
  value: string | undefined
  onClick?: (value: string) => void
}

export const ComponentContext = createContext<ComponentContextShape>({ value: 'none', onClick: (value: string) => {} })
