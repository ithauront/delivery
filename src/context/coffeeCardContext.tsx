import React, { createContext, ReactNode, useState, useEffect } from 'react'

import havaiano from '../assets/coffeeCup/havaiano.svg'
import expressoAmer from '../assets/coffeeCup/expressoamer.svg'
import expressoCream from '../assets/coffeeCup/expressocream.svg'
import expresso from '../assets/coffeeCup/expresso.svg'
import ExpressoGel from '../assets/coffeeCup/expressogel.svg'
import CafeComLeite from '../assets/coffeeCup/comleite.svg'
import Latte from '../assets/coffeeCup/latte.svg'
import Capuccino from '../assets/coffeeCup/capuccino.svg'
import Macchiato from '../assets/coffeeCup/macchiato.svg'
import Mocaccino from '../assets/coffeeCup/mocaccino.svg'
import Choco from '../assets/coffeeCup/chocoquente.svg'
import Cubano from '../assets/coffeeCup/cubano.svg'
import Arabe from '../assets/coffeeCup/arabe.svg'
import Irlandes from '../assets/coffeeCup/irlandes.svg'

export interface CoffeeCardProps {
  coffeeCardName: string
  coffeeCardDescription?: string
  coffeeCardImg: string
  coffeeCardPrice: number
  isInCheckout?: boolean
  filterNames?: string[]
  isSelected?: boolean
  onClick?: (name: string) => void
  isCoffeeCardSelected?: boolean
  onCoffeeCardSelected?: () => void
  coffeeCardKey: number
}

interface CoffeeCardStatesType {
  isCoffeeCardSelected: boolean
  counterState: number
}

interface CoffeeCardContextProps {
  coffeeCardStates: CoffeeCardStatesType[]
  setCoffeeCardStates: React.Dispatch<
    React.SetStateAction<CoffeeCardStatesType[]>
  >
  handleIsCoffeeCardSelected: (index: number) => void
  handleCounterStateChange: (counterState: number, index: number) => void
  shoppingCartItens: number
  setShoppingCartItens: React.Dispatch<React.SetStateAction<number>>
}

export const CoffeeCardContext = createContext<CoffeeCardContextProps>({
  coffeeCardStates: [],
  setCoffeeCardStates: () => {},
  handleIsCoffeeCardSelected: () => {},
  handleCounterStateChange: () => {},
  shoppingCartItens: 0,
  setShoppingCartItens: () => {},
})

export const CoffeeCardContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [coffeeCardStates, setCoffeeCardStates] = React.useState(
    coffeeCards.map(() => ({ isCoffeeCardSelected: false, counterState: 1 })),
  )

  const [shoppingCartItens, setShoppingCartItens] = useState(0)
  useEffect(() => {
    let totalItems = 0
    coffeeCardStates.forEach((cardState) => {
      if (cardState.isCoffeeCardSelected) {
        totalItems += cardState.counterState
      }
    })
    setShoppingCartItens(totalItems)
  }, [coffeeCardStates])

  const handleIsCoffeeCardSelected = (index: number) => {
    setCoffeeCardStates((prevState) => {
      const updatedStates = [...prevState]
      updatedStates[index].isCoffeeCardSelected = true
      updatedStates[index].counterState = prevState[index].counterState

      return updatedStates
    })
  }
  const handleCounterStateChange = (
    counterState: number,
    coffeeCardKey: number,
  ) => {
    setCoffeeCardStates((prevState) => {
      if (prevState[coffeeCardKey].counterState !== counterState) {
        const updatedStates = [...prevState]
        updatedStates[coffeeCardKey] = {
          ...updatedStates[coffeeCardKey],
          counterState,
        }
        return updatedStates
      }
      return prevState
    })
  }

  return (
    <CoffeeCardContext.Provider
      value={{
        coffeeCardStates,
        setCoffeeCardStates,
        handleIsCoffeeCardSelected,
        handleCounterStateChange,
        shoppingCartItens,
        setShoppingCartItens,
      }}
    >
      {children}
    </CoffeeCardContext.Provider>
  )
}

export const coffeeCards: CoffeeCardProps[] = [
  {
    coffeeCardDescription:
      'O tradicional café feito com água quente e grãos moídos',
    coffeeCardImg: expresso,
    coffeeCardName: 'Expresso',
    coffeeCardPrice: 9.99,
    filterNames: ['tradicional'],
    coffeeCardKey: 1,
  },
  {
    coffeeCardDescription: 'Expresso diluído, menos intenso que o tradicional',
    coffeeCardImg: expressoAmer,
    coffeeCardName: 'Expresso Americano',
    coffeeCardPrice: 9.99,
    filterNames: ['tradicional'],
    coffeeCardKey: 2,
  },
  {
    coffeeCardDescription: 'Café expresso tradicional com espuma cremosa',
    coffeeCardImg: expressoCream,
    coffeeCardName: 'Expresso Cremoso',
    coffeeCardPrice: 9.99,
    filterNames: ['tradicional'],
    coffeeCardKey: 3,
  },
  {
    coffeeCardDescription: 'Bebida preparada com café expresso e cubos de gelo',
    coffeeCardImg: ExpressoGel,
    coffeeCardName: 'Expresso Gelado',
    coffeeCardPrice: 9.99,
    filterNames: ['tradicional', 'gelado'],
    coffeeCardKey: 4,
  },
  {
    coffeeCardDescription:
      'Meio a meio de expresso tradicional com leite vaporizado',
    coffeeCardImg: CafeComLeite,
    coffeeCardName: 'Cafe Com Leite',
    coffeeCardPrice: 9.99,
    filterNames: ['tradicional', 'com leite'],
    coffeeCardKey: 5,
  },
  {
    coffeeCardDescription:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    coffeeCardImg: Latte,
    coffeeCardName: 'Latte',
    coffeeCardPrice: 9.99,
    filterNames: ['tradicional', 'com leite'],
    coffeeCardKey: 6,
  },
  {
    coffeeCardDescription:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    coffeeCardImg: Capuccino,
    coffeeCardName: 'Capuccino',
    coffeeCardPrice: 9.99,
    filterNames: ['tradicional', 'com leite'],
    coffeeCardKey: 7,
  },
  {
    coffeeCardDescription:
      'Café expresso misturado com um pouco de leite quente e espuma',
    coffeeCardImg: Macchiato,
    coffeeCardName: 'Macchiato',
    coffeeCardPrice: 9.99,
    filterNames: ['tradicional', 'com leite'],
    coffeeCardKey: 8,
  },
  {
    coffeeCardDescription:
      'Café expresso com calda de chocolate, pouco leite e espuma',
    coffeeCardImg: Mocaccino,
    coffeeCardName: 'Mocaccino',
    coffeeCardPrice: 9.99,
    filterNames: ['tradicional', 'com leite'],
    coffeeCardKey: 9,
  },
  {
    coffeeCardDescription:
      'Bebida feita com chocolate dissolvido no leite quente e café',
    coffeeCardImg: Choco,
    coffeeCardName: 'Chocolate Quente',
    coffeeCardPrice: 9.99,
    filterNames: ['especial', 'com leite'],
    coffeeCardKey: 10,
  },
  {
    coffeeCardDescription:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    coffeeCardImg: Cubano,
    coffeeCardName: 'Cubano',
    coffeeCardPrice: 9.99,
    filterNames: ['especial', 'alcoolico', 'gelado'],
    coffeeCardKey: 11,
  },
  {
    coffeeCardDescription:
      'Bebida adocicada preparada com café e leite de coco',
    coffeeCardImg: havaiano,
    coffeeCardName: 'Havaiano',
    coffeeCardPrice: 9.99,
    filterNames: ['especial'],
    coffeeCardKey: 12,
  },
  {
    coffeeCardDescription:
      'Bebida preparada com grãos de café árabe e especiarias',
    coffeeCardImg: Arabe,
    coffeeCardName: 'Arabe',
    coffeeCardPrice: 9.99,
    filterNames: ['especial'],
    coffeeCardKey: 13,
  },
  {
    coffeeCardDescription:
      'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    coffeeCardImg: Irlandes,
    coffeeCardName: 'Irlandês',
    coffeeCardPrice: 9.99,
    filterNames: ['especial', 'alcoolico'],
    coffeeCardKey: 14,
  },
]

export const coffeeCardContext =
  React.createContext<CoffeeCardProps[]>(coffeeCards)
