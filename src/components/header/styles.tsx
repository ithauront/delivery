import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;

  justify-content: space-between;

  padding: 2rem 10rem;

  div {
    display: flex;
    gap: 0.75rem;

    button {
      width: 2.375rem;
      height: 2.375rem;
      border-radius: 6px;

      display: flex;
      align-items: center;
      justify-content: center;

      background: ${(props) => props.theme['-yellow-ligth']};
      color: ${(props) => props.theme['-yellow-dark']};

      border: 3px solid transparent;
    }
  }
`
