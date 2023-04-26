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
`
