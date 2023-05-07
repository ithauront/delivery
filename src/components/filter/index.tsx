import { StyledFilter } from './styles'

interface FilterProps {
  isSelected: boolean
  filterNames: string[]
  onClick?: (name: string) => void
  disabled?: boolean
}

export function Filter(props: FilterProps) {
  return (
    <>
      <StyledFilter
        key={props.filterNames.join('-')}
        isSelected={props.isSelected}
        onClick={() => props.onClick?.(props.filterNames[0])}
        disabled={props.disabled}
      >
        <span>{props.filterNames[0].toUpperCase()}</span>
      </StyledFilter>
    </>
  )
}
