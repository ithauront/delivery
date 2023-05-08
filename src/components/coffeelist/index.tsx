import { CoffeeCard } from './coffeeCard'
import Havaiano from '../../assets/coffeeCup/havaiano.svg'
import Expresso from '../../assets/coffeeCup/expresso.svg'
import ExpressoAmer from '../../assets/coffeeCup/expressoamer.svg'
import ExpressoCream from '../../assets/coffeeCup/expressocream.svg'
import ExpressoGel from '../../assets/coffeeCup/expressogel.svg'
import CafeComLeite from '../../assets/coffeeCup/comleite.svg'
import Latte from '../../assets/coffeeCup/latte.svg'
import Capuccino from '../../assets/coffeeCup/capuccino.svg'
import Macchiato from '../../assets/coffeeCup/macchiato.svg'
import Mocaccino from '../../assets/coffeeCup/mocaccino.svg'
import Choco from '../../assets/coffeeCup/chocoquente.svg'
import Cubano from '../../assets/coffeeCup/cubano.svg'
import Arabe from '../../assets/coffeeCup/arabe.svg'
import Irlandes from '../../assets/coffeeCup/irlandes.svg'
import { StyledCoffeeList, StyledCoffeeListHeader } from './styles'
import { useState } from 'react'
import { Filter } from '../filter'

export function Coffeelist() {
  const [filterStates, setFilterStates] = useState<{ [key: string]: boolean }>({
    Tradicional: false,
    Especial: false,
    'Com Leite': false,
    Alcoolico: false,
    Gelado: false,
  })

  const handleIsSelected = (name: string) => {
    setFilterStates((prevFilterStates) => ({
      ...prevFilterStates,
      [name]: !prevFilterStates[name],
    }))
  }

  const shouldRenderCoffeeCard = (filterNames: string[]) => {
    const activeFilters = Object.keys(filterStates)
      .filter((key) => filterStates[key])
      .map((filter) => filter.toLowerCase())

    if (activeFilters.length === 0) {
      return true
    }

    const matchingFilters = filterNames.filter((name) =>
      activeFilters.includes(name.toLowerCase()),
    )

    return matchingFilters.length > 0
  }

  return (
    <>
      <StyledCoffeeListHeader>
        <h1>Nossos cafés</h1>
        <section>
          <Filter
            filterNames={['Tradicional']}
            isSelected={filterStates.Tradicional}
            onClick={() => handleIsSelected('Tradicional')}
          />
          <Filter
            filterNames={['Especial']}
            isSelected={filterStates.Especial}
            onClick={() => handleIsSelected('Especial')}
          />
          <Filter
            filterNames={['Com Leite']}
            isSelected={filterStates['Com Leite']}
            onClick={() => handleIsSelected('Com Leite')}
          />
          <Filter
            filterNames={['Alcoolico']}
            isSelected={filterStates.Alcoolico}
            onClick={() => handleIsSelected('Alcoolico')}
          />
          <Filter
            filterNames={['Gelado']}
            isSelected={filterStates.Gelado}
            onClick={() => handleIsSelected('Gelado')}
          />
        </section>
      </StyledCoffeeListHeader>

      <StyledCoffeeList>
        <main>
          <CoffeeCard
            coffeeCardDescription="Bebida adocicada preparada com café e leite de coco"
            coffeeCardImg={Expresso}
            coffeeCardName="Expresso"
            coffeeCardPrice={9.99}
            filterNames={['tradicional']}
            key={1}
            shouldRenderCoffeeCard={shouldRenderCoffeeCard(['tradicional'])}
          />
          <CoffeeCard
            coffeeCardDescription="muito bom"
            coffeeCardImg={ExpressoAmer}
            coffeeCardName="Expresso Americano"
            coffeeCardPrice={9.99}
            filterNames={['tradicional']}
            key={2}
            shouldRenderCoffeeCard={shouldRenderCoffeeCard(['tradicional'])}
          />
          <CoffeeCard
            coffeeCardDescription="muito bom"
            coffeeCardImg={ExpressoCream}
            coffeeCardName="Expresso Cremoso"
            coffeeCardPrice={9.99}
            filterNames={['tradicional']}
            key={3}
            shouldRenderCoffeeCard={shouldRenderCoffeeCard(['tradicional'])}
          />
          <CoffeeCard
            coffeeCardDescription="muito bom"
            coffeeCardImg={ExpressoGel}
            coffeeCardName="Expresso Gelado"
            coffeeCardPrice={9.99}
            filterNames={['tradicional', 'gelado']}
            key={4}
            shouldRenderCoffeeCard={shouldRenderCoffeeCard([
              'tradicional',
              'gelado',
            ])}
          />
          <CoffeeCard
            coffeeCardDescription="muito bom"
            coffeeCardImg={CafeComLeite}
            coffeeCardName="Café com Leite"
            coffeeCardPrice={9.99}
            filterNames={['tradicional', 'com leite']}
            key={5}
            shouldRenderCoffeeCard={shouldRenderCoffeeCard([
              'tradicional',
              'com leite',
            ])}
          />
          <CoffeeCard
            coffeeCardDescription="muito bom"
            coffeeCardImg={Latte}
            coffeeCardName="Latte"
            coffeeCardPrice={9.99}
            filterNames={['tradicional', 'com leite']}
            key={6}
            shouldRenderCoffeeCard={shouldRenderCoffeeCard([
              'tradicional',
              'com leite',
            ])}
          />
          <CoffeeCard
            coffeeCardDescription="muito bom"
            coffeeCardImg={Capuccino}
            coffeeCardName="Capuccino"
            coffeeCardPrice={9.99}
            filterNames={['tradicional', 'com leite']}
            key={7}
            shouldRenderCoffeeCard={shouldRenderCoffeeCard([
              'tradicional',
              'com leite',
            ])}
          />
          <CoffeeCard
            coffeeCardDescription="muito bom"
            coffeeCardImg={Macchiato}
            coffeeCardName="Macchiato"
            coffeeCardPrice={9.99}
            filterNames={['tradicional', 'com leite']}
            key={8}
            shouldRenderCoffeeCard={shouldRenderCoffeeCard([
              'tradicional',
              'com leite',
            ])}
          />
          <CoffeeCard
            coffeeCardDescription="muito bom"
            coffeeCardImg={Mocaccino}
            coffeeCardName="Mocaccino"
            coffeeCardPrice={9.99}
            filterNames={['tradicional', 'com leite']}
            key={9}
            shouldRenderCoffeeCard={shouldRenderCoffeeCard([
              'tradicional',
              'com leite',
            ])}
          />
          <CoffeeCard
            coffeeCardDescription="muito bom"
            coffeeCardImg={Choco}
            coffeeCardName="Chocolate Quente"
            coffeeCardPrice={9.99}
            filterNames={['especial', 'com leite']}
            key={10}
            shouldRenderCoffeeCard={shouldRenderCoffeeCard([
              'especial',
              'com leite',
            ])}
          />
          <CoffeeCard
            coffeeCardDescription="muito bom"
            coffeeCardImg={Cubano}
            coffeeCardName="Cubano"
            coffeeCardPrice={9.99}
            filterNames={['especial', 'alcoolico', 'gelado']}
            key={11}
            shouldRenderCoffeeCard={shouldRenderCoffeeCard([
              'especial',
              'alcoolico',
              'gelado',
            ])}
          />
          <CoffeeCard
            coffeeCardDescription="Bebida adocicada preparada com café e leite de coco"
            coffeeCardImg={Havaiano}
            coffeeCardName="Havaiano"
            coffeeCardPrice={9.99}
            filterNames={['especial']}
            key={12}
            shouldRenderCoffeeCard={shouldRenderCoffeeCard(['especial'])}
          />
          <CoffeeCard
            coffeeCardDescription="muito bom"
            coffeeCardImg={Arabe}
            coffeeCardName="Arabe"
            coffeeCardPrice={9.99}
            filterNames={['especial']}
            key={13}
            shouldRenderCoffeeCard={shouldRenderCoffeeCard(['especial'])}
          />
          <CoffeeCard
            coffeeCardDescription="Bebida adocicada preparada com café e leite de coco"
            coffeeCardImg={Irlandes}
            coffeeCardName="Irlandês"
            coffeeCardPrice={9.99}
            filterNames={['especial', 'alcoolico']}
            key={14}
            shouldRenderCoffeeCard={shouldRenderCoffeeCard([
              'especial',
              'alcoolico',
            ])}
          />
        </main>
      </StyledCoffeeList>
    </>
  )
}
