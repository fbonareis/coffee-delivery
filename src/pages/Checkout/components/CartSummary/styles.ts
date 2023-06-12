import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1.5rem;
`

export const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
`

export const SummaryItemName = styled.p<{ strong?: boolean }>`
  font-size: 14px;
  line-height: 130%;
  color: ${({ theme }) => theme['base-text']};

  ${({ strong }) =>
    strong &&
    css`
      font-size: 20px;
      font-weight: bold;
    `}
`

export const SummaryItemValue = styled.p<{ strong?: boolean }>`
  font-size: 16px;
  line-height: 130%;
  color: ${({ theme }) => theme['base-text']};

  ${({ strong }) =>
    strong &&
    css`
      font-size: 20px;
      font-weight: bold;
    `}
`

export const Summary = {
  Item: SummaryItem,
  Name: SummaryItemName,
  Value: SummaryItemValue,
}

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
