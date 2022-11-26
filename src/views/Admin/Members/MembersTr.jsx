import React from 'react';
import { Tr, Td, Badge } from '@chakra-ui/react';
const MembersTr = ({ elm }) => {
  return (
    <Tr>
      <Td>{elm.firstName}</Td>
      <Td>{elm.lastname}</Td>
      <Td>N°{elm.membership}</Td>
      <Td>
        <Badge variant="success">{elm.status}</Badge>
      </Td>
    </Tr>
  );
};

export default MembersTr;
