import { DrawerBody, DrawerFooter, Box, Divider } from '@chakra-ui/react';
import { useMembers } from '@/hooks';
import Form from '../Form/Form';
import UpdatePassword from '../UpdatePassword';
import DeleteMember from '../MemberDelete/DeleteMember';
const MemberForm = ({ onClose, id }) => {
  const { updateMember } = useMembers();
  // Event handlers
  const handleSubmit = async (member) => {
    event.preventDefault();
    const updateResponse = await updateMember(member, id);
    if (!updateResponse) return;
    onClose();
  };

  return (
    <>
      <DrawerBody>
        <Form btnContent="Actualizar" submitMember={handleSubmit} />
        <Divider my="5" />
        <Box>
          <UpdatePassword />
        </Box>
      </DrawerBody>
      <DrawerFooter>
        <DeleteMember onClose={onClose} id={id} />
      </DrawerFooter>
    </>
  );
};

export default MemberForm;
