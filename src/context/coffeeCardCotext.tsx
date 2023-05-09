import { ReactNode, createContext } from 'react'

interface coffeeCardContextType {}

interface CoffeeCardContextProviderProps {
  children: ReactNode
}

export const coffeeCardContext = createContext({} as coffeeCardContextType)

export function coffeeCardContextProvider({
  children,
}: CoffeeCardContextProviderProps) {
  return (
    <coffeeCardContext.Provider value={{}}>
      {children}
    </coffeeCardContext.Provider>
  )
}
