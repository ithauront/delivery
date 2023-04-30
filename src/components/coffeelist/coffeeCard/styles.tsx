import styled, { css } from 'styled-components'

export interface StyledCoffeeCardProps {
  isInCheckout?: boolean
}

export const StyledCoffeeCard = styled.div<StyledCoffeeCardProps>`
  .homeContainer {
    width: 16rem;
    height: 19.375rem;

    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    gap: 1rem;

    border-radius: 6px 36px 6px 36px;
    background: ${(props) => props.theme['-base-card']};
  }

  .headerHome {
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

    .nameHome {
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

      .priceHome {
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
      .checkoutContainer {
        width: 23rem;
        height: 5rem;

        padding: 0.25rem 0.5rem;

        background: ${(props) => props.theme['-base-card']};

        display: flex;
        align-items: flex-start;
        justify-content: space-between;

        header {
          position: relative;
          top: 8%;
          img {
            width: 4rem;
            height: 4rem;
          }
        }
        .articleCheckout {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-between;
          width: 10.8675rem;
          height: 3.8125rem;
          gap: 0.8rem;

          color: ${(props) => props.theme['-base-subtitle']};

          font-weight: 400;
          line-height: 20.8px;

          .name {
            text-align: left;
            font-family: 'Roboto';
            font-size: 1rem;
            line-height: 21px;
            font-weight: 400;
            color: ${(props) => props.theme['-base-subtitle']};
          }

          .buttons {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
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
            background: ${(props) => props.theme['-base-button']};
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
        }

        .footerCheckout {
          display: flex;
          justify-content: flex-end;
          gap: 0.5rem;
          width: 3.4375rem;
          height: 1.3125rem;

          font-family: 'Roboto';
          font-size: 1rem;
          line-height: 20.8px;
          font-weight: 700;
          color: ${(props) => props.theme['-base-text']};
        }
      }
    `};
`
