import axios from 'axios';
import React, { createContext, useCallback, useState } from 'react';

export interface IUserSearchResult {
  login: string;
  score: number;
  html_url: string;
  url: string;
  avatar_url: string;
  node_id: string;
}

export interface IGitSearchData {
  total_count: number;
  items: IUserSearchResult[];
}

interface ISearchContext {
  loading: boolean;
  results: IUserSearchResult[];
  handleSearchUsers: (search: string) => Promise<void>;
}

export const SearchContext = createContext<ISearchContext>({
  loading: false,
  results: [],
  handleSearchUsers: () => Promise.resolve(),
});

export const SearchProvider: React.FC = ({ children }): JSX.Element => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<IUserSearchResult[]>([]);

  const handleSearchUsers = useCallback(async (search: string) => {
    if (search.length > 0) {
      setLoading(true);
      try {
        const { data } = await axios.get<IGitSearchData>(
          `https://api.github.com/search/users?q=${search}&per_page=10`,
        );

        setResults(data.items);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    }
  }, []);

  return (
    <SearchContext.Provider
      value={{
        loading,
        results,
        handleSearchUsers,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
