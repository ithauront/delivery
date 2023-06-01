import React from 'react'
import { coffeeCardContext, CoffeeCardProps } from './coffeeCardContext'

interface CoffeeCardContextProviderProps {
  children: React.ReactNode
}

export const CoffeeCardContextProvider: React.FC<
  CoffeeCardContextProviderProps
> = ({ children }) => {
  const data: CoffeeCardProps[] = []

  return (
    <coffeeCardContext.Provider value={data}>
      {children}
    </coffeeCardContext.Provider>
  )
}
