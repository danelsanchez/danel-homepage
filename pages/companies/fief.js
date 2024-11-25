import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center,
  Box, SimpleGrid, Button, Image, Grid
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ChevronLeftIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/career'
import P from '../../components/paragraph'
import Section from '../../components/section'
import { WorkGridItem } from '../../components/grid-item'
import thumbFiefHex from '../../public/images/works/fiefhex_eyecatch.webp'
import thumbSurvival from '../../public/images/works/survival_eyecatch.webp'
import thumbGlarbs from '../../public/images/works/fiefglarbs_eyecatch.webp'
import NextLink from 'next/link'

const Work = () => (
  <Layout title="Fief Finance">
    <Container my={2.5}>
      <section>
        <Box display="flex" justifyContent="space-between" alignItems="center" my={0}>
          <Heading as="h3" fontSize={22} mb={2}>
            Fief <Badge>2022-2024</Badge>
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

      <WorkImage src="/images/works/fief_eyecatch.png" alt="Project Logo" />
      <P>
        Fief is a multi-chain blockchain platform that enables users to trade and earn rewards on metaverse
        assets.
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
        <Section>
          <WorkGridItem
            id="fiefhex"
            thumbnail={thumbFiefHex}
            title="Fiefverse Hex Land"
          >
            Online Web Based 4X Game
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="fiefsurvival" thumbnail={thumbSurvival} title="Fief Survival">
            Wave Survival Action Game
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="fiefglarbs" thumbnail={thumbGlarbs} title="Glarbaggedon">
            Competitive Arena Game
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
          <Image borderRadius="lg" w="full" src="/images/works/fiefverse_1.png" alt="Hubble Ring Promo" />
        </Box>
        <Box borderRadius="lg" overflow="hidden" my={2}>
          <Image borderRadius="lg" w="full" src="/images/works/fief_3.jpeg" alt="Hubble Ring Promo" />
        </Box>
        <Box borderRadius="lg" overflow="hidden" my={2}>
          <Image borderRadius="lg" w="full" src="/images/works/fiefhex_users.jpeg" alt="Hubble Ring Promo" />
        </Box>
        <Box borderRadius="lg" overflow="hidden" my={2}>
          <Image borderRadius="lg" w="full" src="/images/works/fiefsurvival4.jpeg" alt="Hubble Ring Promo" />
        </Box>
        <Box borderRadius="lg" overflow="hidden" my={2}>
          <Image borderRadius="lg" w="full" src="/images/works/fiefhex_spiders.jpeg" alt="Hubble Ring Promo" />
        </Box>


      </Section>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
