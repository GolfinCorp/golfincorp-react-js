import React from 'react';
import {
  ModalBody,
  Box,
  Text,
  Input,
  Button,
  ModalFooter,
  Flex
} from '@chakra-ui/react';
import useMembers from '@/hooks/useMembers';
import { Modal } from '@/components/atoms';
import { useForm } from 'react-hook-form';

const MemberModal = ({ isOpen, onClose }) => {
  const { register, handleSubmit } = useForm();
  const { createMember } = useMembers();
  const submitMember = async (member) => {
    event.preventDefault();
    const createRes = await createMember(member);
    if (createRes) {
      onClose();
    }
  };
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={'Agrega un miembro al club'}
      closeButton
    >
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
            <Text>Email</Text>
            <Input placeholder="golfer@golfinc.com" {...register('email')} />
          </Box>
          <Box my="5">
            <Text>Membresía</Text>
            <Input placeholder="55522" {...register('membership')} />
          </Box>
          <Flex justifyContent="end">
            <Button type="submit">Agregar</Button>
          </Flex>
        </form>
      </ModalBody>
      <ModalFooter />
    </Modal>
  );
};

export default MemberModal;
