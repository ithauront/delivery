import Logo from '../../assets/Logo.svg'
import { HeaderContainer } from './styles'
import { NavLink } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'

export function Header() {
  function getUserLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude
      const longitude = position.coords.longitude

      fetch(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`,
      )
        .then((response) => response.json())
        .then((data) => {
          const element = document.getElementById('userLocation')
          if (element) {
            element.textContent = data.address.city
          } else {
            console.error('Element with ID "userLocation" not found')
          }
        })
        .catch((error) => {
          console.error(error)
          const element = document.getElementById('userLocation')
          if (element) {
            element.textContent = 'Localização desconhecida'
          } else {
            console.error('Element with ID "userLocation" not found')
          }
        })
    })
  }
  getUserLocation()
  return (
    <HeaderContainer>
      <nav>
        <NavLink to="/" title="Home">
          <img src={Logo} alt="go to homepage" />
        </NavLink>
      </nav>
      <div>
        <span id="userLocation"></span>
        <nav>
          <NavLink to="/checkout" title="checkout">
            <button>
              <ShoppingCart weight="fill" size={22} />
            </button>
          </NavLink>
        </nav>
      </div>
    </HeaderContainer>
  )
}
