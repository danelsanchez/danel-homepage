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
import { ChevronLeftIcon, ChevronRightIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import NextLink from 'next/link'

const Work = () => (
  <Layout title="Fiefverse Hex Land">
    <Container my={2.5}>
      <section>
        <Box display="flex" justifyContent="space-between" alignItems="center" my={0}>
          <Heading as="h3" fontSize={22} mb={0}>
            Atlas Sentry <Badge>2017</Badge>
          </Heading>
          <Button
            mb={0}
            as={NextLink}
            href="/companies/nestudio"
            scroll={false}
            colorScheme="teal"
            size="sm"
            leftIcon={<ChevronLeftIcon />}
          >
            Ne Studio
          </Button>
        </Box>
      </section>
      <P>
        Work in progress.
      </P>

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
