import coffeeItems from '@/data/coffee-items.json'

import { CoffeeList } from './components/CoffeeList'
import { Hero } from './components/Hero'
import { HomeContainer, HomeWrapper } from './styles'

export function Home() {
  return (
    <HomeWrapper>
      <HomeContainer>
        <Hero />
        <CoffeeList items={coffeeItems} />
      </HomeContainer>
    </HomeWrapper>
  )
}
