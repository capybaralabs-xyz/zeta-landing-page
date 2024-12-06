import React from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import Card from '../components/Card';
import GroupLeft from '../assets/Group_left.png';
import { CardContents } from '../utils';
const Home = () => {
  return (
    <Box position={'relative'} width={'100%'}>
      <Flex
        width={{ sm: '95%', xl: '1320px' }}
        m={'0 auto'}
        py={{ base: '0.5rem', md: '1rem', lg: '1.4rem', xl: '1.8rem' }}
        direction={{ base: 'column', lg: 'row' }}
        justifyContent={'space-between'}
        alignItems={'center'}
        px={{ base: '2rem', sm: 0 }}
      >
        <Flex
          position={'relative'}
          width={{ base: '60%', lg: '53rem', xl: '63rem' }}
          minW={{ base: '80%', sm: '43rem' }}
          ml={{ base: 0, xl: '-8rem' }}
          mt={{ base: 0, lg: '-10rem', xl: '-12rem' }}
          mb={{ base: '10rem', lg: 0 }}
          textAlign={'center'}
        >
          <Image src={GroupLeft} width={'100%'} />
          <Box
            fontWeight={'700'}
            fontSize={{
              base: '2.8rem',
              sm: '4rem',
              lg: '4.8rem',
              xl: '6.4rem',
            }}
            fontStyle={'italic'}
            position={'absolute'}
            bottom={{ base: '-1rem', lg: '-1rem' }}
            right={{ base: '0', lg: '6.5rem' }}
            lineHeight={'1.1'}
            width={{ base: '100%', lg: 'auto' }}
            textAlign={{ base: 'center' }}
          >
            <Text>TRUSTED BY</Text>
            <Text
              color={'rgba(255, 208, 85, 1)'}
              fontSize={{ base: '5.5rem', md: '7rem', lg: '9rem', xl: '11rem' }}
              fontWeight={'800'}
            >
              39,907
            </Text>
            <Text>TRADERS</Text>
          </Box>
        </Flex>
        <Flex
          direction={'column'}
          gap={{ base: '2rem', lg: '4rem' }}
          mb={'4rem'}
          width={{ base: '100%', sm: '80%', lg: '50%' }}
        >
          <Card {...CardContents[0]} />
          <Card {...CardContents[1]} />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Home;
