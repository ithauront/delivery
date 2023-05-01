import styled from 'styled-components'

export const StyledCheckout = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  background: ${(props) => props.theme['-background']};

  padding: 2rem 10rem;

  .userPaymentAndDeliveryInfos {
    width: 40rem;
    height: 36.9375rem;
    gap: 0.75rem;
  }

  p {
    height: 1.4375rem;

    color: ${(props) => props.theme['-base-subtitle']};
    text-align: left;

    font-family: 'baloo 2';
    font-weight: 700;
    line-height: 23.4px;
    font-size: 1.125rem;
  }

  form {
    background: ${(props) => props.theme['-base-subtitle']};
  }
`
