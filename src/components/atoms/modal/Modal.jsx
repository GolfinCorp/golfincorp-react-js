import React from 'react';
import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton
} from '@chakra-ui/react';
const Modal = ({ isOpen, onClose, title, closeButton, children }) => {
  return (
    <ChakraModal isOpen={isOpen} onClose={onClose} size="md">
      <ModalOverlay />
      <ModalContent>
        {title && <ModalHeader>{title}</ModalHeader>}
        {closeButton && <ModalCloseButton />}
        {children}
      </ModalContent>
    </ChakraModal>
  );
};

export default Modal;
