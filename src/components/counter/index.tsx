import { useContext } from 'react'
import { StyledCounter } from './styles'
import { Minus, Plus } from 'phosphor-react'
import { CoffeeCardContext } from '../../context/coffeeCardContext'

interface CounterProps {
  isInCheckout?: boolean
  index: number
}

export function Counter({ isInCheckout = false, index }: CounterProps) {
  const { coffeeCardStates, handleCounterStateChange } =
    useContext(CoffeeCardContext)

  const counterState = coffeeCardStates[index].counterState

  const handleCounterIncrement = () => {
    const newCounterState = counterState + 1
    handleCounterStateChange(newCounterState, index)
  }

  const handleCounterDecrement = () => {
    if (counterState > 1) {
      const newCounterState = counterState - 1
      handleCounterStateChange(newCounterState, index)
    }
  }

  return (
    <StyledCounter isInCheckout={isInCheckout}>
      <button
        className="minusPlus"
        disabled={counterState === 1}
        onClick={handleCounterDecrement}
      >
        <Minus />
      </button>
      <span>{coffeeCardStates[index].counterState}</span>
      <button className="minusPlus" onClick={handleCounterIncrement}>
        <Plus />
      </button>
    </StyledCounter>
  )
}
