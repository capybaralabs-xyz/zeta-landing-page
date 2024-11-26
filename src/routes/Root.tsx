import React from "react";
import { Box, Flex, } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
const Root = () => {
  return (
    <Flex w="100vw" minH={'100vh'} overflowX={'hidden'} direction={'column'}>
      <Box width={{base: '100%'}} height={'806px'} position={'absolute'} top={'-767px'} left={'-20%'} opacity={'0.5'} background={'rgba(255, 208, 85, 1)'} blur={'483px'} borderRadius={'40%'} filter={'blur(483px)'}></Box>
      <Header />
      <Box flex={1} display={'flex'} alignItems={'center'}>
        <Outlet />
      </Box>
      <Footer />
    </Flex>
  );
};

export default Root;
