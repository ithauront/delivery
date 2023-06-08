import { useState, useEffect, useContext } from 'react'
import Logo from '../../assets/Logo.svg'
import { HeaderContainer } from './styles'
import { NavLink } from 'react-router-dom'
import { ShoppingCart, MapPin } from 'phosphor-react'
import { CoffeeCardContext } from '../../context/coffeeCardContext'

export function Header() {
  const [location, setLocation] = useState('Procurando localização...')

  useEffect(() => {
    function getUserLocation() {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude

        fetch(
          `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`,
        )
          .then((response) => response.json())
          .then((data) => {
            if (data.address.city) {
              setLocation(data.address.city)
            } else if (data.address.town) {
              setLocation(data.address.town)
            } else {
              setLocation('Localização desconhecida')
            }
          })
          .catch((error) => {
            console.error(error)
            setLocation('Localização desconhecida')
          })
      })
    }
    getUserLocation()
  }, [])
  const { shoppingCartItens } = useContext(CoffeeCardContext)

  return (
    <HeaderContainer>
      <nav>
        <NavLink to="/" title="Home">
          <img src={Logo} alt="go to homepage" />
        </NavLink>
      </nav>
      <div>
        <span>
          <MapPin weight="fill" size={22} />
          <p>{location}</p>
        </span>
        <nav>
          <NavLink to="/checkout" title="checkout">
            <button className="headerShoppingCart">
              <ShoppingCart weight="fill" size={22} />
              {shoppingCartItens !== 0 ? (
                <span className="shoppingCartItens">{shoppingCartItens}</span>
              ) : null}
            </button>
          </NavLink>
        </nav>
      </div>
    </HeaderContainer>
  )
}
