import supabaseClient from '../utils/supabaseClient';

export const createAuthSlice = set => ({
  isLoggedIn: false,
  session: null,
  setSession: session => set({session}),
  signIn: async (email, password) => {
    if (!email) return Promise.reject('Email is required');
    if (!password) return Promise.reject('Password is required');

    const {data, error} = await supabaseClient.auth.signInWithPassword({
      email,
      password,
    });
    if (error) return Promise.reject(error);

    set({isLoggedIn: true, session: data.session});
    return Promise.resolve();
  },
  register: async (email, password) => {
    if (!email) return Promise.reject('Email is required');
    if (!password) return Promise.reject('Password is required');

    const {data, error} = await supabaseClient.auth.signUp({
      email,
      password,
    });
    if (error) return Promise.reject(error);

    set({isLoggedIn: true, session: data.session});
    return Promise.resolve(data.user);
  },
  logout: async () => {
    console.log('logout');
    const {error} = await supabaseClient.auth.signOut();
    if (error) return Promise.reject(error);
    set({isLoggedIn: false, session: null});
    return Promise.resolve();
  },
});
