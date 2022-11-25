import React from 'react';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { MdSearch } from 'react-icons/md';

const Searchbar = ({ ...props }) => {
  return (
    <InputGroup {...props}>
      {/* eslint-disable-next-line react/no-children-prop */}
      <InputLeftElement color="brand.100" pointerEvents={'auto'}>
        <MdSearch color="inherit" />
      </InputLeftElement>
      <Input color="brand.dark" />
    </InputGroup>
  );
};

export default Searchbar;
