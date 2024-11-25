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
            Hubble Exchange <Badge>2021-2022</Badge>
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

      <WorkImage src="/images/works/hubble_eyecatch.png" alt="Project Logo" />
      <P>
        Hubble Exchange is a decentralized futures exchange for the Avalanche blockchain.
        <br /><br />
        I contributed to this project as a Unity Developer and 3D Artist.
        <br />
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>URL</Meta>
          <span>
            <Link href="https://www.hubble.exchange/">
            Company Website
            <ExternalLinkIcon mx="2px" />
          </Link>
          </span>
        </ListItem>
      </List>


      <Section>
        <Heading as="h3" fontSize={20} mb={4}>
          Projects
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={3}>
        <Section>
          <WorkGridItem id="hubbleversev2" thumbnail={thumbFiefTraining} title="Hubbleverse V2">
            Web Based Iteration of Hubbleverse
          </WorkGridItem>
        </Section>
        <Section >
          <WorkGridItem id="hubbleverse" thumbnail={thumbHubbleverse} title="Hubbleverse">
            VRChat Metaverse
          </WorkGridItem>
        </Section>
      </SimpleGrid>
        <Section>
          <Heading as="h3" fontSize={20} mb={4}>
            Creative Ventures
          </Heading>
        </Section>
      <Section>
        <Box borderRadius="lg" overflow="hidden" my={2}>
          <video controls width="100%" style={{ maxWidth: '640px' }} autoPlay loop>
            <source src="/images/works/hubblekey.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </Box>

        <Box borderRadius="lg" overflow="hidden" my={2}>
          <Image borderRadius="lg" w="full" src="/images/works/hubblering.webp" alt="Hubble Ring Promo" />
        </Box>
        <Grid templateColumns="2fr 2fr" gap={3} maxBlockSize={658}>

            <Box borderRadius="lg" overflow="hidden">
              <video controls width="100%" style={{ maxWidth: '640px' }} autoPlay loop>
                <source src="/images/works/hubbleeth.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </Box>


            <Box borderRadius="lg" overflow="hidden">
              <video controls width="100%" style={{ maxWidth: '640px' }} autoPlay loop>
                <source src="/images/works/hubblesavax.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </Box>

        </Grid>
        <Box borderRadius="lg" overflow="hidden" my={2}>
          <video controls width="100%" style={{ maxWidth: '640px' }} autoPlay loop>
            <source src="/images/works/HubblePassport.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </Box>
        <Grid templateColumns="1fr 1fr" gap={2} my={2}>
          <Box borderRadius="lg" overflow="hidden">
            <video controls width="100%" style={{ maxWidth: '640px' }} autoPlay loop>
              <source src="/images/works/Hubble_Milkyway.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </Box>
          <Box borderRadius="lg" overflow="hidden">
            <video controls width="100%" style={{ maxWidth: '640px' }} autoPlay loop>
              <source src="/images/works/hubble2.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </Box>
        </Grid>

      </Section>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
