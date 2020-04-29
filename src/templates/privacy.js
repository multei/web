import React from "react"
import image from "../images/undraw_privacy_protection_nlwy_dark.svg"
import Container from "@material-ui/core/Container"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import { Article, Figure, H1, H2, H3, Image, Paragraph } from "muy"
import SEO from "../components/SEO"

const PrivacyTemplate = () => (
  <Article>
    <SEO title="Termos de uso do Multei!" />
    <Container>
      <H1 gutterBottom={true}>Privacidade e proteção de dados</H1>
      <H2 gutterBottom={true}>Nenhum cadastro é exigido</H2>
      <Paragraph>
        Não é preciso se inscrever em nenhuma conta para realizar uma denúncia.
        Também não é necessário criar uma conta para consultar denúncias feitas.
      </Paragraph>
      <Paragraph>
        Em outras palavras, nós nunca exigiremos ou utilizaremos seu nome,
        e-mail, número de telefone ou cadastro de qualquer senha para qualificar
        uma denúncia.
      </Paragraph>
      <H2 gutterBottom={true}>
        Informações que coletamos quando você realiza uma denúncia
      </H2>
      <Paragraph>
        Coletamos o mínimo necessário de informações para que uma denúncia seja
        qualificada como válida. As informações podem incluir o seguinte:
      </Paragraph>
      <List>
        <ListItem>A data e hora em que a denúncia foi realizada;</ListItem>
        <ListItem>
          Informações de localização (apenas para ajudar a identificar onde está
          a vaga)
        </ListItem>
      </List>
      <H3>Suas informações de localização</H3>
      <Figure>
        <Image src={image} />
      </Figure>
      <Paragraph>
        Quando você realiza uma denúncia, só coletamos informações sobre sua
        localização se você permitir. Essas informações nos ajudam a identificar
        o local da vaga. Tenha em mente que sua localização pode ser determinada
        com vários graus de precisão por:
      </Paragraph>
      <List>
        <ListItem>GPS (só será utilizado se você permitir)</ListItem>
        <ListItem>
          Endereço IP (é coletado sempre que uma denúncia é feita, mas não será
          usado para identificação única)
        </ListItem>
      </List>
      <Paragraph>
        Usamos estas informações apenas para garantir a segurança e a
        confiabilidade das denúncias realizadas. Isso inclui prevenir denúncias
        falsas, abuso e problemas técnicos que possam prejudicar o Multei! e seu
        público.
      </Paragraph>
      <Paragraph>
        Usamos diferentes tecnologias para processar as informações para esses
        fins. Por exemplo, usamos algoritmos para reconhecer as placas, cores,
        marcas e modelos dos carros enviados.
      </Paragraph>
      <H2>Quando o Multei! compartilha as informações</H2>
      <Paragraph>
        Não compartilhamos informações pessoais com empresas, organizações ou
        pessoas externos ao Multei!, exceto por motivos legais, se acreditarmos,
        de boa-fé, que o acesso, o uso, a conservação ou a divulgação das
        informações sejam razoavelmente necessários para:
      </Paragraph>
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
      <Paragraph>
        Podemos compartilhar informações de identificação não pessoal
        publicamente para mostrar tendências (como o mapa que exibe os locais
        com mais denúncias). Também permitimos que pessoas desenvolvedoras
        coletem informações de denúncias para fins de medição.
      </Paragraph>
    </Container>
  </Article>
)

export default PrivacyTemplate
