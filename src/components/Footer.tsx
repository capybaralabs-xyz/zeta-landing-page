import React from 'react';
import { Box, Flex, Image, Text, Link } from '@chakra-ui/react';
import Logo from '../assets/Logo.png';
import {
  discord_url,
  FooterLinks,
  medium_url,
  telegram_url,
  X_twitter_url,
} from '../utils';
import { Discord, Medium, Telegram, X } from '../components/Icons';

export default function Footer() {
  return (
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
        direction={{ base: 'column-reverse', lg: 'row' }}
      >
        <Flex
          gap={{ base: 0, sm: '0.6rem' }}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Link href="/">
            <Image
              src={Logo}
              width={{
                base: '1.6rem',
                sm: '1.8rem',
                md: '2rem',
                lg: '2.2rem',
                xl: '2.4rem',
              }}
              height={{
                base: '1.6rem',
                sm: '1.8rem',
                md: '2rem',
                lg: '2.2rem',
                xl: '2.4rem',
              }}
              mr={{ base: '1rem', lg: '1.2rem', xl: '1.4rem' }}
              cursor={'pointer'}
            />
          </Link>
          <Text
            whiteSpace={'nowrap'}
            fontSize={{ base: '1.2rem', md: '1.4rem' }}
          >
            Copyright © Golden Finance, 2024. All rights reserved
          </Text>
        </Flex>

        <Flex
          justifyContent={'flex-end'}
          alignItems={'center'}
          gap={{ base: '0', sm: '0.8rem', md: '2rem', lg: '2rem', xl: '4rem' }}
          direction={{ base: 'column-reverse', md: 'row' }}
        >
          <Flex>
            {FooterLinks.map((item) => {
              return (
                <Link
                  px={{
                    base: '1rem',
                    sm: '0.8rem',
                    md: '2rem',
                    lg: '2rem',
                    xl: '2rem',
                  }}
                  py={'1rem'}
                  href={item.url}
                  target="_blank"
                  key={item.name}
                  _hover={{ fontWeight: 'bold' }}
                  fontSize={{ base: '1.2rem', md: '1.4rem' }}
                >
                  {item.name}
                </Link>
              );
            })}
          </Flex>
          <Flex
            gap={{
              base: '2rem',
              // sm: '0.8rem',
              // md: '2rem',
              lg: '2rem',
              xl: '4rem',
            }}
            height={{ base: '2rem', md: '3rem' }}
          >
            <Link
              width={{ base: '2rem', md: '3rem' }}
              height={{ base: '2rem', md: '3rem' }}
              href={telegram_url}
              target="_blank"
            >
              <Telegram />
            </Link>
            <Link
              width={{ base: '2rem', md: '3rem' }}
              height={{ base: '2rem', md: '3rem' }}
              href={medium_url}
              target="_blank"
            >
              <Medium />
            </Link>
            <Link
              width={{ base: '2rem', md: '3rem' }}
              height={{ base: '2rem', md: '3rem' }}
              href={X_twitter_url}
              target="_blank"
            >
              <X />
            </Link>
            <Link
              width={{ base: '2rem', md: '3rem' }}
              height={{ base: '2rem', md: '3rem' }}
              href={discord_url}
              target="_blank"
            >
              <Discord />
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
