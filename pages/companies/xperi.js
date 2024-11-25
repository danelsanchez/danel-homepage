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
  <Layout title="XPERI / Tobii">
    <Container my={2}>
      <Title>
        XPERI / Tobii <Badge>2019-2024</Badge>
      </Title>
      <WorkImage src="/images/works/xperi_eyecatch.jpg" alt="Company Logo" />
      <P>
        Work In Progress.
        </P>


      <List ml={4} my={4}>
        <ListItem>
          <Meta>Engine</Meta>
          <span>
            In-House Engine / Unity
          </span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            Python / MEL / C#
          </span>
        </ListItem>
        <ListItem>
          <Meta>Tools</Meta>
          <span>
            In-House Tooling / Maya / Blender / Wrap3
          </span>
        </ListItem>
      </List>
      <Heading as="h4" fontSize={16} my={6}>
        Public Projects Coverage
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Link href="https://www.tobii.com/products/automotive/tobii-autosense">
            <Badge mr={2}>Tobii</Badge>
            Autosense
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList>
      <Center my={6}>
      </Center>

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
