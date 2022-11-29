import {
  DrawerBody,
  DrawerFooter,
  Button,
  Box,
  Divider
} from '@chakra-ui/react';
import Form from '../Form/Form';
import UpdatePassword from '../UpdatePassword';
const MemberForm = ({ onClose }) => {
  return (
    <>
      <DrawerBody>
        <Form btnContent="Actualizar" />
        <Divider my="5" />
        <Box>
          <UpdatePassword />
        </Box>
      </DrawerBody>

      <DrawerFooter>
        <Button variant="danger" mr={3} onClick={onClose}>
          Eliminar
        </Button>
      </DrawerFooter>
    </>
  );
};

export default MemberForm;
