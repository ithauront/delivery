import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'

import CoffeeCup from '../../assets/Imagem.svg'
import { HomeIntro } from './styles'

import { Coffeelist } from '../../components/coffeelist'

export function Home() {
  return (
    <HomeIntro>
      <main>
        <section className="home">
          <div className="title">
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </div>
          <div className="item">
            <span>
              <div className="ShoppingCart">
                <ShoppingCart weight="fill" />
              </div>
              <p>Compra simples e segura</p>
            </span>
            <span>
              <div className="Package">
                <Package weight="fill" />
              </div>
              <p>Embalagem mantém o café intacto</p>
            </span>
            <span>
              <div className="Timer">
                <Timer weight="fill" />
              </div>
              <p>Entrega rápida e rastreada</p>
            </span>
            <span>
              <div className="Coffee">
                <Coffee weight="fill" />
              </div>
              <p>O café chega fresquinho até você</p>
            </span>
          </div>
        </section>
        <img src={CoffeeCup} alt="imagem de um copo de café" />
      </main>

      <footer>
        <Coffeelist />
      </footer>
    </HomeIntro>
  )
}
