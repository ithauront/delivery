import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'

import CoffeeCup from '../../assets/Imagem.svg'
import { HomeIntro } from './styles'

export function Home() {
  return (
    <HomeIntro>
      <main>
        <section>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <div>
            <span>
              <ShoppingCart weight="fill" />
              <p>Compra simples e segura</p>
            </span>
            <span>
              <Timer weight="fill" />
              <p>Entrega rápida e rastreada</p>
            </span>
            <span>
              <Package weight="fill" />
              <p>Embalagem mantém o café intacto</p>
            </span>
            <span>
              <Coffee weight="fill" />
              <p>O café chega fresquinho até você</p>
            </span>
          </div>
        </section>
        <img src={CoffeeCup} alt="imagem de um copo de café" />
      </main>
      <aside>Aqui vai estar o componente coffeeList</aside>
    </HomeIntro>
  )
}
