import { useState, useEffect } from 'react';
import { Button, Flex, Box, useDisclosure, Tr, Text } from '@chakra-ui/react';
import useMembers from '@/hooks/useMembers';
import Table from '@/components/organisms/Table';
import { Searchbar } from '@/components';
import { DateFlex, MemberModal } from '@/components/molecules';
import MembersTr from './MembersTr';
const TABLE_HEADERS = ['Nombre', 'Apellido', 'Membresía', 'Estado'];

const Members = () => {
  const [members, setMembers] = useState(null);
  const [searchMembers, setSearchMembers] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getMembers } = useMembers();

  const handleSearch = () => {
    const searchedResults = members.filter(
      (member) =>
        member.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.lastname.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log(searchedResults);
    setSearchMembers(searchedResults);
    return searchedResults;
  };

  const reset = () => {
    setSearchTerm('');
  };

  const handleSearchTerm = (e) => {
    setSearchTerm(event.target.value);
    handleSearch();
  };

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
          <Searchbar
            searchFunc={handleSearchTerm}
            searchTerm={searchTerm}
            reset={reset}
          />
        </Flex>
      </DateFlex>
      <Table headers={TABLE_HEADERS}>
        {searchTerm !== '' && searchMembers && searchMembers.length <= 0 ? (
          <Text>No hay resultados ":("</Text>
        ) : searchTerm !== '' && searchMembers && searchMembers.length > 0 ? (
          searchMembers.map((member) => (
            <MembersTr key={member._id} elm={member} />
          ))
        ) : (
          members &&
          members.map((member) => <MembersTr key={member._id} elm={member} />)
        )}
      </Table>
      <MemberModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Members;
