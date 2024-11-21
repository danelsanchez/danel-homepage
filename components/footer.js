import { Box, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Danel Sánchez. All Rights Reserved.
      <br /> Website design by <Link
      href="https://www.craftz.dog/"
    >
      craftdogz
    </Link>
    </Box>
  )
}

export default Footer
