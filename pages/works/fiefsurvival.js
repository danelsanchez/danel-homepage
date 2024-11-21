import {
  Container,
  Badge,
  List,
  ListItem,
  UnorderedList,
  Center,
  Box, Heading
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import { PiTextAlignJustifyDuotone } from 'react-icons/pi'
import { BiAlignJustify } from 'react-icons/bi'
import { BsJustify } from 'react-icons/bs'
import { CgFormatJustify } from 'react-icons/cg'

const Work = () => (
  <Layout title="Fief Survival">
    <Container my={2}>
      <Heading as="h3" fontSize={22} mb={3}>
        Fief Survival <Badge>2022-2023</Badge>
      </Heading>
      <Center my={3}>
      <Box borderRadius="lg" overflow="hidden">
        <video controls width="100%" style={{ maxWidth: '640px' }} autoPlay loop>
          <source src="/images/works/fiefsurvivalvideo.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <Center><Badge>Disclaimer: Not my video. Posted for project showcase purposes.</Badge></Center>

      </Box>
      </Center>
      <P>
      A third-person wave surviving action game for Windows. My role in this development was mixed; I led a small group of 3D artists while also supporting project needs acting as a Technical Artist.
      </P>
      <UnorderedList ml={4} my={4}>
      <ListItem>Managing a team composed by four 3D artists</ListItem>
      <ListItem>Designing a 3D asset pipeline and conducting maintenance based on project needs</ListItem>
      <ListItem>Developing inner art guides to speed up progress and ensure correct optimization.</ListItem>
      <ListItem>Creating inner tooling to optimize the efficiency of cleaning and rigging of poly-converted voxel models.</ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Engine</Meta>
          <span>Unity</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>C# / Python / PyMEL</span>
        </ListItem>
      </List>
      <Center my={6}>
      <Box borderRadius="lg" overflow="hidden">
        <video controls width="100%" style={{ maxWidth: '640px' }} autoPlay loop>
          <source src="/images/works/fiefsurvival2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Box>
      </Center>
      <WorkImage src="/images/works/fiefsurvival1.webp" alt="Website" />
      <WorkImage src="/images/works/fiefsurvival2.webp" alt="Website" />
      <WorkImage src="/images/works/fiefsurvival3.webp" alt="Website" />
      <WorkImage src="/images/works/fieftraining_eyecatch.webp" alt="Website" />

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
