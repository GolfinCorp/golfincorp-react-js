import { useState, useEffect } from 'react';
import {
  Tr,
  Td,
  Badge,
  Button,
  Flex,
  Box,
  useDisclosure
} from '@chakra-ui/react';
import useMembers from '@/hooks/useMembers';
import Table from '@/components/organisms/Table';
import { Searchbar } from '@/components';
import { DateFlex, MemberModal } from '@/components/molecules';
import MembersTr from './MembersTr';
const TABLE_HEADERS = ['Nombre', 'Apellido', 'Membresía', 'Estado'];

const Members = () => {
  const [members, setMembers] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getMembers } = useMembers();

  useEffect(() => {
    (async () => {
      const membersResponse = await getMembers();
      setMembers(membersResponse);
    })();
  }, []);

  return (
    <>
      <DateFlex>
        <Flex
          gap="5"
          align="center"
          justify={{ base: 'space-between', md: 'none' }}
        >
          <Box>
            <Button onClick={onOpen}>Agregar miembro</Button>
          </Box>
          <Searchbar />
        </Flex>
      </DateFlex>
      <Table headers={TABLE_HEADERS}>
        {members &&
          members.map((member) => <MembersTr key={member._id} elm={member} />)}
      </Table>
      <MemberModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Members;
