import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { AppContextProvider } from '@/contexts'
import { defaultTheme, GlobalStyles } from '@/styles'

import { Router } from './Router'

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <AppContextProvider>
          <Router />
        </AppContextProvider>
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  )
}
