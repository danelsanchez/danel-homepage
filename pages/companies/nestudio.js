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
import thumbAtlasSentry from '../../public/images/works/atlassentry_eyecatch.jpg'

const Work = () => (
  <Layout title="Ne Studio Games">
    <Container my={2.5}>
      <section>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          my={0}
        >
          <Heading as="h3" fontSize={22} mb={2}>
            Ne Studio Games <Badge>2017</Badge>
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

      <WorkImage
        src="/images/works/nestudio_eyecatch.webp"
        alt="Project Logo"
      />
      <P>
        Ne Studio Games was a company focused on making small mobiles games.
        <br />
        <br />
        I worked with them as a 3D Generalist helping in the creation of 3D
        Assets and animations.
        <br />
        <br />
      </P>
      <Section>
        <Heading as="h3" fontSize={20} mb={4}>
          Projects
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={3}>
        <Section>
          <WorkGridItem id="atlassentry" thumbnail={thumbAtlasSentry} title="Atlas Sentry">
            Wave Defense Game for Android
          </WorkGridItem>
        </Section>
      </SimpleGrid>

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
