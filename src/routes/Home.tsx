import React from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import Card from '../components/Card';
import GroupLeft from '../assets/Group_left.png';
import Group1 from '../assets/Group1.png';
import Group2 from '../assets/Group2.png';
const Home = () => {
  return (
    <Box position={'relative'} width={'100%'}>
      <Flex
        width={{ base: '95%', xl: '1320px' }}
        m={'0 auto'}
        py={{ base: '0.5rem', md: '1rem', lg: '1.4rem', xl: '1.8rem' }}
        direction={{ base: 'column', lg: 'row' }}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Flex
          position={'relative'}
          width={{ base: '50%', lg: '53rem', xl: '63rem' }}
          minW={{ base: '100%', sm: '43rem' }}
          ml={{ base: 0, xl: '-8rem' }}
          mt={{ base: 0, lg: '-10rem', xl: '-12rem' }}
        >
          <Image src={GroupLeft} width={'90%'} />
          <Box
            fontWeight={'700'}
            fontSize={{
              base: '2.8rem',
              md: '3.6rem',
              lg: '4.8rem',
              xl: '6.4rem',
            }}
            fontStyle={'italic'}
            position={'absolute'}
            bottom={{ base: '4rem', lg: '-1rem' }}
            right={{ base: '8rem', lg: '4rem' }}
            lineHeight={'1.1'}
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
          gap={'4rem'}
          mb={'4rem'}
          width={{ base: '100%', sm: '80%', lg: '50%' }}
        >
          <Card asset={Group1} />
          <Card asset={Group2} />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Home;
