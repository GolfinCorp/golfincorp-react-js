import { useRef } from 'react';
import { Tr, Td, Badge, Text, Box, useDisclosure } from '@chakra-ui/react';
import { Drawer } from '@/components';
import { MemberDrawer } from '@/components/molecules';
const MembersTr = ({ member }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const { firstName, lastname, membership, status } = member;
  const drawerTitle = `Modificar ${firstName} ${lastname} / M${membership}`;
  return (
    <>
      <Tr ref={btnRef} onClick={onOpen}>
        <Td>{firstName}</Td>
        <Td>{lastname}</Td>
        <Td>N°{membership}</Td>
        <Td>
          <Badge variant="success">{status}</Badge>
        </Td>
      </Tr>
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement="right"
        closeButton={true}
        title={drawerTitle}
      >
        <MemberDrawer onClose={onClose} id={member._id} />
      </Drawer>
    </>
  );
};

const MemberList = ({ searchTerm, searchMembers, members }) => {
  const createMemberTr = (member) => {
    return <MembersTr key={member._id} member={member} />;
  };

  return (
    <>
      {searchTerm !== '' && searchMembers && searchMembers.length <= 0 ? (
        // If there is no search results
        <Box p="5">
          <Text>No hay resultados 😢</Text>
        </Box>
      ) : searchTerm !== '' && searchMembers && searchMembers.length > 0 ? (
        searchMembers.map((member) => createMemberTr(member))
      ) : (
        // If there is no search term return all members
        members.map((member) => createMemberTr(member))
      )}
    </>
  );
};

export default MemberList;
