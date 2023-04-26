import styled from 'styled-components'

export const StyledCoffeeCard = styled.div`
  width: 16rem;
  height: 19.375rem;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;

  border-radius: 6px 36px 6px 36px;
  background: ${(props) => props.theme['-base-card']};

  header {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    margin-top: -20%;

    img {
      width: 7.5rem;
      height: 7.5rem;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.25rem;
    }
  }

  article {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 13.5rem;
    gap: 1rem;

    h1 {
      text-align: center;
      font-family: 'baloo 2';
      font-weight: 700;
      line-height: 26px;
      font-size: 1.25rem;

      color: ${(props) => props.theme['-base-subtitle']};
    }
    p {
      text-align: center;
      font-weight: 400;
      line-height: 18.2px;
      font-size: 0.875rem;

      color: ${(props) => props.theme['-base-label']};
    }
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 13rem;
    height: 2.375rem;

    div {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 4.1875rem;

      color: ${(props) => props.theme['-base-text']};
      text-align: right;
      font-weight: 400;
      line-height: 18.2px;
      font-size: 0.875rem;

      strong {
        font-family: 'baloo 2';
        font-weight: 800;
        line-height: 31.2px;
        font-size: 1.5rem;
      }
    }

    section {
      width: 7.375rem;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;

      .purpleShoppingCart {
        appearance: none;
        border: none;
        outline: none;
        width: 2.375rem;
        padding: 0.5rem;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 6px;

        background: ${(props) => props.theme['-purple-dark']};
        color: ${(props) => props.theme['-base-card']};

        &:hover {
          background: ${(props) => props.theme['-purple']};
        }
      }
    }
  }
`
