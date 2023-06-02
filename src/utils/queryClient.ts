import {QueryClient} from '@tanstack/react-query';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// import {createAsyncStoragePersister} from '@tanstack/query-async-storage-persister';
// export const asyncStoragePersistor = createAsyncStoragePersister({
//   storage: AsyncStorage,
// });

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      staleTime: Infinity,
      // cacheTime: 1000 * 60 * 60 * 12, // 24 hours
    },
  },
});
