import React from 'react';

import {SafeAreaProvider} from 'react-native-safe-area-context';

// import {PersistQueryClientProvider} from '@tanstack/react-query-persist-client';
// import {asyncStoragePersistor} from './src/utils/queryClient';
/* <PersistQueryClientProvider
        client={queryClient}
        persistOptions={{persister: asyncStoragePersistor}}>
        <RootNavigation />
      </PersistQueryClientProvider> */

import {QueryClientProvider} from '@tanstack/react-query';
import {queryClient} from './src/utils/queryClient';

import RootNavigation from './src/navigation';
function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <RootNavigation />
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}

export default App;
