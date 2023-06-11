import { ButtonHTMLAttributes, ReactNode } from 'react'
import { StyledPaymentButton } from './styles'

interface PaymentButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  paymentIcon: ReactNode
  paymentText: string
  onPaymentMethodSelected: () => void
}
export function PaymentButton({
  paymentIcon,
  paymentText,
  onPaymentMethodSelected,
}: PaymentButtonProps) {
  return (
    <StyledPaymentButton onClick={onPaymentMethodSelected}>
      <div>{paymentIcon}</div>
      <span>{paymentText.toUpperCase()}</span>
    </StyledPaymentButton>
  )
}
