import React from "react"
import image from "../images/undraw_privacy_protection_nlwy_dark.svg"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import { Article, Figure, Image } from "muy"

const PrivacyTemplate = () => (
  <Article>
    <Container maxWidth="xs">
      <Typography component="h1" variant="h1">
        Privacidade e proteção de dados
      </Typography>
      <Typography component="h2" variant="h2">
        Nenhum cadastro é exigido
      </Typography>
      <Typography paragraph={true}>
        Não é preciso se inscrever em nenhuma conta para realizar uma denúncia.
        Também não é necessário criar uma conta para consultar denúncias feitas.
      </Typography>
      <Typography paragraph={true}>
        Em outras palavras, nós nunca exigiremos ou utilizaremos seu nome,
        e-mail, número de telefone ou cadastro de qualquer senha para qualificar
        uma denúncia.
      </Typography>
      <Typography component="h2" variant="h2">
        Informações que coletamos quando você realiza uma denúncia
      </Typography>
      <Typography paragraph={true}>
        Coletamos o mínimo necessário de informações para que uma denúncia seja
        qualificada como válida. As informações podem incluir o seguinte:
      </Typography>
      <List>
        <ListItem>A data e hora em que a denúncia foi realizada;</ListItem>
        <ListItem>
          Informações de localização (apenas para ajudar a identificar onde está
          a vaga)
        </ListItem>
      </List>
      <Typography component="h3" variant="h3">
        Suas informações de localização
      </Typography>
      <Figure>
        <Image src={image} />
      </Figure>
      <Typography paragraph={true}>
        Quando você realiza uma denúncia, só coletamos informações sobre sua
        localização se você permitir. Essas informações nos ajudam a identificar
        o local da vaga. Tenha em mente que sua localização pode ser determinada
        com vários graus de precisão por:
      </Typography>
      <List>
        <ListItem>GPS (só será utilizado se você permitir)</ListItem>
        <ListItem>
          Endereço IP (é coletado sempre que uma denúncia é feita, mas não será
          usado para identificação única)
        </ListItem>
      </List>
      <Typography paragraph={true}>
        Usamos estas informações apenas para garantir a segurança e a
        confiabilidade das denúncias realizadas. Isso inclui prevenir denúncias
        falsas, abuso e problemas técnicos que possam prejudicar o Multei! e seu
        público.
      </Typography>
      <Typography paragraph={true}>
        Usamos diferentes tecnologias para processar as informações para esses
        fins. Por exemplo, usamos algoritmos para reconhecer as placas, cores,
        marcas e modelos dos carros enviados.
      </Typography>
      <Typography component="h2" variant="h2">
        Quando o Multei! compartilha as informações
      </Typography>
      <Typography paragraph={true}>
        Não compartilhamos informações pessoais com empresas, organizações ou
        pessoas externos ao Multei!, exceto por motivos legais, se acreditarmos,
        de boa-fé, que o acesso, o uso, a conservação ou a divulgação das
        informações sejam razoavelmente necessários para:
      </Typography>
      <List>
        <ListItem>
          cumprir qualquer legislação, regulação, processo legal ou solicitação
          governamental aplicável;
        </ListItem>
        <ListItem>
          detectar, impedir ou lidar de alguma forma com as infrações de
          trânsito denunciadas aqui;
        </ListItem>
        <ListItem>
          proteger de prejuízos aos direitos, à propriedade ou à segurança do
          Multei!, dos nossos usuários ou do público, conforme solicitado ou
          permitido por lei.
        </ListItem>
      </List>
      <Typography>
        Podemos compartilhar informações de identificação não pessoal
        publicamente para mostrar tendências (como o mapa que exibe os locais
        com mais denúncias). Também permitimos que pessoas desenvolvedoras
        coletem informações de denúncias para fins de medição.
      </Typography>
    </Container>
  </Article>
)

export default PrivacyTemplate
