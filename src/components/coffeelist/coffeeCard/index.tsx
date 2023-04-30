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
    <>
      {isInCheckout ? (
        <StyledCoffeeCard isInCheckout={isInCheckout}>
          <div className="checkoutContainer">
            <header>
              <img
                src={coffeeCardImg}
                alt="xicara de café"
                className="coffeeCupImg"
              />
            </header>
            <article className="articleCheckout">
              <h1 className="name">{coffeeCardName}</h1>
              <section className="buttons">
                <Counter isInCheckout={true} />
                <button className="remove">
                  <div className="trashIcon">
                    <Trash size={22} />
                  </div>
                  Remover
                </button>
              </section>
            </article>
            <footer className="footerCheckout">R${coffeeCardPrice}</footer>
          </div>
        </StyledCoffeeCard>
      ) : (
        <StyledCoffeeCard isInCheckout={isInCheckout}>
          <div className="homeContainer">
            <header className="headerHome">
              <img
                src={coffeeCardImg}
                alt="xicara de café"
                className="coffeeCupImg"
              />
              <div>
                <Filter filterName="Especial" disabled={true} />
                <Filter filterName="Quente" disabled={true} />
              </div>
            </header>
            <article>
              <h1 className="nameHome">{coffeeCardName}</h1>
              <p>{coffeeCardDescription}</p>
            </article>
            <footer className="isNotCheckout">
              <div className="priceHome">
                R$<strong className="priceHome">{coffeeCardPrice}</strong>
              </div>
              <section className="buttons">
                <div>
                  <Counter />
                  <button className="purpleShoppingCart">
                    <ShoppingCart weight="fill" size={22} />
                  </button>
                </div>
              </section>
            </footer>
          </div>
        </StyledCoffeeCard>
      )}
    </>
  )
}
