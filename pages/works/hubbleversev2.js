import {
  Container,
  Badge,
  List,
  ListItem,
  UnorderedList,
  Center,
} from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Hubbleverse V2">
    <Container>
      <Title>
      Hubbleverse V2 <Badge>2022</Badge>
      </Title>
      <Center my={6}>
      <WorkImage src="/images/works/hubbleversev2_2.jpg" alt="Website" />
      </Center>
      <P>
      A web based update to VRChat&apos;s Hubbleverse world and a much bigger effort in terms of development than it&apos;s predecesor.
      <br /> <br />
      The game uses Morali&apos;s API solution for web3 interactions and photon for simple multiplayer lobbies.
      3D Assets in this instance were designed from scratch following the Hubble Space Cats theme.
      <br /> <br />
      The key efforts included:
      </P>
      <UnorderedList ml={4} my={4}>
      <ListItem>Redesign and rebuilding of Hubbleverse.</ListItem>
      <ListItem>Optimization for web.</ListItem>
      <ListItem>Web3 interactivity implementation.</ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Engine</Meta>
          <span>Unity</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>C#, JS</span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/hubbleversev2_1.jpg" alt="Website" />
      <WorkImage src="/images/works/hubbleversev2_3.jpg" alt="Website" />
      <WorkImage src="/images/works/hubbleversev2_4.jpg" alt="Website" />

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
