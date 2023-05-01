import { MapPinLine } from 'phosphor-react'
import { CoffeeCard } from '../../components/coffeelist/coffeeCard'
import Expresso from '../../assets/coffeeCup/expresso.svg'
import { StyledCheckout } from './styles'
export function Checkout() {
  return (
    <StyledCheckout>
      <div className="userPaymentAndDeliveryInfos">
        <p>Complete o seu pedido</p>
        <form action="">
          <h1>
            <MapPinLine />
            Endereço de entrega
          </h1>
          <p>Informe o endereço onde deseja receber seu pedido</p>
          <input
            type="text"
            name="CEP"
            placeholder="CEP"
            required
            //  value={endereco.cep}
            //  onChange={handleEnderecoChange}
          />
          <input
            type="text"
            name="Rua"
            placeholder="Rua"
            required
            //  value={endereco.rua}
            //  onChange={handleEnderecoChange}
          />
          <input
            type="number"
            name="Numero"
            placeholder="Numero"
            required
            //  value={endereco.numero}
            /// / onChange={handleEnderecoChange}
          />
          <input
            type="text"
            name="Complemento"
            placeholder="Complemento (opcional)"

            /// /  value={endereco.complemento}
            /// /  onChange={handleEnderecoChange}
          />
          <input
            type="text"
            name="Bairro"
            placeholder="Bairro"
            required
            /// /  value={endereco.bairro}
            /// /  onChange={handleEnderecoChange}
          />
          <input
            type="text"
            name="Cidade"
            placeholder="Cidade"
            required
            /// / value={endereco.cidade}
            /// / onChange={handleEnderecoChange}
          />
          <input
            type="text"
            name="UF"
            placeholder="UF"
            required
            // value={endereco.uf}
            //  onChange={handleEnderecoChange}
          />
        </form>
        <div>
          <p>escolha sua forma de pagamento</p>
          <form
            action=""
            // lembrar de verificar qudno estiver validando se a seleção de uma das tres opçoes esta obrigatoria.
          >
            <input
              type="radio"
              name="pagamento"
              value="Cartão de credito"
              // checked={pagamnto === 'Cartão de credito'}
              //  onChange={handlePayementChange}
            />
            <input
              type="radio"
              name="pagamento"
              value="Cartão de débito"
              // checked={pagamento === 'Cartão de débito'}
              // onChange={handlePayementChange}
            />
            <input
              type="radio"
              name="pagamento"
              value="Dinheiro"
              // checked={pagamnto === 'Dinheiro'}
              // onChange={handlePayementChange}
            />
          </form>
        </div>
      </div>

      <div className="shoppingDetails">
        <p>Cafés Selecionados</p>
        <CoffeeCard
          coffeeCardImg={Expresso}
          coffeeCardName="Expresso"
          coffeeCardPrice={9.99}
          isInCheckout={true}
          key={1}
        />
      </div>
    </StyledCheckout>
  )
}
