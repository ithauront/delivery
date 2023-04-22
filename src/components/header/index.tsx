import Logo from '../../assets/Logo.svg'

export function Header() {
  return (
    <>
      <img src={Logo} alt="" />
      <span>location</span>
      <button>carrinho</button>
    </>
  )
}
