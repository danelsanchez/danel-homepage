import { Container, Heading, SimpleGrid, Grid, Divider, Center, Box } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import { GridItem } from '../components/grid-item'

import thumbHubble from '../public/images/works/hubble_eyecatch.png'
import thumbFief from '../public/images/works/fief_eyecatch.png'
import thumbSurvival from '../public/images/works/survival_eyecatch.png'
import thumbHubbleverse from '../public/images/works/hubbleverse_eyecatch.webp'
import thumbFiefHex from '../public/images/works/fiefhex_eyecatch.png'
import thumbFiefTraining from '../public/images/works/hubbleversev2_eyecatch.jpg'
import thumbFreeDBTagger from '../public/images/works/portfolio1.jpg'
import thumbAmembo from '../public/images/works/portfolio3.jpg'
import thumbHubbleRing from '../public/images/works/hubblering.jpg'
import thumbNeStudio from '../public/images/works/nestudio_eyecatch.jpg'
import thumbAtlasSentry from '../public/images/works/atlassentry_eyecatch.jpg'


const Works = () => (
  <Layout title="Works">
    <Container mt={{ base: 4, md: 4 }}>

      <Heading as="h3" fontSize={20} mb={4}>
        My clients
      </Heading>

      <SimpleGrid columns={[1, 1, 3]} gap={2.5}>

        <Section>
          <GridItem
            id="fief"
            title="Fief Finance"
            thumbnail={thumbFief}
            href="https://fief.gg"
          >
            Head of 3D &  <br />
            Technical Artist
          </GridItem>
        </Section>
        <Section>
          <GridItem id="hubble" title="Hubble Exchange" thumbnail={thumbHubble} href="https://www.hubble.exchange">
            Technical Artist
          </GridItem>
        </Section>
        <Section>
          <GridItem id="hubble" title="NE Studio" thumbnail={thumbNeStudio} href="https://nestudiogames.com/">
            3D Generalist
          </GridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Heading as="h3" fontSize={20} mb={4}>
          Projects
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={5}>
      <Section delay={0.3}>
          <WorkGridItem
            id="fiefhex"
            thumbnail={thumbFiefHex}
            title="Fiefverse Hex Land"
          >
            Online Web Based 4X Game
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="fiefsurvival" thumbnail={thumbSurvival} title="Fief Survival">
            Wave Survival Action Game
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="hubbleversev2" thumbnail={thumbFiefTraining} title="Hubbleverse V2">
            Web Based Iteration of Hubbleverse
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="hubbleverse" thumbnail={thumbHubbleverse} title="Hubbleverse">
            VRChat Metaverse
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="atlassentry" thumbnail={thumbAtlasSentry} title="Atlas Sentry">
            Wave Defense Game for Android
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>

        <Heading as="h3" fontSize={20} mb={4}>
          Work pieces
        </Heading>
      </Section>
      
      
      <Grid templateColumns="2fr 1.135fr" gap={3} maxBlockSize={183}>
      <Section delay={0.5}>
        <Center>
        <Box borderRadius="lg" overflow="hidden">
          <video controls width="100%" style={{ maxWidth: '640px' }} autoPlay loop muted>
            <source src="/images/works/fiefglarbs2.mp4" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </Box>
        </Center>
      </Section>

      </Grid>

      <Grid templateColumns="1.15fr 2fr" gap={3} maxBlockSize={345}>
        <Section delay={0.5}>
            <Box borderRadius="lg" overflow="hidden">
              <video controls width="100%" style={{ maxWidth: '640px' }} autoPlay loop>
                <source src="/images/works/fiefportal.mp4" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </Box>
            <br />
            <GridItem
              thumbnail={thumbAmembo}
            >
            </GridItem>
          </Section>
        <Section delay={0.5}>
            <GridItem
              thumbnail={thumbFreeDBTagger}
            >
            </GridItem>
          </Section>
      </Grid>
      <Grid templateColumns="1.135fr 2fr" gap={3} maxBlockSize={183}>
        <Section>
            <Box borderRadius="lg" overflow="hidden">
              <video controls width="100%" style={{ maxWidth: '640px' }} autoPlay loop>
                <source src="/images/works/Hubble_Milkyway.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </Box>
            </Section>
            <Section>
            <Box borderRadius="lg" overflow="hidden">
                  <video controls width="100%" style={{ maxWidth: '640px' }} autoPlay loop muted>
                    <source src="/images/works/fiefglarbs.mp4" type="video/webm" />
                    Your browser does not support the video tag.
                  </video>
            </Box>
        </Section>
      </Grid>
      <Grid templateColumns="2fr" gap={3} maxBlockSize={282}>
        <Section delay={0.5}>
            <Box borderRadius="lg" overflow="hidden">
              <video controls width="100%" style={{ maxWidth: '640px' }} autoPlay loop>
                <source src="/images/works/HubblePassport.mp4" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </Box>
          </Section>
      </Grid>
      <Grid templateColumns="3fr" gap={3} maxBlockSize={498}>
        <Section delay={0.5}>
            <Box borderRadius="lg" overflow="hidden">
              <video controls width="100%" style={{ maxWidth: '640px' }} autoPlay loop>
                <source src="/images/works/hubblekey.mp4" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </Box>
          </Section>

      </Grid>
      <Grid templateColumns="2fr " gap={3} maxBlockSize={280}>
        <Section delay={0.5}>
              <GridItem
                thumbnail={thumbHubbleRing}
              >
              </GridItem>
        </Section>
      </Grid>
      <Grid templateColumns="2fr 2fr" gap={3} maxBlockSize={658}>
      <Section delay={0.5}>
            <Box borderRadius="lg" overflow="hidden">
              <video controls width="100%" style={{ maxWidth: '640px' }} autoPlay loop>
                <source src="/images/works/hubbleeth.mp4" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </Box>
          </Section>
        <Section delay={0.5}>
            <Box borderRadius="lg" overflow="hidden">
              <video controls width="100%" style={{ maxWidth: '640px' }} autoPlay loop>
                <source src="/images/works/hubblesavax.mp4" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </Box>
          </Section>
      </Grid>

    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
