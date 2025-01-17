import {
  Container,
  Badge,
  Link,
  Heading,
  Box, Button, Text
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { WorkImage } from '../../components/work'
import P from '../../components/paragraph'
import NextLink from 'next/link'

const Work = () => (
  <Layout title="Are we moving towards a 3D Gaussian Splatting future?">
    <Container my={2.5}>
      <section>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          my={0}
        >
          <Heading as="h3" fontSize={19} mb={2}>
            <Badge>17/01/25</Badge>
          </Heading>
          <br />
          <Text
            fontSize={20}
            fontWeight="medium"
            color="white"
            width="100%"
            sx={{
              display: 'block',
              textAlign: 'center',
              '&::after': {
                content: '""',
                display: 'inline-block',
                width: '100%'
              },
              '& > span': {
                paddingRight: '0.25em',
                paddingLeft: '0.25em'
              },
              '@supports (text-wrap: balance)': {
                textWrap: 'balance'
              },
              '@supports not (text-wrap: balance)': {
                whiteSpace: 'pre-wrap'
              }
            }}
          >
            Are we moving towards a 3D Gaussian Splatting future?
          </Text>
          <Button
            mb={3}
            as={NextLink}
            href="/blog"
            scroll={false}
            colorScheme="teal"
            size="sm"
            leftIcon={<ChevronLeftIcon />}
          >
            Blog
          </Button>
        </Box>
      </section>

      <P>
        This morning I woke up to a{' '}
        <Link href="http://wlyu.me/FaceLift">new paper</Link> on single image to
        3D generation, and I must say I’m honestly mind-blown by how fast this
        tech is evolving.
        <br />
        <br />
        My first tests time ago with gaussian splatting were already quite
        telling, being able to reproduce items in a quite precise way with just
        a few pics, in contrast with the 100+ pics often needed recommended for
        photogrammetry. But this exceeds any expectations I had about this new
        solution.
        <br />
        <br />
        <WorkImage src="/images/blog/FaceLift.webp" alt="FaceLift" />
        The paper claims to be using a latent difussion model to generate
        multiple views of the heads and then feeding them to a GS-LRM
        reconstructor to generate a gaussian splat version of the heads.
        <br />
        <br />
        I am so interested in seeing how they got to train and refine the model.
        The fact the GS-LRM didn’t find big enough discrepancies is amazing.
        <br />I am also wondering how actually usable these heads might be
        without major tweaking, although that does not seem to be a big problem
        moving forward, as recently I also got to read about{' '}
        <Link href="https://developer.nvidia.com/blog/high-fidelity-3d-mesh-generation-at-scale-with-meshtron/">
          Meshtron
        </Link>
        , a solution which claimed to be able to convert point clouds into
        actually usable meshes. Removing, therefore, the current need for
        retopology, baking and other tweaks.
        <br />
        <br />
        <WorkImage src="/images/blog/Mestron.webp" alt="FaceLift" />
        <br />
        With this in mind I can say I really think we're heading towards this
        future where 3D asset and character preparation is going to be
        substantially different from what we know today. <br />
        There’s still going to be plenty of work for 3D Artists, as I genuinely
        believe AI can’t replace years of experience and actual creativity, but
        it’s going to be far more focused on creating the impossible and
        tweaking the possible.
        <br />
        <br />I can’t wait to hear more about FaceLift or any other advances.
        Like the two minutes paper Youtube guy says: what a time to be alive!
      </P>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
