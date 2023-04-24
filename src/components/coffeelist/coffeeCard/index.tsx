import { ShoppingCart } from 'phosphor-react'
import { Filter } from '../../filter'

interface CoffeeCardProps {
  coffeeCardName: string
  coffeeCardDescription: string
  coffeeCardImg: string
  coffeeCardPrice: number
}

export function CoffeeCard(props: CoffeeCardProps) {
  return (
    <main>
      <header>
        <img src={props.coffeeCardImg} alt="xicara de café" />
        <Filter filterName="XX" />
      </header>
      <article>
        <h1>{props.coffeeCardName}</h1>
        <p>{props.coffeeCardDescription}</p>
      </article>
      <footer>
        <div>R\${props.coffeeCardPrice}</div>
        <div>Component quantidade</div>
        <button>
          <ShoppingCart weight="fill" size={22} />
        </button>
      </footer>
    </main>
  )
}
