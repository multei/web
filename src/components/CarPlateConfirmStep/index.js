import React from "react"
import { CarPlateField, Fieldset, Form, H2, Paragraph } from "muy"
import FormGroup from "@material-ui/core/FormGroup"
import Fade from "@material-ui/core/Fade"

const CarPlateConfirmStep = ({ carPlate, onChange, onSubmit, plate }) => (
  <Form onSubmit={onSubmit}>
    <Fieldset>
      <H2 gutterBottom={true}>Confirme a placa do carro</H2>
      <Paragraph>
        Assim podemos garantir que sua denúncia é verdadeira.
      </Paragraph>
      <Fade in={true}>
        <FormGroup row>
          <CarPlateField
            id="carPlate"
            defaultValue={plate}
            label="Placa do carro"
            onChange={onChange}
            name="carPlate"
            required={true}
            value={carPlate}
            variant={"outlined"}
          />
        </FormGroup>
      </Fade>
    </Fieldset>
  </Form>
)

export default CarPlateConfirmStep
