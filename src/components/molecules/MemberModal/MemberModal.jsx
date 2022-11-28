import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Box,
  Text,
  ModalFooter,
  Input,
  Button
} from '@chakra-ui/react';

const MemberModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Agrega un miembro al club</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box my="5">
            <Text>Nombre</Text>
            <Input />
          </Box>
          <Box my="5">
            <Text>Apellido</Text>
            <Input />
          </Box>
          <Box my="5">
            <Text>Membresía</Text>
            <Input />
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button>Agregar</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default MemberModal;
