import React from 'react';
import { ModalBody, ModalFooter } from '@chakra-ui/react';
import useMembers from '@/hooks/useMembers';
import { Modal } from '@/components/atoms';
import Form from '../Form/Form';
const MemberModal = ({ isOpen, onClose }) => {
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
        <Form submitMember={submitMember} />
      </ModalBody>
      <ModalFooter />
    </Modal>
  );
};

export default MemberModal;
