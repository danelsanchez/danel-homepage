import {
  Container,
  Badge,
  List,
  ListItem,
  UnorderedList,
  Center,
  Link, Box, Heading, Button
} from '@chakra-ui/react'
import { ChevronLeftIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import NextLink from 'next/link'

const Work = () => (
  <Layout title="Hubbleverse">
    <Container my={2.5}>
      <section>
        <Box display="flex" justifyContent="space-between" alignItems="center" my={0}>
          <Heading as="h3" fontSize={22} mb={0}>
            Hubbleverse <Badge>2021-2022</Badge>
          </Heading>
          <Button
            mb={0}
            as={NextLink}
            href="/companies/hubble"
            scroll={false}
            colorScheme="teal"
            size="sm"
            leftIcon={<ChevronLeftIcon />}
          >
            Hubble Exchange
          </Button>
        </Box>
      </section>
      <Center my={2.5}>
        <WorkImage src="/images/works/hubbleverse1.jpeg" alt="Website" />
      </Center>
      <P>
        A VRChat World made for Hubble Exchange community events.
        <br />
        It&apos;s launch day is something I will always remember as one of the most special days of my crypto journey.
        <br /> <br />
        The key efforts included:
      </P>
      <UnorderedList ml={4} my={4}>
        <ListItem>World building/Asset Preparation.</ListItem>
        <ListItem>Optimization for standalone headsets (Quest 2).</ListItem>
        <ListItem>VRChat Dev Kit usage.</ListItem>
      </UnorderedList>
      <P>
        The world is still available to be visited for those curious!
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Engine</Meta>
          <span>Unity</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>C#, Visual Programming (VRChat Addon)</span>
        </ListItem>
        <ListItem>
          <Meta>URL</Meta>
          <Link href="https://vrchat.com/home/world/wrld_c3d41b2d-43ad-486c-9041-adcda4481876">
            Hubbleverse in VR Chat <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      <WorkImage src="/images/works/hubbleverse2.png" alt="Website" />
      <WorkImage src="/images/works/hubbleverse3.jpeg" alt="Website" />
      <WorkImage src="/images/works/hubbleverse_eyecatch.png" alt="Website" />
      <WorkImage src="/images/works/hubbleverse5.jpg" alt="Website" />


    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
