import supabaseClient from '../../utils/supabaseClient';

export const login = async (email, password) => {
  const {data, error} = await supabaseClient.auth.signInWithPassword({
    email,
    password,
  });

  if (error) return Promise.reject(error);

  return Promise.resolve(data);
};

export const register = async (mobileNum, password) => {
  const {data, error} = await supabaseClient.auth.signUp({
    phone: mobileNum,
    password,
  });
  if (error) return Promise.reject(error);
  return Promise.resolve(data);
};

export const logout = async () => {
  const {error} = await supabaseClient.auth.signOut();
  if (error) return Promise.reject(error);
  return Promise.resolve();
};
