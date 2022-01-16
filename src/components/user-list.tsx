import {
  Center,
  CircularProgress,
  Heading,
  Text,
  VStack,
} from '@reverb-ui/react';
import React from 'react';
import { useSearch } from '../hooks';
import { SearchBar } from './search-bar';
import { UserItem } from './user-item';

export const UserList = (): JSX.Element => {
  const { results, loading } = useSearch();

  console.log(results);
  return (
    <Center p={6}>
      <VStack spacing={6} w="100%" maxW="container.xl">
        <Heading>Github Explorer</Heading>

        <SearchBar />

        {loading && <CircularProgress isIndeterminate color="green.300" />}

        {!loading && results.length === 0 && <Text>No results</Text>}

        {!loading && (
          <VStack w="100%" spacing="4">
            {results.map(user => (
              <UserItem user={user} />
            ))}
          </VStack>
        )}
      </VStack>
    </Center>
  );
};
