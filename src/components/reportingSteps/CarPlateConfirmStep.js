import React from "react"
import Button from "../Button"

const CarPlateConfirmStep = ({onSubmit, plate}) => (
  <form onSubmit={onSubmit}>
    <h2>Recebemos as fotos com sucesso.</h2>
    <p>Agora você pode complementar sua denúncia com mais informações. Ela continuará anônima.</p>
    <label htmlFor="car-plate">Confirme a placa do carro</label>
    <input id="car-plate"
           aria-required={true}
           defaultValue={plate}
           maxLength={7}
           minLength={7}
           name="car-plate"
           pattern="[A-Z]{3}[0-9][A-Z][0-9]{2}"
           required={true}
    />
    <Button id="submitCarPlate"
            color="primary"
            name="submitCarPlate"
            type="submit">Confirmar denúncia</Button>
  </form>
)

export default CarPlateConfirmStep
