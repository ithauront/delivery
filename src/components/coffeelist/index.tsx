import { CoffeeCard } from './coffeeCard'
import { StyledCoffeeList, StyledCoffeeListHeader } from './styles'
import { useState, useContext } from 'react'
import { Filter } from '../filter'
import { coffeeCards, CoffeeCardContext } from '../../context/coffeeCardContext'

export function Coffeelist() {
  const [filterStates, setFilterStates] = useState<{ [key: string]: boolean }>({
    tradicional: false,
    especial: false,
    'com leite': false,
    alcoolico: false,
    gelado: false,
  })

  const handleIsSelected = (name: string) => {
    setFilterStates((prevFilterStates) => ({
      ...prevFilterStates,
      [name]: !prevFilterStates[name],
    }))
  }

  const shouldRenderCoffeeCard = (filterNames?: string[]) => {
    const activeFilters = Object.keys(filterStates).filter(
      (key) => filterStates[key],
    )

    if (activeFilters.length === 0) {
      return true
    }

    const matchingFilters = filterNames?.filter((name) =>
      activeFilters.includes(name),
    )
    if (!matchingFilters) {
      return
    }

    return matchingFilters.length > 0
  }

  const { coffeeCardStates, handleIsCoffeeCardSelected } =
    useContext(CoffeeCardContext)

  return (
    <>
      <StyledCoffeeListHeader>
        <h1>Nossos cafés</h1>
        <section>
          <Filter
            filterNames={['tradicional']}
            isSelected={filterStates.tradicional}
            onClick={() => handleIsSelected('tradicional')}
          />
          <Filter
            filterNames={['especial']}
            isSelected={filterStates.especial}
            onClick={() => handleIsSelected('especial')}
          />
          <Filter
            filterNames={['com leite']}
            isSelected={filterStates['com leite']}
            onClick={() => handleIsSelected('com leite')}
          />
          <Filter
            filterNames={['alcoolico']}
            isSelected={filterStates.alcoolico}
            onClick={() => handleIsSelected('alcoolico')}
          />
          <Filter
            filterNames={['gelado']}
            isSelected={filterStates.gelado}
            onClick={() => handleIsSelected('gelado')}
          />
        </section>
      </StyledCoffeeListHeader>

      <StyledCoffeeList>
        <main>
          {coffeeCards.map((coffeeCard, index) => {
            if (shouldRenderCoffeeCard(coffeeCard.filterNames)) {
              return (
                <CoffeeCard
                  key={coffeeCard.coffeeCardKey}
                  isCoffeeCardSelected={
                    coffeeCardStates[index].isCoffeeCardSelected
                  }
                  onCoffeeCardSelected={() => handleIsCoffeeCardSelected(index)}
                  {...coffeeCard}
                />
              )
            }
            return null
          })}
        </main>
      </StyledCoffeeList>
    </>
  )
}
