import styled, { css } from 'styled-components'

export interface StyledCoffeeCardProps {
  isInCheckout?: boolean
}

export const StyledCoffeeCard = styled.div<StyledCoffeeCardProps>`
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

        cursor: pointer;

        background: ${(props) => props.theme['-purple-dark']};
        color: ${(props) => props.theme['-base-card']};

        &:hover {
          background: ${(props) => props.theme['-purple']};
        }
      }
    }
  }

  ${(props) =>
    props.isInCheckout &&
    css`
      width: 23rem;
      height: 5rem;

      padding: 0.25rem 0.5rem;

      background: ${(props) => props.theme['-base-card']};

      display: grid;
      align-items: center;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: auto auto auto;
      grid-template-areas:
        'img name footer'
        'img section .'
        'img section .';

      header > img {
        grid-area: img;
        width: 4rem;
        height: 4rem;
      }

      article {
        grid-area: name;
        width: 9.25rem;
        height: 1.3125rem;

        color: ${(props) => props.theme['-base-subtitle']};
        text-align: left;
        font-weight: 400;
        line-height: 20.8px;
      }

      footer > div {
        grid-area: footer;

        width: 3.4375rem;
        height: 1.3125rem;

        color: ${(props) => props.theme['-base-text']};
        text-align: right;
        font-weight: 700;
        line-height: 20.8px;
      }

      footer > section {
        grid-area: section;

        gap: 0.5rem;
        width: 10.6875rem;
        height: 2rem;
      }

      footer > section > div {
        width: 4.5rem;
        height: 2rem;
      }

      .remove {
        appearance: none;
        border: none;
        outline: none;

        display: flex;
        align-items: center;
        justify-content: center;
        width: 5.6875rem;
        height: 2rem;
        padding: 0.5rem;
        border-radius: 6px;

        gap: 0.25rem;
        background: ${(props) => props.theme['-base-card']};
        color: ${(props) => props.theme['-base-text']};
        .trashIcon {
          color: ${(props) => props.theme['-purple']};
          width: 3rem;
        }

        &:hover {
          background: ${(props) => props.theme['-base-hover']};
          color: ${(props) => props.theme['-base-subtitle']};

          .trashIcon {
            color: ${(props) => props.theme['-purple-dark']};
          }
        }
      }
    `};
`
