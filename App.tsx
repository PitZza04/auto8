import React from 'react';

import {SafeAreaProvider} from 'react-native-safe-area-context';

import {PersistQueryClientProvider} from '@tanstack/react-query-persist-client';
import {queryClient} from './src/utils/queryClient';
import {asyncStoragePersistor} from './src/utils/queryClient';
import 'react-native-url-polyfill/auto';
import RootNavigation from './src/navigation';
function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <PersistQueryClientProvider
        client={queryClient}
        persistOptions={{persister: asyncStoragePersistor}}>
        <RootNavigation />
      </PersistQueryClientProvider>
    </SafeAreaProvider>
  );
}

export default App;
