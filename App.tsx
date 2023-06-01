import React, {useState, useEffect, useCallback} from 'react';

import {SafeAreaProvider} from 'react-native-safe-area-context';

import {PersistQueryClientProvider} from '@tanstack/react-query-persist-client';
import {queryClient} from './src/utils/queryClient';
import {asyncStoragePersistor} from './src/utils/queryClient';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import RootNavigation from './src/navigation';
function App(): JSX.Element {
  // const [value, setValue] = useState('value');
  // const {getItem, setItem} = useAsyncStorage('automate-auth');

  // const readItemFromStorage = useCallback(async () => {
  //   const item = await getItem();
  //   setValue(item);
  // }, []);

  // useEffect(() => {
  //   readItemFromStorage();
  // }, [readItemFromStorage]);

  // console.log('async', value);
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
