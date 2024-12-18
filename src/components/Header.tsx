import React from 'react';
import {
  Box,
  Button,
  Flex,
  Image,
  Link,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import Logo from '../assets/Logo.png';
import { goto, HeaderLinks, trade_url } from '../utils';
import MenuIcon from '../assets/menu.png';
import Menu_mobile from './Menu_Mobile';
export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        width={'100%'}
        textAlign={'center'}
        bg={'#fff'}
        position={'relative'}
        zIndex={2}
      >
        <Flex
          width={{ base: '95%', xl: '1320px' }}
          m={'0 auto'}
          py={{ base: '0.5rem', md: '1rem', lg: '1.4rem', xl: '1.8rem' }}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Flex gap={{ base: '0.2rem', md: '0.6rem' }} alignItems={'center'}>
            <Box
              width={{
                base: '2.4rem',
              }}
              height={{ base: '2.4rem' }}
              display={{ base: 'block', sm: 'none' }}
              onClick={onOpen}
            >
              <Image src={MenuIcon} width={'100%'}></Image>
            </Box>
            <Link href="/">
              <Image
                src={Logo}
                width={{
                  base: '2.7rem',
                  sm: '3rem',
                  md: '4rem',
                  lg: '5.4rem',
                  xl: '5.4rem',
                }}
                height={{
                  base: '2.7rem',
                  sm: '3rem',
                  md: '4rem',
                  lg: '5.4rem',
                  xl: '5.4rem',
                }}
                mr={'0.5rem'}
              />
            </Link>
            <Link href="/" _hover={{}}>
              <Text
                color={'rgba(255, 177, 85, 1)'}
                fontWeight={600}
                display={{ base: 'none', lg: 'inline' }}
              >
                Golden Finance
              </Text>
            </Link>
            <Box display={{ base: 'none', sm: 'block' }}>
              {HeaderLinks.map((item) => {
                return (
                  <Link
                    px={{
                      base: '0.3rem',
                      sm: '1rem',
                      lg: '1.4rem',
                      xl: '1.6rem',
                    }}
                    py={'1rem'}
                    href={item.url}
                    target="_blank"
                    key={item.name}
                    _hover={{ fontWeight: 'bold' }}
                    fontSize={{ base: '1rem', sm: '1.4rem' }}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </Box>
          </Flex>
          <Flex>
            <Button
              variant={'normal'}
              padding={{
                base: '1.5rem 1.5rem',
                sm: '1.8rem 2rem',
                md: '2rem 4rem',
                lg: '2.2rem 5rem',
                xl: '2.4rem 6rem',
              }}
              onClick={() => {
                goto(trade_url);
              }}
              fontSize={{ base: '1rem', sm: '1.4rem' }}
            >
              Trade Now
            </Button>
          </Flex>
        </Flex>
      </Box>
      <Menu_mobile onClose={onClose} isOpen={isOpen} />
    </>
  );
}
