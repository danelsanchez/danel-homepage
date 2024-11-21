import { Container, Heading, SimpleGrid, Grid, Divider, Center, Box } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import { GridItem } from '../components/grid-item'

import thumbCreativitic from '../public/images/works/creativitic_eyecatch.jpg'
import thumbXPERI from '../public/images/works/xperi_eyecatch.jpg'
import thumbInnovae from '../public/images/works/innovae_eyecatch.jpg'
import thumbSurvival from '../public/images/works/survival_eyecatch.png'
import thumbHubbleverse from '../public/images/works/hubbleverse_eyecatch.png'
import thumbFiefHex from '../public/images/works/fiefhex_eyecatch.png'
import thumbFiefTraining from '../public/images/works/hubbleversev2_eyecatch.jpg'
import thumbFreeDBTagger from '../public/images/works/portfolio1.jpg'
import thumbAmembo from '../public/images/works/portfolio3.jpg'
import thumbHubbleRing from '../public/images/works/hubblering.jpg'

import thumbAtlasSentry from '../public/images/works/atlassentry_eyecatch.jpg'


const Works = () => (
  <Layout title="Works">
    <Container mt={{ base: 4, md: 4 }}>

      <Heading as="h3" fontSize={20} mb={4}>
        My Career
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={2}>
        
        <Section>
          <WorkGridItem
            id="xperi"
            thumbnail={thumbXPERI}
            title="XPERI / Tobii"
          >
            Synthetic Data Generation for Automotive and ML
          </WorkGridItem>

        </Section>
        <Section>
          <WorkGridItem
            id="innovae"
            thumbnail={thumbInnovae}
            title="Innovae"
          >
            VR Experiences Development for High-Risk Industrial Positions
          </WorkGridItem>

        </Section>
        <Section>
          <WorkGridItem
            id="creativitic"
            thumbnail={thumbCreativitic}
            title="CreativiTIC"
          >
            Augmented Reality Content Creation
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
