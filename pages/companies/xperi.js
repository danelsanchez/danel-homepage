import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center,
  Box, Button
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ChevronLeftIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import NextLink from 'next/link'

const Work = () => (
  <Layout title="XPERI / Tobii">
    <Container my={2.5}>
      <section>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          my={0}
        >
          <Heading as="h3" fontSize={22} mb={2}>
            XPERI / Tobii <Badge>2019-2024</Badge>
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
      <WorkImage src="/images/works/xperi_eyecatch.jpg" alt="Company Logo" />
      <P>
        This is my most recent position.
        During my time working for XPERI, and later on for Tobii, I worked
        as a Technical Artist building and maintaining an automatic character creation
        pipeline.
        <br />
        My efforts included:
      </P>
      <UnorderedList ml={4} my={4}>
        <ListItem>Led development of 3D asset pipelines and full-body scan auto-retopo and rigging solutions.</ListItem>
        <ListItem>Architect and maintain automation systems for synthetic data generation.</ListItem>
        <ListItem>Setup of automotive scenarios for ML Data Training: In-Cabin Driving, Safety, Drowsiness and Object Detection scenarios.</ListItem>
        <ListItem>Engineered a scalable and automatic character rigging system applied to 1000+ unique characters featuring interchangeable deformation and animation systems and modular character features and attributes.</ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Engine</Meta>
          <span>
            In-House Engine / Unity
          </span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            Python / MEL / C#
          </span>
        </ListItem>
        <ListItem>
          <Meta>Tools</Meta>
          <span>
            In-House Tooling / Maya / Blender / Wrap3
          </span>
        </ListItem>
      </List>
      <Heading as="h4" fontSize={16} my={6}>
        Public Projects Coverage
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Link href="https://www.tobii.com/products/automotive/tobii-autosense">
            <Badge mr={2}>Tobii</Badge>
            Autosense
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList>
      <Center my={6}>
      </Center>
      <Center my={3}><Badge>Some images were modified to remove identifiable data</Badge></Center>

      <WorkImage src="/images/works/auto_5.jpg" alt="Website" />
      <WorkImage src="/images/works/auto_4.jpg" alt="Website" />
      <WorkImage src="/images/works/auto_3.png" alt="Website" />
      <WorkImage src="/images/works/auto_2.jpg" alt="Website" />
      <WorkImage src="/images/works/auto_1.jpg" alt="Website" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
