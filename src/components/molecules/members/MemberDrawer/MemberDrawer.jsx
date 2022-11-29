import { useState } from 'react';
import {
  DrawerBody,
  DrawerFooter,
  Button,
  Box,
  Divider,
  Text,
  Flex
} from '@chakra-ui/react';
import { useMembers } from '@/hooks';
import Form from '../Form/Form';
import UpdatePassword from '../UpdatePassword';
const MemberForm = ({ onClose, id }) => {
  const { updateMember, deleteMember } = useMembers();
  const [isDeleting, setIsDeleting] = useState(false);

  // Event handlers
  const handleSubmit = async (member) => {
    event.preventDefault();
    const updateResponse = await updateMember(member, id);
    if (!updateResponse) return;
    onClose();
  };

  const handleDelete = async () => {
    const deleteResponse = await deleteMember(id);
    if (!deleteResponse) return;
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
        {isDeleting ? (
          <Flex flexDir="column" gap="2">
            <Text>Esta seguro que desea borrar este miembro?</Text>
            <Button variant="danger-outlined" mr={3} onClick={handleDelete}>
              Eliminar
            </Button>
          </Flex>
        ) : (
          <Button
            variant="danger"
            mr={3}
            onClick={() => setIsDeleting((prev) => !prev)}
          >
            Eliminar
          </Button>
        )}
      </DrawerFooter>
    </>
  );
};

export default MemberForm;
