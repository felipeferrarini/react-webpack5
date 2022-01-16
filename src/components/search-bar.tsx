import { Search } from '@reverb-ui/icons-react';
import { HStack, IconButton, Input } from '@reverb-ui/react';
import React, { useState } from 'react';
import { useSearch } from '../hooks';

export const SearchBar = (): JSX.Element => {
  const [search, setSearch] = useState('');
  const { handleSearchUsers } = useSearch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value);
  };

  return (
    <HStack w="100%">
      <Input
        placeholder="Type your search here"
        onChange={handleInputChange}
        variant="filled"
      />
      <IconButton
        aria-label="Search button"
        icon={<Search />}
        onClick={() => handleSearchUsers(search)}
      />
    </HStack>
  );
};
