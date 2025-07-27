import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { CoffeeCard } from '../../components/coffeelist/coffeeCard'
import { StyledCheckout } from './styles'
import { PaymentButton } from '../../components/paymentButton'
import { CoffeeCardContext, coffeeCards } from '../../context/coffeeCardContext'
import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const defaultValues = {
  cep: '',
  rua: '',
  numero: '',
  complemento: '',
  bairro: '',
  cidade: '',
  uf: '',
  pagamento: '',
}

export function Checkout() {
  // TODO responsividade do checkout
  const { coffeeCardStates, handleRemoveCoffeeCard, resetCoffeeCardStates } =
    useContext(CoffeeCardContext)
  const price = coffeeCardStates.reduce((total, cardState, index) => {
    if (cardState.isCoffeeCardSelected) {
      const coffeeCardPrice = coffeeCards[index].coffeeCardPrice
      const { counterState } = coffeeCardStates[index]
      return total + coffeeCardPrice * counterState
    }
    return total
  }, 0)

  const handlePaymentSelection = (paymentMethod: string) => {
    setUserInfo({ ...userInfo, pagamento: paymentMethod })
  }
  const [userInfo, setUserInfo] = useState(() => {
    const saved = localStorage.getItem('userInfo')
    return saved ? JSON.parse(saved) : { ...defaultValues }
  })

  useEffect(() => {
    localStorage.setItem('userInfo', JSON.stringify(userInfo))
  }, [userInfo])

  const navigate = useNavigate()
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (
      userInfo.cep &&
      userInfo.bairro &&
      userInfo.numero &&
      userInfo.cidade &&
      userInfo.uf &&
      userInfo.rua &&
      userInfo.pagamento
    ) {
      resetCoffeeCardStates()
      navigate('/success', { state: { userInfo } })
    } else {
      alert('Por favor, preencha os caempos obrigatorios')
    }
  }

  return (
    <StyledCheckout>
      <div className="userPaymentAndDeliveryInfos">
        <p>Complete o seu pedido</p>
        <div className="userInfo">
          <div className="formTitle">
            <span className="mapPinIcon">
              <MapPinLine size={22} />
            </span>
            <span className="adressPaymentTitle">
              <h1>Endereço de Entrega</h1>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </span>
          </div>
          <form action="">
            <input
              className="cep"
              type="number"
              name="CEP"
              placeholder="CEP"
              required
              minLength={1}
              maxLength={99999999}
              title="Por favor escreva um CEP válido"
              value={userInfo.cep}
              onChange={(e) =>
                setUserInfo({ ...userInfo, cep: e.target.value })
              }
            />
            <input
              className="rua"
              type="text"
              name="Rua"
              placeholder="Rua"
              minLength={1}
              maxLength={300}
              title="Por favor escreva uma rua válida"
              required
              value={userInfo.rua}
              onChange={(e) =>
                setUserInfo({ ...userInfo, rua: e.target.value })
              }
            />
            <span className="numeroEComplementoCheckout">
              <input
                className="numero"
                type="number"
                name="Numero"
                placeholder="Numero"
                required
                min={1}
                max={999}
                title="Por favor escreva um numero válido"
                value={userInfo.numero}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, numero: e.target.value })
                }
              />
              <div className="complementoEOpcional">
                <input
                  className="complemento"
                  type="text"
                  name="Complemento"
                  placeholder="Complemento"
                  value={userInfo.complemento}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, complemento: e.target.value })
                  }
                />
                {userInfo.complemento ? null : <i>Opcional</i>}
              </div>
            </span>
            <span className="BairoCidadeUfCheckout">
              <input
                className="bairro"
                type="text"
                name="Bairro"
                placeholder="Bairro"
                required
                minLength={2}
                maxLength={100}
                title="Por favor escreva um bairro válido"
                value={userInfo.bairro}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, bairro: e.target.value })
                }
              />
              <input
                className="cidade"
                type="text"
                name="Cidade"
                placeholder="Cidade"
                required
                minLength={2}
                maxLength={100}
                title="Por favor escreva uma cidade válida"
                value={userInfo.cidade}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, cidade: e.target.value })
                }
              />
              <input
                className="uf"
                type="text"
                name="UF"
                placeholder="UF"
                required
                minLength={2}
                maxLength={2}
                title="Informe um UF válido com duas letras"
                value={userInfo.uf}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, uf: e.target.value })
                }
              />
            </span>
          </form>
        </div>
        <div className="userInfo">
          <div className="formTitle">
            <span className="moneyIcon">
              <CurrencyDollar size={22} />
            </span>
            <span className="adressPaymentTitle">
              <h1>Pagamento</h1>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </span>
          </div>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="paymentMethods">
              <PaymentButton
                onPaymentMethodSelected={() =>
                  handlePaymentSelection('cartão de crédito')
                }
                paymentIcon={<CreditCard size={22} />}
                paymentText="cartão de crédito"
              />
              <PaymentButton
                onPaymentMethodSelected={() =>
                  handlePaymentSelection('cartão de débito')
                }
                paymentIcon={<Bank size={22} />}
                paymentText="cartão de débito"
              />
              <PaymentButton
                onPaymentMethodSelected={() =>
                  handlePaymentSelection('dinheiro')
                }
                paymentIcon={<Money size={22} />}
                paymentText="dinheiro"
              />
            </div>
          </form>
        </div>
      </div>

      <div className="shoppingDetails">
        <p>Cafés Selecionados</p>
        <div className="shoppingResume">
          <div className="shoppingResumeCoffeeCard">
            {coffeeCardStates.every((card) => !card.isCoffeeCardSelected) ? (
              <p>O seu carrinho está vazio</p>
            ) : (
              coffeeCards.map((coffeeCard, index) => {
                if (coffeeCardStates[index].isCoffeeCardSelected) {
                  return (
                    <CoffeeCard
                      key={coffeeCard.coffeeCardKey}
                      isCoffeeCardSelected={
                        coffeeCardStates[index].isCoffeeCardSelected
                      }
                      onCoffeeCardSelected={() => handleRemoveCoffeeCard(index)}
                      index={index}
                      isInCheckout={true}
                      {...coffeeCard}
                    />
                  )
                }
                return null
              })
            )}
          </div>

          <div className="addition">
            <p>
              Total de itens
              <span>R${price}</span>
            </p>
            <p>
              Entrega <span>R$ 3,50</span>
            </p>
            <h1>
              Total
              <span>R$ {price + 3.5}</span>
            </h1>
          </div>
          <form onSubmit={handleFormSubmit}>
            <button type="submit" className="formValidation">
              CONFIRMAR PEDIDO
            </button>
          </form>
        </div>
      </div>
    </StyledCheckout>
  )
}
