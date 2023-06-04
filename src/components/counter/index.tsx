import { useState } from 'react'
import { StyledCounter } from './styles'
import { Minus, Plus } from 'phosphor-react'

interface CounterProps {
  isInCheckout?: boolean
  onCounterStateChange?: (counterState: number) => void
}

export function Counter({
  isInCheckout = false,
  onCounterStateChange,
}: CounterProps) {
  const [counterState, setCounterState] = useState(1)

  const handleCounterIncrement = () => {
    setCounterState((prevState) => prevState + 1)
    if (onCounterStateChange) {
      onCounterStateChange(counterState + 1)
    }
  }

  const handleCounterDecrement = () => {
    if (counterState > 1) {
      setCounterState((prevState) => prevState - 1)
      if (onCounterStateChange) {
        onCounterStateChange(counterState - 1)
      }
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
