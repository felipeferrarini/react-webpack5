import {
  Box,
  Flex,
  Image,
  Link,
  Text,
  useColorModeValue,
  VStack,
} from '@reverb-ui/react';
import React from 'react';
import { IUserSearchResult } from '../contexts';

interface IUserItem {
  user: IUserSearchResult;
}

export const UserItem = ({ user }: IUserItem): JSX.Element => {
  const bgColor = useColorModeValue('gray.100', 'gray.700');

  return (
    <Box
      w="100%"
      h="40"
      bgColor={bgColor}
      borderRadius="lg"
      boxShadow="md"
      transition="box-shadow 0.2s"
      _hover={{
        boxShadow: 'lg',
      }}
    >
      <Flex direction="row" alignItems="center" pr="16">
        <Image
          src={user.avatar_url}
          alt={user.login}
          boxSize="40"
          objectFit="cover"
          borderLeftRadius="lg"
        />
        <VStack align="start" ml="4">
          <Text>
            User name: <span>{user.login}</span>
          </Text>
          <Link href={user.html_url} isExternal>
            {user.html_url}
          </Link>
        </VStack>
        <VStack ml="auto">
          <Text>Score</Text>
          <Text>{user.score}</Text>
        </VStack>
      </Flex>
    </Box>
  );
};
