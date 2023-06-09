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
import { useContext } from 'react'

export function Checkout() {
  const { coffeeCardStates, handleIsCoffeeCardSelected } =
    useContext(CoffeeCardContext)
  const price = coffeeCardStates.reduce((total, cardState, index) => {
    if (cardState.isCoffeeCardSelected) {
      const coffeeCardPrice = coffeeCards[index].coffeeCardPrice
      const { counterState } = coffeeCardStates[index]
      return total + coffeeCardPrice * counterState
    }
    return total
  }, 0)

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
              type="text"
              name="CEP"
              placeholder="CEP"
              required
              //  value={endereco.cep}
              //  onChange={handleEnderecoChange}
            />
            <input
              className="rua"
              type="text"
              name="Rua"
              placeholder="Rua"
              required
              //  value={endereco.rua}
              //  onChange={handleEnderecoChange}
            />
            <span>
              <input
                className="numero"
                type="number"
                name="Numero"
                placeholder="Numero"
                required
                //  value={endereco.numero}
                /// / onChange={handleEnderecoChange}
              />
              <div className="complementoEOpcional">
                <input
                  className="complemento"
                  type="text"
                  name="Complemento"
                  placeholder="Complemento"

                  /// /  value={endereco.complemento}
                  /// /  onChange={handleEnderecoChange} fazer a funcionalidade para o <i> desaparecer no onChange do complemento.
                />
                <i>Opcional</i>
              </div>
            </span>
            <span>
              <input
                className="bairro"
                type="text"
                name="Bairro"
                placeholder="Bairro"
                required
                /// /  value={endereco.bairro}
                /// /  onChange={handleEnderecoChange}
              />
              <input
                className="cidade"
                type="text"
                name="Cidade"
                placeholder="Cidade"
                required
                /// / value={endereco.cidade}
                /// / onChange={handleEnderecoChange}
              />
              <input
                className="uf"
                type="text"
                name="UF"
                placeholder="UF"
                required
                // value={endereco.uf}
                //  onChange={handleEnderecoChange}
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

          <form
            action=""
            // lembrar de verificar qudno estiver validando se a seleção de uma das tres opçoes esta obrigatoria.
          >
            <div className="paymentMethods">
              <PaymentButton
                paymentIcon={<CreditCard size={22} />}
                paymentText="cartão de crédito"
              />
              <PaymentButton
                paymentIcon={<Bank size={22} />}
                paymentText="cartão de débito"
              />
              <PaymentButton
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
                      onCoffeeCardSelected={() =>
                        handleIsCoffeeCardSelected(index)
                      }
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
          <button className="formValidation">CONFIRMAR PEDIDO</button>
        </div>
      </div>
    </StyledCheckout>
    // total de itens = arraydeCoffeeCard.length * coffeeCard.coffeeCardPrice  total entrega = fixo? total a soma dos dois .
  )
}
