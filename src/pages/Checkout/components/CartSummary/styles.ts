import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1.5rem;
`

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
`
export const ConfirmButton = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.yellow};
  border-radius: 6px;
  color: white;
  font-size: 14px;
  line-height: 160%;
  font-weight: bold;
  text-transform: uppercase;
  padding: 0.75rem 0.5rem;
  margin-top: 0.75rem;
  transition: background 0.2s;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme['yellow-dark']};
  }
`
