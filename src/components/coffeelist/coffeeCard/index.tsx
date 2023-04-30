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
        <img
          src={coffeeCardImg}
          alt="xicara de café"
          className="coffeeCupImg"
        />
        {!isInCheckout && (
          <div>
            <Filter filterName="Especial" disabled={true} />
            <Filter filterName="Quente" disabled={true} />
          </div>
        )}
      </header>
      <article>
        <h1 className="name">{coffeeCardName}</h1>
        {isInCheckout ? (
          <div className="price">
            R$<strong>{coffeeCardPrice}</strong>
          </div>
        ) : (
          <p>{coffeeCardDescription}</p>
        )}
      </article>

      <footer>
        {!isInCheckout && (
          <div className="price">
            R$<strong>{coffeeCardPrice}</strong>
          </div>
        )}
        <section className="buttons">
          <div>
            <Counter />
          </div>
          {isInCheckout ? (
            <button className="remove">
              <div className="trashIcon">
                <Trash size={22} />
              </div>
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
