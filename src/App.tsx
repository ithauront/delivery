import { ThemeProvider } from 'styled-components'
import { DefaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/theme/global'

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <h1>Delivery</h1>
      <GlobalStyle />
    </ThemeProvider>
  )
}
