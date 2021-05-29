import React from 'react';
import Heading from 'app/components/Heading';
import AppThemeProvider from 'app/components/providers/AppThemeProvider';

const App: React.FunctionComponent = () => {
  return (
    <AppThemeProvider>
      <Heading level="1">Duplica Web</Heading>
    </AppThemeProvider>
  );
};

export default App;
