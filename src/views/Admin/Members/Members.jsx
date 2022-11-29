import { useState, useEffect } from 'react';
import { Button, Flex, Box, useDisclosure } from '@chakra-ui/react';
import useMembers from '@/hooks/useMembers';
import { Table } from '@/components/organisms';
import { Searchbar } from '@/components';
import { DateFlex, MemberModal } from '@/components/molecules';
import MemberList from './components/MemberList';

// Constante
const TABLE_HEADERS = ['Nombre', 'Apellido', 'Membresía', 'Estado'];

const Members = () => {
  // variables, estados y hooks
  const [searchMembers, setSearchMembers] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getMembers, members } = useMembers();

  // Event handlers
  const handleSearch = () => {
    const searchedResults = members.filter(
      (member) =>
        member.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.lastname.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchMembers(searchedResults);
  };

  // Resets search term
  const reset = () => {
    setSearchTerm('');
  };

  const handleSearchTerm = (e) => {
    setSearchTerm(e.target.value);
    handleSearch();
  };

  // Secondary Effects
  useEffect(() => {
    if (members) return;
    getMembers();
  }, [members]);

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
        {members && (
          <MemberList
            searchMembers={searchMembers}
            searchTerm={searchTerm}
            members={members}
          />
        )}
      </Table>
      <MemberModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Members;
