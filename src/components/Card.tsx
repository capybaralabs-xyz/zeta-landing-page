import React from 'react';
import { Box, Button, Flex, Text, Image } from '@chakra-ui/react';
import { goto } from '../utils';
export default function Card({
  title,
  content,
  remain,
  Logo,
  url,
}: {
  title: string;
  content: string;
  remain: string;
  Logo: string;
  url: string;
}) {
  return (
    <Flex
      width={'100%'}
      p={{ base: '2rem', md: '3rem' }}
      bg={'#fff'}
      boxShadow={'0px 6px 40px 0px rgba(0, 0, 0, 0.1)'}
      borderRadius={{
        base: '3rem',
        lg: '4rem',
      }}
      gap={{ base: '2rem', sm: '1rem' }}
      alignItems={'center'}
      justifyContent={'space-between'}
      direction={{ base: 'column-reverse', md: 'row' }}
    >
      <Flex
        direction={'column'}
        justifyContent={'space-between'}
        gap={'3rem'}
        width={{ base: '100%', md: '60%' }}
      >
        <Box gap={{ base: '2rem', md: '1rem' }}>
          <Text
            fontWeight={'700'}
            fontSize={{
              base: '1.6rem',
              sm: '1.8rem',
              md: '2rem',
              lg: '2.2rem',
              xl: '2.4rem',
            }}
            whiteSpace={'nowrap'}
            mb={{ base: '0.5rem', md: 0 }}
            textAlign={{ base: 'center', md: 'left' }}
          >
            {title}
          </Text>
          <Text
            fontWeight={'500'}
            fontSize={{ base: '1.2rem', lg: '1.6rem' }}
            lineHeight={{ base: '1.9rem', md: '2.5rem' }}
            textAlign={{ base: 'center', md: 'left' }}
          >
            {content}
          </Text>
        </Box>
        <Flex
          alignItems={{ base: 'center', md: 'flex-start' }}
          direction={'column'}
        >
          <Button
            variant={'normal'}
            mb={{ base: 0, md: '0.5rem' }}
            padding={{
              base: '1.5rem 4.5rem',
              sm: '1.8rem 2.5rem',
              md: '2rem 4.5rem',
              lg: '2.4rem 9rem',
              xl: '2.4rem 9rem',
            }}
            onClick={() => {
              goto(url);
            }}
            width={{ base: '70%', md: 'auto' }}
          >
            Trade Now
          </Button>
          <Text
            fontWeight={'500'}
            fontSize={{ base: '1.2rem', lg: '1.6rem' }}
            whiteSpace={{ base: 'normal', md: 'nowrap' }}
            mt={'1rem'}
            width={{ base: '70%', md: 'auto' }}
            textAlign={{ base: 'center', md: 'left' }}
          >
            {remain}
          </Text>
        </Flex>
      </Flex>
      <Flex position={'relative'} mr={'2rem'}>
        <Image
          src={Logo}
          width={{
            base: '17rem',
            sm: '20rem',
            xl: '22.8rem',
          }}
          minW={{
            base: '17rem',
            sm: '20rem',
            xl: '22.8rem',
          }}
        />

        {/* <Box width={'14rem'} height={'14rem'} position={'absolute'} filter={'blur(80.33px)'} top={'50%'} left={'50%'} m={'-7rem 0 0 -7rem'} bg={'rgba(255, 242, 195, 1)'}></Box> */}
      </Flex>
    </Flex>
  );
}
