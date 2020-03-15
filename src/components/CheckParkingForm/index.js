import React from "react"
import Button from "@material-ui/core/Button"
import { CarPlateField, Fieldset, Form } from "muy"

export default ({
  carPlate,
  formProps,
  loading,
  onCarPlateChange,
  onSubmit,
}) => (
  <Form onSubmit={onSubmit} {...formProps}>
    <Fieldset variant="borderNone">
      <CarPlateField
        id="car_plate"
        defaultValue={carPlate}
        label="Placa do carro"
        name="car_plate"
        onChange={onCarPlateChange}
        placeholder="Letras e números"
        required={true}
        type="search"
      />
      <Button disabled={loading} type="submit" variant="contained">
        Verificar
      </Button>
    </Fieldset>
  </Form>
)
