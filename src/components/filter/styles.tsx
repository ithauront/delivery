import styled, { StyledFilterProps } from 'styled-components'

export const StyledFilter = styled.button<StyledFilterProps>`
  appearance: none;
  border: none;
  outline: none;
  background-color: ${(props) =>
    props.isSelected ? props.theme['-yellow'] : 'transparent'};
  white-space: nowrap;

  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;

  height: 1.5625rem;
  padding: 0.75rem 0.375rem;

  border-radius: 100px;

  cursor: pointer;

  border: 1px solid ${(props) => props.theme['-yellow']};
  color: ${(props) =>
    props.isSelected ? props.theme['-yellow-ligth'] : props.theme['-yellow']};

  font-size: 0.625rem;
  font-weight: 700;
  line-height: 13px;

  &:hover {
    border: 1px solid ${(props) => props.theme['-yellow-ligth']};
    color: ${(props) => props.theme['-yellow']};
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
  }
`
