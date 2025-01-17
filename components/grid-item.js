import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const WorkGridItem = ({
  children,
  category = 'works',
  id,
  title,
  thumbnail
}) => (
  <Box
    w="100%"
    textAlign="center"
    transition="transform 0.2s"
    _hover={{
      transform: 'scale(1.05)',
    }}
  >
    <LinkBox
      as={NextLink}
      href={`/${category}/${id}`}
      scroll={false}
      cursor="pointer"
    >
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
      />
      <LinkOverlay as="div" href={`/${category}/${id}`}>
        <Text mt={1} fontSize={18}>
          {title}
        </Text>
      </LinkOverlay>
      <Text fontSize={13}>{children}</Text>
    </LinkBox>
  </Box>
)

export const CompanyGridItem = ({
                               children,
                               category = 'companies',
                               id,
                               title,
                               thumbnail
                             }) => (
  <Box
    w="100%"
    textAlign="center"
    transition="transform 0.2s"
    _hover={{
      transform: 'scale(1.04)',
    }}
  >
    <LinkBox
      as={NextLink}
      href={`/${category}/${id}`}
      scroll={false}
      cursor="pointer"
    >
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
      />
      <LinkOverlay as="div" href={`/${category}/${id}`}>
        <Text mt={0} fontSize={19}>
          {title}
        </Text>
      </LinkOverlay>
      <Text fontSize={13}>{children}</Text>
    </LinkBox>
  </Box>
)

export const BlogItem = ({
                           children,
                           category = 'blogposts',
                           id,
                           title,
                           thumbnail,
                           preview,
                            date,
                           animation
                         }) => {
  const isWebm = typeof animation === 'string' && animation.endsWith('.webm');
  const isWebp = typeof animation === 'string' && animation.endsWith('.webp');

  return (
    <Box
      w="100%"
      textAlign="center"
      transition="transform 0.2s"
      _hover={{
        transform: 'scale(1.04)',
      }}
    >
      <LinkBox
        as={NextLink}
        href={`/${category}/${id}`}
        scroll={false}
        cursor="pointer"
      >
        {/* Added transparent card wrapper */}
        <Box
          bg="whiteAlpha.100"
          borderRadius="xl"
          p={4}
          mb={4}
          backdropFilter="blur(10px)"
          border="1px solid"
          borderColor="whiteAlpha.200"
        >
          <Text
            fontSize={14}
            fontWeight="medium"
            color="whiteAlpha.700"
            mr={4}
            minWidth="fit-content"
          >
            {date} {/* Add date prop to component parameters */}
          </Text>
          <LinkOverlay as="div" href={`/${category}/${id}`}>
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
                  whiteSpace: 'pre-wrap',
                }
              }}
            >
              {title}
            </Text>

          </LinkOverlay>
          <Box display="flex" justifyContent="center">
            {isWebm ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                  width: '95%',
                  height: 'auto',
                  maxWidth: '100%'
                }}
              >
                <source src={animation} type="video/webm" />
              </video>
            ) : isWebp ? (
              <Image
                src={animation}
                alt={title}
                width={300}
                height={200}
                className="grid-item-thumbnail"
                style={{
                  width: '95%',
                  height: 'auto',
                  maxWidth: '100%'
                }}
              />
            ) : (
              <Image
                src={thumbnail}
                alt={title}
                width={300}
                height={200}
                className="grid-item-thumbnail"
                style={{
                  width: '95%',
                  height: 'auto',
                  maxWidth: '100%'
                }}
              />
            )}
          </Box>
          <Text
            fontSize={16}
            my={4}
            color="whiteAlpha.800"
            textAlign="left"
            noOfLines={3}
          >
            {preview}
          </Text>
          <Text
            fontSize={14}
            color="blue.300"
            mb={2}
            _hover={{
              textDecoration: "underline"
            }}
          >
            Read Full Article →
          </Text>
        </Box>
      </LinkBox>
    </Box>
  )
}







export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
)
