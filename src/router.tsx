import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/home'
import { Checkout } from './pages/checkout/checkout'
import { DefaultLayout } from './layouts/layoutDefault'
import { Success } from './pages/succeess'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
      </Route>
    </Routes>
  )
}
