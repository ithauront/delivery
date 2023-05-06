import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import Motoboy from '../../assets/motoboy.svg'
import { IconStyle, StyledSuccess } from './styles'

export function Success() {
  return (
    <StyledSuccess>
      <div className="successTitle">
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é so aguardar que logo o café chegara até você</p>
      </div>
      <div className="recapImgContainer">
        <div className="deliveryRecapBorder">
          <div className="deliveryRecap">
            <div className="deliveryRecapInfo">
              <IconStyle className="mapPin">
                <MapPin />
              </IconStyle>
              <p>
                Entrega em
                <strong>Rua form.rua, form.numero</strong>
                <br />
                form.bairro - Form.cidade, Form.UF
              </p>
            </div>
            <div className="deliveryRecapInfo">
              <IconStyle className="timer">
                <Timer />
              </IconStyle>
              <p>
                Previsão de entrega
                <strong>
                  <br />
                  20 min - 30 min
                </strong>
              </p>
            </div>
            <div className="deliveryRecapInfo">
              <IconStyle className="dollar">
                <CurrencyDollar />
              </IconStyle>
              <span>
                <p>
                  Pagamento na entrega
                  <br />
                  <strong>Form.paymentButto</strong>
                </p>
              </span>
            </div>
          </div>
        </div>
        <div className="successImg">
          <img src={Motoboy} alt="DeliveryBoy on a moto" />
        </div>
      </div>
    </StyledSuccess>
  )
}
