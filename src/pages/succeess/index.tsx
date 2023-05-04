import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import Motoboy from '../../assets/motoboy.svg'

export function Success() {
  return (
    <>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é so aguardar que logo o café chegara até você</p>
      <div className="deliveryRecap">
        <div>
          <span>
            <MapPin />
          </span>
          <span>
            `entrega em
            <strong>Rua form.rua, form.numero</strong>
            form.bairro - Form.cidade, Form.UF
          </span>
        </div>
        <div>
          <span>
            <Timer />
          </span>
          <p>Previsão de entrega</p>
          <p>20 min - 30 min</p>
        </div>
        <div>
          <span>
            <CurrencyDollar />
          </span>
          <span>
            <p>Pagamento na entrega</p>
            <p> Form.paymentButto</p>
          </span>
        </div>
      </div>
      <div className="successImg">
        <img src={Motoboy} alt="DeliveryBoy on a moto" />
      </div>
    </>
  )
}
