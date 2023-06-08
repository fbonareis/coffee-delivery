import { useContext } from 'react'

import { AppContext } from '../../contexts/AppContext'

export function Checkout() {
  const { products } = useContext(AppContext)

  function handleAddToCart() {
    const product = {
      id: 1,
      name: 'Produto 1',
    }
  }

  return (
    <>
      <h1>Checkout</h1>
      {JSON.stringify(products)}

      <button onClick={handleAddToCart}>Add to Cart</button>
    </>
  )
}
