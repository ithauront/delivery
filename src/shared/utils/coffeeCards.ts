import havaiano from '../../assets/coffeeCup/havaiano.svg'
import expressoAmer from '../../assets/coffeeCup/expressoamer.svg'
import expressoCream from '../../assets/coffeeCup/expressocream.svg'
import expresso from '../../assets/coffeeCup/expresso.svg'
import ExpressoGel from '../../assets/coffeeCup/expressogel.svg'
import CafeComLeite from '../../assets/coffeeCup/comleite.svg'
import Latte from '../../assets/coffeeCup/latte.svg'
import Capuccino from '../../assets/coffeeCup/capuccino.svg'
import Macchiato from '../../assets/coffeeCup/macchiato.svg'
import Mocaccino from '../../assets/coffeeCup/mocaccino.svg'
import Choco from '../../assets/coffeeCup/chocoquente.svg'
import Cubano from '../../assets/coffeeCup/cubano.svg'
import Arabe from '../../assets/coffeeCup/arabe.svg'
import Irlandes from '../../assets/coffeeCup/irlandes.svg'

export interface CoffeeCardProps {
  coffeeCardName: string
  coffeeCardDescription?: string
  coffeeCardImg: string
  coffeeCardPrice: number
  isInCheckout?: boolean
  filterNames?: string[]
  isSelected?: boolean
  onClick?: (name: string) => void
  isCoffeeCardSelected?: boolean
  key?: number
}

const coffeeCards: CoffeeCardProps[] = [
  {
    coffeeCardDescription:
      'Bebida adocicada preparada com café e leite de coco',
    coffeeCardImg: expresso,
    coffeeCardName: 'Expresso',
    coffeeCardPrice: 9.99,
    filterNames: ['tradicional'],
    key: 1,
  },
  {
    coffeeCardDescription: 'muito bom',
    coffeeCardImg: expressoAmer,
    coffeeCardName: 'Expresso Americano',
    coffeeCardPrice: 9.99,
    filterNames: ['tradicional'],
    key: 2,
  },
  {
    coffeeCardDescription:
      'Bebida adocicada preparada com café e leite de coco',
    coffeeCardImg: expressoCream,
    coffeeCardName: 'Expresso Cremoso',
    coffeeCardPrice: 9.99,
    filterNames: ['tradicional'],
    key: 3,
  },
  {
    coffeeCardDescription: 'muito bom',
    coffeeCardImg: ExpressoGel,
    coffeeCardName: 'Expresso Gelado',
    coffeeCardPrice: 9.99,
    filterNames: ['tradicional', 'gelado'],
    key: 4,
  },
  {
    coffeeCardDescription: 'muito bom',
    coffeeCardImg: CafeComLeite,
    coffeeCardName: 'Cafe Com Leite',
    coffeeCardPrice: 9.99,
    filterNames: ['tradicional', 'com leite'],
    key: 5,
  },
  {
    coffeeCardDescription: 'muito bom',
    coffeeCardImg: Latte,
    coffeeCardName: 'Latte',
    coffeeCardPrice: 9.99,
    filterNames: ['tradicional', 'com leite'],
    key: 6,
  },
  {
    coffeeCardDescription: 'muito bom',
    coffeeCardImg: Capuccino,
    coffeeCardName: 'Capuccino',
    coffeeCardPrice: 9.99,
    filterNames: ['tradicional', 'com leite'],
    key: 7,
  },
  {
    coffeeCardDescription: 'muito bom',
    coffeeCardImg: Macchiato,
    coffeeCardName: 'Macchiato',
    coffeeCardPrice: 9.99,
    filterNames: ['tradicional', 'com leite'],
    key: 8,
  },
  {
    coffeeCardDescription: 'muito bom',
    coffeeCardImg: Mocaccino,
    coffeeCardName: 'Mocaccino',
    coffeeCardPrice: 9.99,
    filterNames: ['tradicional', 'com leite'],
    key: 9,
  },
  {
    coffeeCardDescription: 'muito bom',
    coffeeCardImg: Choco,
    coffeeCardName: 'Chocolate Quente',
    coffeeCardPrice: 9.99,
    filterNames: ['especial', 'com leite'],
    key: 10,
  },
  {
    coffeeCardDescription: 'muito bom',
    coffeeCardImg: Cubano,
    coffeeCardName: 'Cubano',
    coffeeCardPrice: 9.99,
    filterNames: ['especial', 'alcoolico', 'gelado'],
    key: 11,
  },
  {
    coffeeCardDescription:
      'Bebida adocicada preparada com café e leite de coco',
    coffeeCardImg: havaiano,
    coffeeCardName: 'Havaiano',
    coffeeCardPrice: 9.99,
    filterNames: ['especial'],
    key: 12,
  },
  {
    coffeeCardDescription: 'Muito bom',
    coffeeCardImg: Arabe,
    coffeeCardName: 'Arabe',
    coffeeCardPrice: 9.99,
    filterNames: ['especial'],
    key: 13,
  },
  {
    coffeeCardDescription: 'Muito bom',
    coffeeCardImg: Irlandes,
    coffeeCardName: 'Irlandês',
    coffeeCardPrice: 9.99,
    filterNames: ['especial', 'alcoolico'],
    key: 14,
  },
]

export { coffeeCards }
