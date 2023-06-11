import { ReactNode } from 'react'
import { StyledPaymentButton } from './styles'

interface PaymentButtonProps {
  paymentIcon: ReactNode
  paymentText: string
  onClick: () => void
  type: string
}
export function PaymentButton({
  paymentIcon,
  paymentText,
}: PaymentButtonProps) {
  return (
    <StyledPaymentButton>
      <div>{paymentIcon}</div>
      <span>{paymentText.toUpperCase()}</span>
    </StyledPaymentButton>
  )
}
