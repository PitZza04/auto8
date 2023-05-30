import supabaseClient from '../../utils/supabaseClient';

export const login = async (email, password) => {
  const {error} = await supabaseClient.auth.signInWithPassword({
    email,
    password,
  });

  if (error) return Promise.reject(error);

  return Promise.resolve();
};

export const register = async (mobileNum, password) => {
  const {data, error} = await supabaseClient.auth.signUp({
    phone: mobileNum,
    password,
  });
  if (error) return Promise.reject(error);
  return Promise.resolve(data);
};

export const getCurrentUser = async () => {
  const {
    data: {session},
  } = await supabaseClient.auth.getSession();
  if (session) return session;
};
export const logout = async () => {
  const {error} = await supabaseClient.auth.signOut();
  if (error) return Promise.reject(error);
  return Promise.resolve();
};
