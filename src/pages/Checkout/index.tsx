import { useContext } from 'react'

import { AppContext } from '../../contexts'

export function Checkout() {
  const { cart } = useContext(AppContext)

  return (
    <>
      <h1>Checkout</h1>
      {JSON.stringify(cart)}
    </>
  )
}
