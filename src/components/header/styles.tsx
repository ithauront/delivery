import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;

  justify-content: space-between;

  padding: 2rem 10rem;

  div {
    display: flex;
    gap: 0.75rem;

    .headerShoppingCart {
      position: relative;
      padding: 0.5rem;
      border-radius: 6px;

      display: flex;
      align-items: center;
      justify-content: center;

      cursor: pointer;

      background: ${(props) => props.theme['-yellow-ligth']};
      color: ${(props) => props.theme['-yellow-dark']};

      border: 3px solid transparent;
    }

    .shoppingCartItens {
      position: absolute;
      top: -10px;
      right: -10px;
      border-radius: 50%;

      height: 1.25rem;
      width: 1.25rem;

      background: ${(props) => props.theme['-yellow-dark']};
      color: ${(props) => props.theme['-white']};
    }

    span {
      display: flex;
      align-items: center;
      justify-content: center;

      flex: 1;

      padding: 0.5rem;
      gap: 0.25rem;

      border-radius: 6px;

      background: ${(props) => props.theme['-purple-light']};
      color: ${(props) => props.theme['-purple']};

      border: 3px solid transparent;
    }
  }
  @media (max-width: 768px) {
    padding: 1rem;

    span {
      width: 9rem;
      font-size: 14px;
    }
  }
`
