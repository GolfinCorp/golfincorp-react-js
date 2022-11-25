import { useState, useEffect } from 'react';
import { Tr, Td, Badge } from '@chakra-ui/react';
import useMembers from '@/hooks/useMembers';
import Table from '@/components/organisms/Table';
import DateFlex from '@/components/molecules/Date/Date';
const TABLE_HEADERS = ['Nombre', 'Apellido', 'Membresía', 'Estado'];

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
    <>
      <DateFlex />
      <Table headers={TABLE_HEADERS}>
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
      </Table>
    </>
  );
};

export default Members;
