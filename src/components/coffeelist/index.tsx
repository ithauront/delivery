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

  const handleIsSelected = (filterName: string) => {
    setFilterStates((prevFilterStates) => ({
      ...prevFilterStates,
      [filterName]: !prevFilterStates[filterName],
    }))
  }
  return (
    <>
      <StyledCoffeeListHeader>
        <h1>Nossos cafés</h1>
        <section>
          <Filter
            filterName="Tradicional"
            isSelected={filterStates.Tradicional}
            onClick={() => handleIsSelected('Tradicional')}
          />
          <Filter
            filterName="Especial"
            isSelected={filterStates.Especial}
            onClick={() => handleIsSelected('Especial')}
          />
          <Filter
            filterName="Com Leite"
            isSelected={filterStates['Com Leite']}
            onClick={() => handleIsSelected('Com Leite')}
          />
          <Filter
            filterName="Alcoolico"
            isSelected={filterStates.Alcoolico}
            onClick={() => handleIsSelected('Alcoolico')}
          />
          <Filter
            filterName="Gelado"
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
            key={1}
          />
          <CoffeeCard
            coffeeCardDescription="muito bom"
            coffeeCardImg={ExpressoAmer}
            coffeeCardName="Expresso Americano"
            coffeeCardPrice={9.99}
            key={2}
          />
          <CoffeeCard
            coffeeCardDescription="muito bom"
            coffeeCardImg={ExpressoCream}
            coffeeCardName="Expresso Cremoso"
            coffeeCardPrice={9.99}
            key={3}
          />
          <CoffeeCard
            coffeeCardDescription="muito bom"
            coffeeCardImg={ExpressoGel}
            coffeeCardName="Expresso Gelado"
            coffeeCardPrice={9.99}
            key={4}
          />
          <CoffeeCard
            coffeeCardDescription="muito bom"
            coffeeCardImg={CafeComLeite}
            coffeeCardName="Café com Leite"
            coffeeCardPrice={9.99}
            key={5}
          />
          <CoffeeCard
            coffeeCardDescription="muito bom"
            coffeeCardImg={Latte}
            coffeeCardName="Latte"
            coffeeCardPrice={9.99}
            key={6}
          />
          <CoffeeCard
            coffeeCardDescription="muito bom"
            coffeeCardImg={Capuccino}
            coffeeCardName="Capuccino"
            coffeeCardPrice={9.99}
            key={7}
          />
          <CoffeeCard
            coffeeCardDescription="muito bom"
            coffeeCardImg={Macchiato}
            coffeeCardName="Macchiato"
            coffeeCardPrice={9.99}
            key={8}
          />
          <CoffeeCard
            coffeeCardDescription="muito bom"
            coffeeCardImg={Mocaccino}
            coffeeCardName="Mocaccino"
            coffeeCardPrice={9.99}
            key={9}
          />
          <CoffeeCard
            coffeeCardDescription="muito bom"
            coffeeCardImg={Choco}
            coffeeCardName="Chocolate Quente"
            coffeeCardPrice={9.99}
            key={10}
          />
          <CoffeeCard
            coffeeCardDescription="muito bom"
            coffeeCardImg={Cubano}
            coffeeCardName="Cubano"
            coffeeCardPrice={9.99}
            key={11}
          />
          <CoffeeCard
            coffeeCardDescription="Bebida adocicada preparada com café e leite de coco"
            coffeeCardImg={Havaiano}
            coffeeCardName="Havaiano"
            coffeeCardPrice={9.99}
            key={12}
          />
          <CoffeeCard
            coffeeCardDescription="muito bom"
            coffeeCardImg={Arabe}
            coffeeCardName="Arabe"
            coffeeCardPrice={9.99}
            key={13}
          />
          <CoffeeCard
            coffeeCardDescription="Bebida adocicada preparada com café e leite de coco"
            coffeeCardImg={Irlandes}
            coffeeCardName="Irlandês"
            coffeeCardPrice={9.99}
            key={14}
          />
        </main>
      </StyledCoffeeList>
    </>
  )
}
