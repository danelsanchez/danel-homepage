import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'
import FootprintIcon from './icons/footprint'
import styled from '@emotion/styled'

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: fixed;
    align-items: center;
    height: 50px;
    line-height: 0px;
    padding-top: 0px;
    align-items: center;
    margin-left: 132px;
    flex-shrink: 0;

    @media screen and (max-width: 768px) {
        display: fixed;

        margin-left: 10%;
    }

    > svg {
        transition: 600ms ease;
    }

    &:hover > svg {
        transform: rotateY(180deg);
    }
`

const Logo = () => {
  return (
    (<Link href="/" scroll={false}>

      <LogoBox>
        <FootprintIcon />
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily='M PLUS Rounded 1c", sans-serif'
          fontWeight="bold"
          ml={3}
        >
          .\danelsanchez
        </Text>
      </LogoBox>

    </Link>)
  );
}

export default Logo
