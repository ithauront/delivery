import { ThemeProvider } from 'styled-components'
import { DefaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/theme/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './router'
import { CoffeeCardContextProvider } from './context/coffeeCardContext'

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <CoffeeCardContextProvider>
        <BrowserRouter basename="/delivery">
          <Router />
        </BrowserRouter>
        <GlobalStyle />
      </CoffeeCardContextProvider>
    </ThemeProvider>
  )
}
