import React from "react";
import { Box, Button, Flex,Text,Image } from "@chakra-ui/react";
import Group1 from '../assets/Group1.png'
import light from '../assets/light.png'
export default function Card() {
  return <Flex width={'100%'} p={{base: '0.8rem',sm: '1rem', md: '2rem',lg: '2.5rem',xl: '3rem'}} bg={'#fff'} boxShadow={'0px 6px 40px 0px rgba(0, 0, 0, 0.1)'} borderRadius={{base: '1rem', sm: '1.5rem',md: '2rem', lg: '3rem',xl: '4rem'}} gap={'1rem'} alignItems={'center'} justifyContent={'space-between'}>
					<Flex direction={'column'} justifyContent={'space-between'} gap={'4rem'} width={'60%'}>
						<Box gap={'1rem'}>
							<Text fontWeight={'700'} fontSize={{base: '1.6rem',sm: '1.8rem', md: '2rem', lg: '2.2rem',xl: '2.4rem'}} whiteSpace={'nowrap'}>Trading Perpetual Contracts</Text>
							<Text fontWeight={'500'} fontSize={{base: '1.2rem', xl: '1.6rem'}}>Trade without any slippage and counterparty risk with up to 100x leverage completely on-chain.</Text>
						</Box>
						<Box>
							<Button variant={'normal'} mb={'0.5rem'} padding={{base: '1.5rem 1.5rem', sm: '1.8rem 2.5rem', md: '2rem 4.5rem', lg: '2.2rem 6rem', xl: '2.4rem 7rem'}} onClick={() => {}}>Trade Now</Button>
							<Text fontWeight={'500'} fontSize={{base: '1.2rem', xl: '1.6rem'}} whiteSpace={'nowrap'}>Unlock the power of leverage with KTX.Finance now!</Text>
						</Box>
					</Flex>
					<Flex position={'relative'} width={{base: '8rem',sm: '10rem',md: '10rem',lg: '10rem',xl: '12.8rem'}}>
						<Image src={Group1} width={{base: '8rem',sm: '10rem',md: '10rem',lg: '10rem',xl: '12.8rem'}} minW={{base: '8rem',sm: '10rem',md: '10rem',lg: '10rem',xl: '12.8rem'}} height={{base: '8rem',sm: '10rem',md: '10rem',lg: '10rem',xl: '12.8rem'}} />
						<Box position={'absolute'} width={'140%'} height={'140%'} borderRadius={'50%'} top={'-20%'} left={'-20%'} right={'-20%'} bottom={'-20%'}>
							<Image src={light} width={'100%'} height={'100%'}/>
						</Box>
						{/* <Box width={'14rem'} height={'14rem'} position={'absolute'} filter={'blur(80.33px)'} top={'50%'} left={'50%'} m={'-7rem 0 0 -7rem'} bg={'rgba(255, 242, 195, 1)'}></Box> */}
					</Flex>
				</Flex>
}