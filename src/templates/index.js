import { Link } from "gatsby"
import React from "react"
import Button from "@material-ui/core/Button"
import Divider from "@material-ui/core/Divider"
import TextField from "@material-ui/core/TextField"
import Typography from "@material-ui/core/Typography"

const IndexTemplate = props => (
  <article>
    <Typography component="h1" variant="srOnly">
      Página inicial
    </Typography>
    <Typography component="h2">Confira se seu carro foi multado</Typography>
    <form>
      <TextField
        id="car_plate"
        label="Placa do carro"
        InputProps={{
          "aria-required": true,
          maxLength: 7,
        }}
        name="car_plate"
        placeholder="Letras e números"
        required={true}
        size="small"
        type="search"
        variant="outlined"
      />
      <Button size="medium" type="submit" variant="contained">
        Verificar
      </Button>
    </form>
    <Divider />
    <Typography component="h2">
      Encontrou um carro estacionado de forma irregular?
    </Typography>
    <Button
      color="primary"
      component={Link}
      to="/fazer-denuncia"
      variant="contained"
    >
      Denuncie agora
    </Button>
  </article>
)

export default IndexTemplate
