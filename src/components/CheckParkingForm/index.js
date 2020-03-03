import React from "react"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"

import Fieldset from "../ui/Fieldset"
import Form from "../ui/Form"

export default ({
  carPlate,
  formProps,
  loading,
  onCarPlateChange,
  onSubmit,
}) => (
  <Form onSubmit={onSubmit} {...formProps}>
    <Fieldset variant="borderNone">
      <TextField
        id="car_plate"
        defaultValue={carPlate}
        label="Placa do carro"
        InputProps={{
          "aria-required": true,
        }}
        inputProps={{
          maxLength: 7,
          minLength: 7,
        }}
        name="car_plate"
        onChange={onCarPlateChange}
        placeholder="Letras e números"
        required={true}
        size="small"
        type="search"
        variant="outlined"
      />
      <Button
        disabled={loading}
        size="medium"
        type="submit"
        variant="contained"
      >
        Verificar
      </Button>
    </Fieldset>
  </Form>
)
