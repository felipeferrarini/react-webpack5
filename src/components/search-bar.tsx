import { Search } from '@reverb-ui/icons-react';
import { HStack, IconButton, Input, useColorModeValue } from '@reverb-ui/react';
import React, { useState } from 'react';
import { useSearch } from '../hooks';

export const SearchBar = (): JSX.Element => {
  const [search, setSearch] = useState('');
  const { handleSearchUsers } = useSearch();

  const bgColor = useColorModeValue('gray.100', 'gray.700');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearchUsers(search);
    }
  };

  return (
    <HStack w="100%" bgColor={bgColor} p="6" borderRadius="lg">
      <Input
        placeholder="Type your search here"
        onChange={handleInputChange}
        variant="filled"
        colorScheme="blue"
        onKeyPress={onKeyPress}
      />
      <IconButton
        aria-label="Search button"
        icon={<Search />}
        onClick={() => handleSearchUsers(search)}
        colorScheme="blue"
      />
    </HStack>
  );
};
