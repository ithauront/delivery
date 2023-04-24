import { ShoppingCart } from 'phosphor-react'
import { Filter } from '../filter'

export function Coffeelist() {
  return (
    <div>
      <header>
        <img src="" alt="" />
        <Filter filterName="de one pegar esse?" />
      </header>

      <main>
        <h2>titulo do cafe</h2>
        <p>descrição</p>
      </main>

      <footer>
        <span>preço</span>
        <span>quantidade</span>
        <span>
          <ShoppingCart weight="fill" />
        </span>
      </footer>
    </div>
  )
}
