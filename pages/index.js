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
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoTwitter, IoLogoDiscord, IoLogoWhatsapp } from 'react-icons/io5'
import Image from 'next/image'

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
          As a Technical Artist I represent the bridge between digital artists and software engineers, a bridge required for the functionality of visual applications or game development projects.
          <br /><br />
          While I have a wide set of skills, from game logic development to 3D animation, I specialize in pipeline design and tooling development for DCC applications and game engines.
          <br /><br />
          On this page, you can find information about my career as well as some of my most notable works!
        </Paragraph>

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
      </Section>




    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
