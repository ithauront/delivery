import styled from 'styled-components'

export const HomeIntro = styled.main`
  main {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 34rem;

    background: ${(props) => props.theme['-background']};

    padding: 2rem 10rem;

    section .home {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 3rem;
    }

    section .title {
      width: 36.75rem;
      height: 12rem;
      gap: 1rem;

      h1 {
        color: ${(props) => props.theme['-base-title']};

        text-align: left;

        font-family: 'Baloo 2';
        font-weight: 800;
        font-size: 3rem;
        line-height: 62px;
        letter-spacing: -0.02em;
      }

      p {
        color: ${(props) => props.theme['-base-subtitle']};

        text-align: left;

        font-weight: 400;
        line-height: 26px;
        font-size: 1.25rem;
      }
    }

    section .item {
      width: 36.75rem;
      height: 5.25rem;
      display: flex;
      flex-wrap: wrap;
      gap: 2.5rem 1.25rem;

      span {
        display: flex;
        gap: 0.75rem;

        align-items: center;

        div {
          width: 2rem;
          height: 2rem;
          border-radius: 50%;

          color: ${(props) => props.theme['-background']};

          display: flex;
          justify-content: center;
          align-items: center;
          &.ShoppingCart {
            background: ${(props) => props.theme['-yellow-dark']};
          }

          &.Package {
            background: ${(props) => props.theme['-base-text']};
          }

          &.Timer {
            background: ${(props) => props.theme['-yellow']};
          }

          &.Coffee {
            background: ${(props) => props.theme['-purple']};
          }
        }

        p {
          color: ${(props) => props.theme['-base-text']};
          text-align: left;
          font-weight: 400;
          font-size: 1rem;
          line-height: 20.8px;
        }
      }
    }
  }

  @media (max-width: 768px) {
    main {
      padding: 1rem;
      flex-direction: column;
      .home-img {
        width: 250px;
        height: 250px;
      }

      section .title {
        width: 20rem;
        height: 7rem;
        h1 {
          font-size: 16px;
          line-height: 18px;
        }
        p {
          font-size: 14px;
          line-height: 16px;
        }
      }

      section .item {
        width: 20rem;
        gap: 0.5rem;
      }
    }
  }
`
