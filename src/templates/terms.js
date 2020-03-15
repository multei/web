import React from "react"
import image from "../images/undraw_terms_lso0_dark.svg"
import Typography from "@material-ui/core/Typography"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import Container from "@material-ui/core/Container"
import ListItemText from "@material-ui/core/ListItemText"
import { Article, Figure, Image } from "muy"

const TermsTemplate = () => (
  <Article>
    <Container maxWidth="xs">
      <Typography component="h1" variant="h1">
        Termos de uso
      </Typography>
      <Typography component="h2" variant="h2">
        Respeito às outras pessoas
      </Typography>
      <Typography paragraph={true}>
        Apesar do Multei! não permitir que você interaja com outras pessoas,
        ainda há regras básicas de conduta que você precisa seguir:
      </Typography>
      <List>
        <ListItem>
          Respeite os direitos das outras pessoas, incluindo a privacidade.
          Quando for realizar uma denúncia, certifique-se de que nenhuma pessoa
          está sendo fotografada e exposta nas duas fotos que são anexadas à
          denúncia.
        </ListItem>
        <ListItem>
          <ListItemText>
            Não abuse nem prejudique você ou outras pessoas, nem ameace ou
            incentive esse tipo de conduta. Por exemplo, usar nossa plataforma
            de denúncias para enganar, fraudar, difamar, fazer{" "}
            <em lang="en">bullying</em>, assediar ou perseguir outras pessoas.
          </ListItemText>
        </ListItem>
        <ListItem>
          Não abuse, prejudique, interrompa ou interfira nos serviços.
        </ListItem>
      </List>
      <Figure>
        <Image src={image} />
      </Figure>
    </Container>
  </Article>
)

export default TermsTemplate
