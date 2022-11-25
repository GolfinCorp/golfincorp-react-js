import { useState, useEffect } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Badge
} from '@chakra-ui/react';
import useMembers from '@/hooks/useMembers';

const Members = () => {
  const [members, setMembers] = useState(null);
  const { getMembers } = useMembers();

  useEffect(() => {
    (async () => {
      const membersResponse = await getMembers();
      setMembers(membersResponse);
    })();
  }, []);

  return (
    <TableContainer background="#f9f9f9" borderRadius="md">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Nombre</Th>
            <Th>Apellido</Th>
            <Th>Membresía</Th>
            <Th>Estado</Th>
          </Tr>
        </Thead>
        <Tbody>
          {members &&
            members.map((elm) => (
              <Tr key={elm._id}>
                <Td>{elm.firstName}</Td>
                <Td>{elm.lastname}</Td>
                <Td>N°{elm.membership}</Td>
                <Td>
                  <Badge color="green" borderRadius={6} p={2}>
                    {elm.status}
                  </Badge>
                </Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default Members;
