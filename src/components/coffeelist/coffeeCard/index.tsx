import { ShoppingCart, Trash } from 'phosphor-react'
import { Filter } from '../../filter'
import { StyledCoffeeCard } from './styles'
import { Counter } from '../../counter'

interface CoffeeCardProps {
  coffeeCardName: string
  coffeeCardDescription?: string
  coffeeCardImg: string
  coffeeCardPrice: number
  isInCheckout?: boolean
}

export function CoffeeCard({
  coffeeCardImg,
  coffeeCardName,
  coffeeCardPrice,
  coffeeCardDescription,
  isInCheckout = false,
}: CoffeeCardProps) {
  return (
    <StyledCoffeeCard isInCheckout={isInCheckout}>
      <header>
        <img src={coffeeCardImg} alt="xicara de café" />
        {!isInCheckout && (
          <div>
            <Filter filterName="Especial" disabled={true} />
            <Filter filterName="Quente" disabled={true} />
          </div>
        )}
      </header>
      <article>
        <h1>{coffeeCardName}</h1>
        <p>{coffeeCardDescription}</p>
      </article>
      <footer>
        <div>
          R$<strong>{coffeeCardPrice}</strong>
        </div>
        <section>
          <div>
            <Counter />
          </div>
          {isInCheckout ? (
            <button className="remove">
              <Trash weight="fill" size={22} />
              Remover
            </button>
          ) : (
            <button className="purpleShoppingCart">
              <ShoppingCart weight="fill" size={22} />
            </button>
          )}
        </section>
      </footer>
    </StyledCoffeeCard>
  )
}
