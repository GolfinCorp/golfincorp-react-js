import { useState } from 'react';
import { Flex, Text, Button } from '@chakra-ui/react';
import { useMembers } from '@/hooks';

const DeleteMember = ({ onClose, id }) => {
  const { deleteMember } = useMembers();
  const [isDeleting, setIsDeleting] = useState(false);
  console.log(id);
  const handleDelete = async () => {
    const deleteResponse = await deleteMember(id);
    if (!deleteResponse) return;
    onClose();
  };
  return (
    <>
      {isDeleting ? (
        <Flex flexDir="column" gap="2">
          <Text>Esta seguro que desea borrar este miembro?</Text>
          <Flex justify="space-between">
            <Button
              variant="ghost"
              mr={3}
              onClick={() => setIsDeleting((prev) => !prev)}
            >
              Cancelar
            </Button>
            <Button variant="danger-outlined" mr={3} onClick={handleDelete}>
              Eliminar
            </Button>
          </Flex>
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
    </>
  );
};

export default DeleteMember;
