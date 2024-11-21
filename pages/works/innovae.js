import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center,
  Box
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Creativitic">
    <br />
    <Container>
      <Title>
        Innovae <Badge>2018</Badge>
      </Title>
      <WorkImage src="/images/works/innovae_eyecatch.jpg" alt="Company Logo" />
      <P>
        Innovae is a company specialized in VR and AR solutions.
        During my time working with them I mainly focused on creating VR experiences in Unity.<br />
        </P>
        <UnorderedList ml={4} my={4}>
          <ListItem>Developed VR interactive experiences for industrial and educational applications.</ListItem>
          <ListItem>Coordinated between artistic teams and programming departments.</ListItem>
          <ListItem>Led a VR Formative Working Training. Administered artistic tasks and supervised results were in sync with the projects needs.</ListItem>
        </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Engine</Meta>
          <span>
            Unity
          </span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            C# / MEL
          </span>
        </ListItem>
        <ListItem>
          <Meta>Tools</Meta>
          <span>
            Unity / Maya / ZBrush
          </span>
        </ListItem>
        <ListItem>
          <Meta>URL</Meta>
          <span>
            <Link href="https://www.innovae.com/">
            Company Website
            <ExternalLinkIcon mx="2px" />
          </Link>
          </span>
        </ListItem>
      </List>
      <Heading as="h4" fontSize={16} my={6}>
        Public Projects Coverage
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Link href="https://www.innovae.com/en/projects/masats/">
            <Badge mr={2}>Innovae</Badge>
            Puertas de Anden Masats
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://www.innovae.com/en/projects/puerto-pasajes/">
            <Badge mr={2}>Innovae</Badge>
            Puerto Pasajes
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://www.innovae.com/en/projects/asepeyo-psicosociales/">
            <Badge mr={2}>Innovae</Badge>
            Asepeyo
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList>
      <Center my={6}>
      </Center>
      <WorkImage src="/images/works/innovae_1.webp" alt="Website" />
      <WorkImage src="/images/works/innovae_3.webp" alt="Website" />
      <WorkImage src="/images/works/innovae_4.webp" alt="Website" />

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
