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

import { BlogItem } from '../components/grid-item'
import facelift from "../public/images/blog/FaceLift.webp"
const Home = () => (
  <Layout>
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
          A small corner where I share my thoughts and some of the work am allowed to show =)
        </Paragraph>


      </Section>

      <BlogItem
        id="170125"
        thumbnail={facelift}
        animation={facelift}
        date="Jan 17 2025"
        title="Are we moving towards a 3D Gaussian Splatting future?"
        preview="This morning I woke up to a new paper on single image to 3D generation, and I must say I’m honestly mind-blown by how fast this tech is evolving. My first tests with GS were already quite telling..."
      />


    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
