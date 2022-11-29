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
import useMembers from '@/hooks/useMembers';
import { useForm } from 'react-hook-form';

const MemberModal = ({ isOpen, onClose }) => {
  const { register, handleSubmit } = useForm();
  const { createMember } = useMembers();
  const submitMember = (member) => {
    event.preventDefault();
    createMember(member);
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Agrega un miembro al club</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit(submitMember)}>
            <Box my="5">
              <Text>Nombre</Text>
              <Input placeholder="Pedro" {...register('firstName')} />
            </Box>
            <Box my="5">
              <Text>Apellido</Text>
              <Input placeholder="Perez" {...register('lastname')} />
            </Box>
            <Box my="5">
              <Text>Membresía</Text>
              <Input placeholder="55522" {...register('membership')} />
            </Box>
            <Button type="submit">Agregar</Button>
          </form>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default MemberModal;
