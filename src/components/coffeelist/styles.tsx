import styled from 'styled-components'

export const StyledCoffeeListHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 2rem 10rem;

  justify-content: space-between;

  display: flex;
  align-items: center;

  section {
    display: flex;
    gap: 0.5rem;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0.5rem;
    gap: 0.5rem;
  }
`

export const StyledCoffeeList = styled.div`
  display: flex;
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 10rem;
    gap: 3rem 2rem;
    flex-wrap: wrap;
  }
  @media (max-width: 768px) {
    main {
      padding: 3.5rem;
      flex-direction: column;
      height: 100%;
      width: 100%;
    }
  }
`
