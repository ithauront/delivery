import { ShoppingCart, Trash } from 'phosphor-react'
import { Filter } from '../../filter'
import { StyledCoffeeCard } from './styles'
import { Counter } from '../../counter'
import { useState } from 'react'

interface CoffeeCardProps {
  coffeeCardName: string
  coffeeCardDescription?: string
  coffeeCardImg: string
  coffeeCardPrice: number
  isInCheckout?: boolean
  filterNames?: string[]
  shouldRenderCoffeeCard?: boolean
  onClick?: (name: string) => void
  isCoffeeCardSelected?: boolean
}

export function CoffeeCard({
  coffeeCardImg,
  coffeeCardName,
  coffeeCardPrice,
  coffeeCardDescription,
  isInCheckout = false,
  filterNames = [],
  shouldRenderCoffeeCard = true,
}: CoffeeCardProps) {
  const [coffeeCardStates, setCoffeeCardStates] = useState<{
    isCoffeeCardSelected: boolean
  }>({
    isCoffeeCardSelected: false,
  })
  if (!shouldRenderCoffeeCard) {
    return null
  }

  const handleIsCoofeeCardSelected = () => {
    setCoffeeCardStates({
      ...coffeeCardStates,
      isCoffeeCardSelected: true,
    })
  }
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
                {filterNames.map((name) => (
                  <Filter
                    key={name}
                    filterNames={[name]}
                    disabled={true}
                    isSelected={false}
                  />
                ))}
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
                <Counter />
                <button
                  className="purpleShoppingCart"
                  onClick={handleIsCoofeeCardSelected}
                >
                  <ShoppingCart weight="fill" size={22} />
                </button>
              </section>
            </footer>
          </div>
        </StyledCoffeeCard>
      )}
    </>
  )
}
