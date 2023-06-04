import styled from 'styled-components'

export const Container = styled.section`
  padding-top: 2.5rem;

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    line-height: 130%;
    color: ${({ theme }) => theme['base-subtitle']};
    font-weight: 800;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, 255px);
  justify-content: space-between;
  grid-gap: 1.75rem;
`
