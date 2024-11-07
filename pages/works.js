import { Container, Heading, SimpleGrid, Grid, Divider, Center, Box } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import { GridItem } from '../components/grid-item'

import thumbHubble from '../public/images/works/hubble_eyecatch.png'
import thumbFief from '../public/images/works/fief_eyecatch.png'
import thumbSurvival from '../public/images/works/survival_eyecatch.png'
import thumbHubbleverse from '../public/images/works/hubbleverse_eyecatch.png'
import thumbFiefHex from '../public/images/works/fiefhex_eyecatch.png'
import thumbFiefTraining from '../public/images/works/hubbleversev2_eyecatch.jpg'
import thumbFreeDBTagger from '../public/images/works/portfolio1.jpg'
import thumbAmembo from '../public/images/works/portfolio3.jpg'
import thumbHubbleRing from '../public/images/works/hubblering.jpg'



const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Teams I worked with
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        
        <Section>
          <GridItem
            id="fief"
            title="Fief Finance"
            thumbnail={thumbFief}
            href="https://fief.gg"
          >
            Head of 3D, Technical Artist
            
          </GridItem>
        </Section>
        <Section>
          <GridItem id="hubble" title="Hubble Exchange" thumbnail={thumbHubble} href="https://www.hubble.exchange">
            3D Generalist and Unity Developer.
            Creation of advertisement and Hubbleverse development.
          </GridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Projects
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
      <Section delay={0.3}>
          <WorkGridItem
            id="fiefhex"
            thumbnail={thumbFiefHex}
            title="Fiefverse Hex Land"
          >
            Primary game title of the Fiefverse that allows players to take control of their own Avatar or Hex land to earn real-world rewards
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="fiefsurvival" thumbnail={thumbSurvival} title="Fief Survival">
            A third-person wave survival action game only for brave players
          </WorkGridItem>
        </Section>
        
        
        <Section delay={0.3}>
          <WorkGridItem id="hubbleversev2" thumbnail={thumbFiefTraining} title="Hubbleverse V2">
            A second web based iteration of Hubbleverse
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="hubbleverse" thumbnail={thumbHubbleverse} title="Hubbleverse">
            A VRChat Metaverse experience for community engagement
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

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
      <Section delay={0.5}>
          <Box borderRadius="lg" overflow="hidden">
            <video controls width="100%" style={{ maxWidth: '640px' }} autoPlay loop>
              <source src="/images/works/hubble2.mp4" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </Box>
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
        <Section delay={0.6}>
            <Box borderRadius="lg" overflow="hidden">
              <video controls width="100%" style={{ maxWidth: '640px' }} autoPlay loop>
                <source src="/images/works/Hubble_Milkyway.mp4" type="video/webm" />
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
