import AsyncStorage from '@react-native-async-storage/async-storage';
import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';

import {createAuthSlice} from './authSlice';

export const useStore = create(
  persist(
    (set, get, api) => ({
      ...createAuthSlice(set, get, api),
    }),
    {
      name: 'automate-auth',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
