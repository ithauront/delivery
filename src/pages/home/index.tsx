import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'

import CoffeeCup from '../../assets/Imagem.svg'
import { HomeIntro } from './styles'

import { Filter } from '../../components/filter'
import { useState } from 'react'

export function Home() {
  const [filterStates, setFilterStates] = useState<{ [key: string]: boolean }>({
    Tradicional: false,
    Especial: false,
    'Com Leite': false,
    Alcoolico: false,
    Gelado: false,
  })

  const handleIsSelected = (filterName: string) => {
    setFilterStates((prevFilterStates) => ({
      ...prevFilterStates,
      [filterName]: !prevFilterStates[filterName],
    }))
  }
  return (
    <HomeIntro>
      <main>
        <section>
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
      <aside>
        <h1>Nossos cafés</h1>
        <section>
          <Filter
            filterName="Tradicional"
            isSelected={filterStates.Tradicional}
            onClick={() => handleIsSelected('Tradicional')}
          />
          <Filter
            filterName="Especial"
            isSelected={filterStates.Especial}
            onClick={() => handleIsSelected('Especial')}
          />
          <Filter
            filterName="Com Leite"
            isSelected={filterStates['Com Leite']}
            onClick={() => handleIsSelected('Com Leite')}
          />
          <Filter
            filterName="Alcoolico"
            isSelected={filterStates.Alcoolico}
            onClick={() => handleIsSelected('Alcoolico')}
          />
          <Filter
            filterName="Gelado"
            isSelected={filterStates.Gelado}
            onClick={() => handleIsSelected('Gelado')}
          />
        </section>
      </aside>
    </HomeIntro>
  )
}
