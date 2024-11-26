import React from "react";
import { Box, Button, Flex,Image,Link } from "@chakra-ui/react";
import Logo from '../assets/Logo.png'
import { HeaderLinks } from "../utils";
export default function Header() {
	return(
		<Box width={'100%'} textAlign={'center'} bg={'#fff'} position={'relative'} zIndex={2}>
			<Flex width={{base: '95%', xl: '1320px'}} m={'0 auto'} py={{base: '0.5rem', md: '1rem', lg: '1.4rem', xl: '1.8rem'}} justifyContent={'space-between'} alignItems={'center'}>
				<Flex gap={'0.6rem'} alignItems={'center'}>
					<Image src={Logo} width={{base: '1.6rem', sm: '1.8rem',md: '2rem', lg: '2.2rem', xl: '2.4rem'}} height={{base: '1.6rem', sm: '1.8rem',md: '2rem', lg: '2.2rem', xl: '2.4rem'}} mr={{base: '1rem', lg:'1.2rem', xl:'1.4rem'}}/>
					{HeaderLinks.map(item => {
						return <Link px={{base: '0.6rem',sm: '1rem',lg: '1.4rem', xl:'1.6rem'}} py={'1rem'} href={item.url} key={item.name} _hover={{}}>{item.name}</Link>
					})}
				</Flex>
				<Flex>
					<Button variant={'normal'} padding={{base: '1.5rem 1rem', sm: '1.8rem 2rem', md: '2rem 4rem', lg: '2.2rem 5rem', xl: '2.4rem 6rem'}} onClick={() => {}}>Trade Now</Button>
				</Flex>
			</Flex>
		</Box>
	)
}