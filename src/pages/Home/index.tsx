import { Hero } from './components/Hero'
import { HomeContainer, HomeWrapper } from './styles'

export function Home() {
  return (
    <HomeWrapper>
      <HomeContainer>
        <Hero />
      </HomeContainer>
    </HomeWrapper>
  )
}
