import React from "react"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import { CarPlateField, Fieldset, Form } from "muy"

const CarPlateConfirmStep = ({ carPlate, onChange, onSubmit, plate }) => (
  <Form onSubmit={onSubmit}>
    <Fieldset>
      <Typography component="h2" color="success" variant="h2">
        Recebemos as fotos com sucesso.
      </Typography>
      <Typography paragraph={true}>
        Agora você pode complementar sua denúncia com mais informações. Ela
        continuará anônima.
      </Typography>
      <Typography paragraph={true}>
        <CarPlateField
          id="car_plate"
          defaultValue={plate}
          label="Placa do carro"
          onChange={onChange}
          name="car_plate"
          required={true}
          value={carPlate}
        />
      </Typography>
      <Typography paragraph={true}>
        <Button
          id="submitCarPlate"
          color="primary"
          name="submitCarPlate"
          variant="contained"
          type="submit"
        >
          Confirmar denúncia
        </Button>
      </Typography>
    </Fieldset>
  </Form>
)

export default CarPlateConfirmStep
