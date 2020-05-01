import React from "react"
import { Form, H2, Paragraph } from "muy"
import Button from "@material-ui/core/Button"

const CarRearPhotoStep = ({ isLoading, onChange, onSubmit }) => (
  <Form onSubmit={onSubmit}>
    <H2 gutterBottom={true}>
      Tire uma foto da traseira do carro, incluindo a placa.
    </H2>
    <Paragraph>
      Agora você pode complementar sua denúncia com mais informações. Ela
      continuará anônima. Recomendamos que a foto mostre a placa de
      estacionamento com o símbolo da pessoa com deficiência.
    </Paragraph>
    <label htmlFor="carRearImage">Enviar foto da traseira</label>
    <input
      id="carRearImage"
      accept="image/*"
      onChange={onChange}
      name="carRearImage"
      required={true}
      type="file"
    />
    <Button id="submitCarRearImage" name="submitCarRearImage" type="submit">
      Enviar foto da traseira
    </Button>
    {isLoading && <progress />}
  </Form>
)

export default CarRearPhotoStep
