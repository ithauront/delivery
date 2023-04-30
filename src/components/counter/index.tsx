import { useState } from 'react'
import { StyledCounter } from './styles'
import { Minus, Plus } from 'phosphor-react'

interface CounterProps {
  isInCheckout?: boolean
}

export function Counter({ isInCheckout = false }: CounterProps) {
  const [counterState, setCounterState] = useState(1)
  const handleCounterIncrement = () => {
    setCounterState(counterState + 1)
  }
  const handleCounterDecrement = () => {
    if (counterState > 1) {
      setCounterState(counterState - 1)
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
      <span>{counterState}</span>
      <button className="minusPlus" onClick={handleCounterIncrement}>
        <Plus />
      </button>
    </StyledCounter>
  )
}
