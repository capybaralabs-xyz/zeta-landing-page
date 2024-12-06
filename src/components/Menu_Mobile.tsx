import React from 'react';
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Image,
  Link,
} from '@chakra-ui/react';
import { goto, HeaderLinks } from '../utils';
import Logo from '../assets/Logo.png';
type MenuProps = {
  onClose: () => void;
  isOpen: boolean;
};
export default function Menu_mobile({ onClose, isOpen }: MenuProps) {
  // const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader position={'relative'}>
          <DrawerCloseButton top={'50%'} mt={'-1rem'} />
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
        </DrawerHeader>
        <DrawerBody>
          {HeaderLinks.map((item, index) => {
            return (
              <Flex key={index} direction={'column'} gap={'0.6rem'}>
                <Link
                  px={{
                    base: '0.3rem',
                    sm: '1rem',
                    lg: '1.4rem',
                    xl: '1.6rem',
                  }}
                  py={'1rem'}
                  href={item.url}
                  key={item.name}
                  _hover={{}}
                  fontSize={{ base: '1.4rem' }}
                  lineHeight={{ base: '4.2rem' }}
                  // whiteSpace={'nowrap'}
                  onClick={() => {
                    goto(item.url);
                  }}
                >
                  {item.name}
                </Link>
              </Flex>
            );
          })}

          <Box height={'1px'} mt={'6rem'} background={'#eee'}></Box>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
