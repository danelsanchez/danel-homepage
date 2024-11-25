import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center,
  Box, SimpleGrid, Button, Grid, Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ChevronLeftIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/career'
import P from '../../components/paragraph'
import Section from '../../components/section'
import { GridItem, WorkGridItem } from '../../components/grid-item'
import thumbFiefHex from '../../public/images/works/fiefhex_eyecatch.webp'
import thumbSurvival from '../../public/images/works/survival_eyecatch.webp'
import thumbGlarbs from '../../public/images/works/fiefglarbs_eyecatch.webp'
import NextLink from 'next/link'
import thumbFiefTraining from '../../public/images/works/hubbleversev2_eyecatch.jpg'
import thumbHubbleverse from '../../public/images/works/hubbleverse_eyecatch.webp'
import thumbAmembo from '../../public/images/works/portfolio3.jpg'
import thumbFreeDBTagger from '../../public/images/works/portfolio1.jpg'

const Work = () => (
  <Layout title="Hubble Exchange">
    <Container my={2.5}>
      <section>
        <Box display="flex" justifyContent="space-between" alignItems="center" my={0}>
          <Heading as="h3" fontSize={22} mb={2}>
            Transcend Studios <Badge>2024</Badge>
          </Heading>
          <Button
            mb={3}
            as={NextLink}
            href="/"
            scroll={false}
            colorScheme="teal"
            size="sm"
            leftIcon={<ChevronLeftIcon />}
          >
            Main
          </Button>
        </Box>
      </section>

      <WorkImage src="/images/works/transcend_eyectach.webp" alt="Project Logo" />
      <P>
        Transcend Studios is a small independent studio currently developing it's first title.
        <br /><br />
        I am currently contributing to the project as a Technical Artist.
        <br />
        The key efforts are:
      </P>
      <UnorderedList ml={4} my={4}>
        <ListItem>Creation of Unity editor scripts for import automation</ListItem>
        <ListItem>Level building</ListItem>
        <ListItem>Lighting/Rendering setup</ListItem>
        <ListItem>Overall optimization of 3D assets and lighting settings for mobile</ListItem>
      </UnorderedList>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Engine</Meta>
          <span>
            Unity
          </span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/transcend_2.jpg" alt="Website" />

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
