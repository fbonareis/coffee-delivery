import { Button, Container, Icon, InputNumber } from './styles'

interface QuantitySelectorProps {
  value: number
  onDecrement: () => void
  onIncrement: () => void
}

export function QuantitySelector(props: QuantitySelectorProps) {
  const { value, onDecrement, onIncrement } = props

  const disableDecrement = value === 1

  return (
    <Container>
      <Button onClick={onDecrement} disabled={disableDecrement}>
        <Icon.Minus />
      </Button>
      <InputNumber readOnly value={value} />
      <Button onClick={onIncrement}>
        <Icon.Plus />
      </Button>
    </Container>
  )
}
