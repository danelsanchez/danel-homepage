import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Flex,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  SimpleGrid, Grid, Divider, Center, Badge
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Image from 'next/image'

import { GridItem, WorkGridItem } from '../components/grid-item'
import thumbCreativitic from '../public/images/works/creativitic_eyecatch.jpg'
import thumbXPERI from '../public/images/works/xperi_eyecatch.jpg'
import thumbInnovae from '../public/images/works/innovae_eyecatch.jpg'
import thumbFief from '../public/images/works/fief_eyecatch.png'
import thumbHubble from '../public/images/works/hubble_eyecatch.png'
import thumbNeStudio from '../public/images/works/nestudio_eyecatch.jpg'

const Home = () => (
  <Layout>
    <Center my={3}><Badge>Website currently under construction</Badge></Center>

    <Container>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        align={{ base: 'center', md: 'flex-start' }}
        mt={{ base: 4, md: 3 }}
      >
        <Box
          flexShrink={0}
          borderColor="whiteAlpha.800"
          borderWidth={2}
          borderStyle="solid"
          w="70px"
          h="70px"
          display="inline-block"
          borderRadius="full"
          overflow="hidden"
          mb={{ base: 4, md: 3 }}
        >
          <Image
            src="/images/danel.jpg"
            alt="Profile image"
            width="100"
            height="100"
          />
        </Box>

        <Box
          ml={{ base: 0, md: 3.5 }}
          textAlign={{ base: 'center', md: 'left' }}
        >
          <Heading as="h2" variant="page-title">
            Danel Sánchez
          </Heading>
          <p>Technical Artist ( 3D Artist / Developer ) </p>
        </Box>
      </Flex>

      <Section delay={0.1}>
        <Paragraph>
          As a Technical Artist, I serve as the crucial link between digital
          artists and software engineers, ensuring smooth implementation and
          optimization of visual assets in games and applications. <br />
          <br />
          While my expertise spans game logic development and 3D animation, I
          specialize in pipeline optimization and custom tool development for
          DCC applications like Maya or Blender and game engines like Unity.{' '}
          <br />
          <br />
          Here's where I share highlights from my career path and feature
          some of my favorite freelance projects.
        </Paragraph>


      </Section>
      <Heading as="h3" fontSize={20} mb={4}>
        My Career
      </Heading>

      <SimpleGrid columns={[1, 1, 3]} gap={2}>
        <Section>
          <WorkGridItem id="xperi" thumbnail={thumbXPERI} title="XPERI / Tobii">
            Synthetic Data Generation for Automotive and ML
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="innovae" thumbnail={thumbInnovae} title="Innovae">
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

      <Heading as="h3" fontSize={20} mb={4}>
        My clients
      </Heading>

      <SimpleGrid columns={[1, 1, 3]} gap={2.5}>

        <Section>
          <WorkGridItem
            id="fief"
            title="Fief Finance"
            thumbnail={thumbFief}
          >
            Head of 3D &  <br />
            Technical Artist
          </WorkGridItem>
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

      <Box align="center" my={4}>
        <Button
          as={NextLink}
          href="/works"
          scroll={false}
          rightIcon={<ChevronRightIcon />}
          colorScheme="teal"
        >
          My portfolio
        </Button>
      </Box>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
