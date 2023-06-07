import { useContext } from 'react'
import { StyledCounter } from './styles'
import { Minus, Plus } from 'phosphor-react'
import { CoffeeCardContext } from '../../context/coffeeCardContext'

interface CounterProps {
  isInCheckout?: boolean
}

export function Counter({ isInCheckout = false }: CounterProps) {
  const { coffeeCardStates, handleCounterStateChange } =
    useContext(CoffeeCardContext)
  const index = 0

  const handleCounterIncrement = () => {
    const newCounterState = coffeeCardStates[index].counterState + 1
    handleCounterStateChange(newCounterState, index)
  }

  const handleCounterDecrement = () => {
    if (counterState > 1) {
      const newCounterState = coffeeCardStates[index].counterState - 1
      handleCounterStateChange(newCounterState, index)
    }
  }

  const counterState = coffeeCardStates[index].counterState

  return (
    <StyledCounter isInCheckout={isInCheckout}>
      <button
        className="minusPlus"
        disabled={counterState === 1}
        onClick={handleCounterDecrement}
      >
        <Minus />
      </button>
      <span>{counterState}</span>
      <button className="minusPlus" onClick={handleCounterIncrement}>
        <Plus />
      </button>
    </StyledCounter>
  )
}
