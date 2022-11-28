import React from 'react';
import { Tr, Td, Badge, Text, Box } from '@chakra-ui/react';

const MembersTr = ({ member }) => {
  return (
    <Tr>
      <Td>{member.firstName}</Td>
      <Td>{member.lastname}</Td>
      <Td>N°{member.membership}</Td>
      <Td>
        <Badge variant="success">{member.status}</Badge>
      </Td>
    </Tr>
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
