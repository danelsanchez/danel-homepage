import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center,
  Box, SimpleGrid
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/career'
import P from '../../components/paragraph'
import Section from '../../components/section'
import { WorkGridItem } from '../../components/grid-item'
import thumbFiefHex from '../../public/images/works/fiefhex_eyecatch.png'
import thumbSurvival from '../../public/images/works/survival_eyecatch.png'
import thumbFiefTraining from '../../public/images/works/hubbleversev2_eyecatch.jpg'
import thumbHubbleverse from '../../public/images/works/hubbleverse_eyecatch.webp'
import thumbGlarbs from '../../public/images/works/fiefglarbs_eyecatch.png'

const Work = () => (
  <Layout title="Fiefverse Hex Land">
    <Container my={2}>
      <Heading as="h3" fontSize={22} mb={3}>
        Fiefverse Hex Land <Badge>2023</Badge>
      </Heading>

      <WorkImage src="/images/works/fief_eyecatch.png" alt="Project Logo" />
      <P>
        Fief Finance is a multi-chain blockchain platform that enables users to trade and earn rewards on metaverse assets.
        <br /><br />
        I contributed to this project as Head of 3D and Technical Artist.
        <br />
        </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>URL</Meta>
          <span>
            <Link href="https://www.fief.gg/">
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
        <Section >
          <WorkGridItem
            id="fiefhex"
            thumbnail={thumbFiefHex}
            title="Fiefverse Hex Land"
          >
            Online Web Based 4X Game
          </WorkGridItem>
        </Section>
        <Section >
          <WorkGridItem id="fiefsurvival" thumbnail={thumbSurvival} title="Fief Survival">
            Wave Survival Action Game
          </WorkGridItem>
        </Section>
        <Section >
          <WorkGridItem id="fiefglarbs" thumbnail={thumbGlarbs} title="Glarbaggedon">
            Competitive Arena Game
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
