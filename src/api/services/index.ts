import supabaseClient from '../../utils/supabaseClient';

export const getServices = async () => {
  const {data, error} = await supabaseClient
    .from('services_category')
    .select('*');

  if (error) console.error('[getServices]', error);

  return data;
};
