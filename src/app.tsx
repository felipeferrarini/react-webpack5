import { ReverbUITheme, ThemeProvider } from '@reverb-ui/react';
import React from 'react';
import { UserList } from './components';
import { SearchProvider } from './contexts';

const App = () => {
  return (
    <ThemeProvider theme={ReverbUITheme} resetCSS>
      <SearchProvider>
        <UserList />
      </SearchProvider>
    </ThemeProvider>
  );
};

export default App;
