import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing:border-box;
    margin: 0;
    padding: 0;
  }

  :focus {
    outline: 0;
  }

  body {
    background: ${(props) => props.theme.background};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-weight: 400;
    font-size: 1rem;
    font-family: Roboto, sans-serif;
  }
`
