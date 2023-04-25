import { ShoppingCart } from 'phosphor-react'
import { Filter } from '../../filter'
import { StyledCoffeeCard } from './styles'

interface CoffeeCardProps {
  coffeeCardName: string
  coffeeCardDescription: string
  coffeeCardImg: string
  coffeeCardPrice: number
}

export function CoffeeCard(props: CoffeeCardProps) {
  return (
    <StyledCoffeeCard>
      <header>
        <img src={props.coffeeCardImg} alt="xicara de café" />
        <div>
          <Filter filterName="Especial" disabled={true} />
          <Filter filterName="Quente" disabled={true} />
        </div>
      </header>
      <article>
        <h1>{props.coffeeCardName}</h1>
        <p>{props.coffeeCardDescription}</p>
      </article>
      <footer>
        <div>
          R$<strong>{props.coffeeCardPrice}</strong>
        </div>
        <section>
          <div>Component quantidade</div>
          <button>
            <ShoppingCart weight="fill" size={22} />
          </button>
        </section>
      </footer>
    </StyledCoffeeCard>
  )
}
