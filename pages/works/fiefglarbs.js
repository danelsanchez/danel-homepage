import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center,
  Box, Button
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ChevronLeftIcon, ChevronRightIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import NextLink from 'next/link'
import Section from '../../components/section'

const Work = () => (
  <Layout title="Fiefverse Hex Land">
    <Container my={2.5}>
      <section>
        <Box display="flex" justifyContent="space-between" alignItems="center" my={0}>
          <Heading as="h3" fontSize={22} mb={0}>
            Glarbaggedon <Badge>2023</Badge>
          </Heading>
          <Button
            mb={0}
            as={NextLink}
            href="/companies/fief"
            scroll={false}
            colorScheme="teal"
            size="sm"
            leftIcon={<ChevronLeftIcon />}
          >
            Fief Finance
          </Button>
        </Box>
      </section>


      <Center my={3}>
        <Section>
          <Box borderRadius="lg" overflow="hidden">
            <video controls width="100%" style={{ maxWidth: '640px' }} autoPlay loop muted>
              <source src="/images/works/fiefglarbs.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </Box>
        </Section>
      </Center>
      <P>
        Fiefverse Glarbaggedon is an arena card fighting game.
        <br />
        I contributed to this project making promotional videos and optimizing assets.

      </P>
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
            Maya / Blender
          </span>
        </ListItem>
      </List>


      <Center my={6}>
        <Box borderRadius="lg" overflow="hidden">
          <video controls width="100%" style={{ maxWidth: '640px' }} autoPlay loop>
            <source src="/images/works/fiefglarbs2.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </Box>
      </Center>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
