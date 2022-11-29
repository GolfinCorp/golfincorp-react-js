import React from 'react';
import {
  Drawer as ChakraDrawer,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton
} from '@chakra-ui/react';
const Drawer = ({
  isOpen,
  onClose,
  finalFocusRef,
  title,
  closeButton,
  placement = 'right',
  children
}) => {
  return (
    <ChakraDrawer
      isOpen={isOpen}
      placement={placement}
      onClose={onClose}
      finalFocusRef={finalFocusRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        {closeButton && <DrawerCloseButton />}
        {title && <DrawerHeader>{title}</DrawerHeader>}
        {children}
      </DrawerContent>
    </ChakraDrawer>
  );
};

export default Drawer;
