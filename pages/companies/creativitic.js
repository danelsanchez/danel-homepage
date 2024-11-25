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
        CreativiTIC <Badge>2018-2019</Badge>
      </Title>
      <WorkImage src="/images/works/creativitic_eyecatch.jpg" alt="Company Logo" />
      <P>
        CreativiTIC is a company based in Bilbao, Spain.
        During my time working for them I produced educational content with Augmented Reality.<br />
        <br />
        My main duties being:
        </P>
        <UnorderedList ml={4} my={4}>
          <ListItem>Developing AR interactive books for Android using Unity.</ListItem>
          <ListItem>Contributing to 'MetAClass Augmented Reality XR' educational AR platform.</ListItem>
          <ListItem>Creating educational content combining AR and traditional learning methods.</ListItem>
          <ListItem>Performing as a rigger, animator and composer.</ListItem>
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
            C#
          </span>
        </ListItem>
        <ListItem>
          <Meta>Tools</Meta>
          <span>
            Unity / Maya / CC3
          </span>
        </ListItem>
        <ListItem>
          <Meta>App</Meta>
          <Link href="https://play.google.com/store/apps/dev?id=9132583562263666868">
            MetAClass Augmented Reality XR <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>URL</Meta>
          <span>
            <Link href="https://www.creativitic.es/">
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
          <Link href="https://inmersionods.es/la-mochila-de-najma/">
            <Badge mr={2}>Inmersión ODS</Badge>
            La mochila de Najma
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://www.linkedin.com/feed/update/urn:li:activity:6509444901489381376/">
            <Badge mr={2}>LinkedIn</Badge>
            CreativiTIC at Mobile Learning Week
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList>
      <Center my={6}>
      </Center>
      <WorkImage src="/images/works/creativitic_01.jpg" alt="Website" />

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
