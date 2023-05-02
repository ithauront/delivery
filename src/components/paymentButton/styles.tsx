import styled from 'styled-components'

export const StyledPaymentButton = styled.button`
  appearance: none;
  border: none;
  outline: none;

  display: flex;
  align-items: center;

  width: 11.166875rem;
  height: 3.1875rem;
  gap: 0.75rem;
  padding: 1rem;

  background: ${(props) => props.theme['-base-button']};

  div {
    display: flex;
    align-items: center;
    width: 1rem;
    height: 1rem;
    color: ${(props) => props.theme['-purple']};
  }
  span {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme['-base-text']};
    width: 7.1875rem;
    height: 1.1875rem;
    text-align: left;

    font-size: 0.75rem;
    line-height: 19.2px;
  }

  &:hover {
    background: ${(props) => props.theme['-base-hover']};

    span {
      color: ${(props) => props.theme['-base-subtitle']};
    }
  }
  //lembrar de fazer aui o ifSelected border purple
`
