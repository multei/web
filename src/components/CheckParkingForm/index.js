import React from "react"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"

export default ({ loading, onCarPlateChange, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <TextField
      id="car_plate"
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
    <Button disabled={loading} size="medium" type="submit" variant="contained">
      Verificar
    </Button>
  </form>
)
