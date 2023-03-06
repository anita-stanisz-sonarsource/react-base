import { createContext, useContext } from 'react';

export interface ComponentContextShape {
  value: string | undefined;
  onClick: (value: string) => void | undefined;
}

export const ComponentContext = createContext<ComponentContextShape>({ value: 'none', onClick: (value: string) => {} });

export default function ComponentContextProvider({ children }: { children: React.ReactNode }) {
  return (<ComponentContext.Provider value={useComponentContext()}>
    {children}
  </ComponentContext.Provider>)
}

export function useComponentContext() {
  return useContext(ComponentContext);
}
