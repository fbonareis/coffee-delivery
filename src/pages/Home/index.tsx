import { useContext, useEffect } from 'react'

import { AppContext } from '../../contexts/AppContext'
import { CoffeeList } from './components/CoffeeList'
import { Hero } from './components/Hero'
import { HomeContainer, HomeWrapper } from './styles'

export function Home() {
  const { products, cart, fetchProducts } = useContext(AppContext)

  useEffect(() => {
    fetchProducts()
  }, [])

  console.log('products', products)

  return (
    <HomeWrapper>
      <HomeContainer>
        <Hero />
        <code>{JSON.stringify(cart)}</code>
        <CoffeeList items={products} />
      </HomeContainer>
    </HomeWrapper>
  )
}
