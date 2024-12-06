import React from 'react';
import { Box, Flex, Image, Text, Link } from '@chakra-ui/react';
import Logo from '../assets/Logo.png';
import {
  discord_url,
  FooterLinks,
  goto,
  medium_url,
  telegram_url,
  X_twitter_url,
} from '../utils';
import telegram from '../assets/telegram.png';
import medium from '../assets/medium..png';
import discord from '../assets/discord.png';
import X_twitter from '../assets/X_twitter.png';
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
          />
          <Text
            whiteSpace={'nowrap'}
            fontSize={{ base: '1.2rem', md: '1.4rem' }}
          >
            Copyright © KTX.Finance, 2024. All rights reserved
          </Text>
        </Flex>

        <Flex
          justifyContent={'flex-end'}
          alignItems={'center'}
          gap={{ base: '0', sm: '0.8rem', md: '2rem', lg: '2rem', xl: '4rem' }}
          direction={{ base: 'column-reverse', sm: 'row' }}
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
                    xl: '4rem',
                  }}
                  py={'1rem'}
                  href={item.url}
                  key={item.name}
                  _hover={{}}
                  fontSize={{ base: '1.2rem', md: '1.4rem' }}
                  onClick={() => {
                    goto(item.url);
                  }}
                >
                  {item.name}
                </Link>
              );
            })}
          </Flex>
          <Flex
            gap={{
              base: '1rem',
              sm: '0.8rem',
              md: '2rem',
              lg: '2rem',
              xl: '4rem',
            }}
            height={{ base: '2rem', md: '3rem' }}
          >
            <Link
              width={{ base: '2rem', md: '3rem' }}
              height={{ base: '2rem', md: '3rem' }}
              onClick={() => {
                goto(telegram_url);
              }}
            >
              <Image src={telegram} />
            </Link>
            <Link
              width={{ base: '2rem', md: '3rem' }}
              height={{ base: '2rem', md: '3rem' }}
              onClick={() => {
                goto(medium_url);
              }}
            >
              <Image src={medium} />
            </Link>
            <Link
              width={{ base: '2rem', md: '3rem' }}
              height={{ base: '2rem', md: '3rem' }}
              onClick={() => {
                goto(X_twitter_url);
              }}
            >
              <Image src={X_twitter} />
            </Link>
            <Link
              width={{ base: '2rem', md: '3rem' }}
              height={{ base: '2rem', md: '3rem' }}
              onClick={() => {
                goto(discord_url);
              }}
            >
              <Image src={discord} />
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
