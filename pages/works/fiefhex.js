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

const Work = () => (
  <Layout title="Fiefverse Hex Land">
    <Container my={2.5}>
      <section>
        <Box display="flex" justifyContent="space-between" alignItems="center" my={0}>
          <Heading as="h3" fontSize={22} mb={0}>
            Fiefverse Hex Land <Badge>2023-2024</Badge>
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
        <Box borderRadius="lg" overflow="hidden">
          <video controls width="100%" style={{ maxWidth: '640px' }} autoPlay loop>
            <source src="/images/works/WorldBuilder.mp4" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </Box>
      </Center>
      <P>
        Fiefverse Hex Land is a web based X4 game which mixes strategy, tower defense, and city building genres.
        <br /><br />
        I contributed to this project as the main developer.
        <br />
        My main duties being:
      </P>
      <UnorderedList ml={4} my={4}>
        <ListItem>Developing game logic in javascript for PlayCanvas. </ListItem>
        <ListItem>Creating inner-use world building tooling.</ListItem>
        <ListItem>Designing and implementing web3 compatible game systems.</ListItem>
        <ListItem>Creating 3D animation video for promotional purposes.</ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Engine</Meta>
          <span>
            PlayCanvas
          </span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            JavaScript / PyMEL
          </span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Link href="https://medium.com/@forgedincrypto/taking-another-look-at-the-fiefverse-cf4b3ae6e975">
            <Badge mr={2}>Forged in Crypto</Badge>
            Taking another look at the Fiefverse
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList>
      <Center my={6}>
        <Box borderRadius="lg" overflow="hidden">
          <video controls width="100%" style={{ maxWidth: '640px' }} autoPlay loop>
            <source src="/images/works/fiefhex3.mp4" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </Box>
      </Center>
      <WorkImage src="/images/works/fiefhex4.webp" alt="Website" />
      <WorkImage src="/images/works/fiefhex2.webp" alt="Website" />
      <Center my={6}>
        <Box borderRadius="lg" overflow="hidden">
          <video controls width="100%" style={{ maxWidth: '640px' }} autoPlay loop>
            <source src="/images/works/fiefhexland.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Center><Badge>Disclaimer: Not my video. Posted for project showcase purposes.</Badge></Center>
        </Box>
      </Center>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
