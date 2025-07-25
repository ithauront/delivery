import styled, { css } from 'styled-components'

export interface StyledCounterProps {
  isInCheckout?: boolean
}

export const StyledCounter = styled.div<StyledCounterProps>`
  width: 4.5rem;
  height: 2.375rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 6px;

  gap: 0.25rem;

  padding: 0.5rem;

  background: ${(props) => props.theme['-base-button']};

  span {
    width: 1.25rem;
    height: 1.315rem;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${(props) => props.theme['-base-title']};

    line-height: 20.8px;
  }

  .minusPlus {
    appearance: none;
    border: none;
    outline: none;
    width: 0.875rem;
    height: 0.875rem;

    display: flex;
    justify-content: center;
    align-items: center;

    background: ${(props) => props.theme['-base-button']};
    color: ${(props) => props.theme['-purple']};

    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
    }
    &:hover {
      color: ${(props) => props.theme['-purple-dark']};
    }
  }

  ${(props) =>
    props.isInCheckout &&
    css`
      height: 2rem;
    `}
`
