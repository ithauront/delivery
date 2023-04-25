import { CoffeeCard } from './coffeeCard'
import Havaiano from '../../assets/havaiano.svg'

export function Coffeelist() {
  return (
    <div>
      <CoffeeCard
        coffeeCardDescription="Bebida adocicada preparada com café e leite de coco"
        coffeeCardImg={Havaiano}
        coffeeCardName="Havaiano"
        coffeeCardPrice={9.99}
        key={1}
      />
      <CoffeeCard
        coffeeCardDescription="Bebida adocicada preparada com café e leite de coco"
        coffeeCardImg="caf"
        coffeeCardName="Expresso"
        coffeeCardPrice={9.99}
        key={2}
      />
      <CoffeeCard
        coffeeCardDescription="muito bom"
        coffeeCardImg="caf"
        coffeeCardName="expresso"
        coffeeCardPrice={9.99}
        key={3}
      />
      <CoffeeCard
        coffeeCardDescription="muito bom"
        coffeeCardImg="caf"
        coffeeCardName="expresso"
        coffeeCardPrice={9.99}
        key={4}
      />
      <CoffeeCard
        coffeeCardDescription="muito bom"
        coffeeCardImg="caf"
        coffeeCardName="expresso"
        coffeeCardPrice={9.99}
        key={5}
      />
    </div>
  )
}
