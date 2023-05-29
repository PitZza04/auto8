import AsyncStorage from '@react-native-async-storage/async-storage';
import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';

import {createAuthSlice} from './authSlice';
import {createCartSlice} from './cartSlice';

export const useStore = create(
  persist(
    (set, get) => ({
      ...createAuthSlice(set, get),
      ...createCartSlice(set, get),
    }),
    {
      name: 'automate-auth',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
