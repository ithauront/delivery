import { StyledFilter } from './styles'

interface FilterProps {
  filterName: string
  isSelected?: boolean
  onClick?: () => void
  disabled?: boolean
}

export function Filter(props: FilterProps) {
  return (
    <StyledFilter
      isSelected={props.isSelected}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      <span>{props.filterName.toUpperCase()}</span>
    </StyledFilter>
  )
}
