import supabaseClient from '../../utils/supabaseClient';

export const getCategories = async () => {
  const {data, error} = await supabaseClient
    .from('services_category')
    .select('*');

  if (error) console.error('[getCategories]', error);

  return data;
};

export const getServicesByCategory = async category_id => {
  const {data, error} = await supabaseClient
    .from('services')
    .select('*, services_options_link(services_options(*))')
    .eq('services_category_id', category_id)
    .order('price', {ascending: true});
  if (error) console.error('[getServicesByCategory]', error);

  return data;
};

export const getServices = async ctx => {
  console.log('from services', ctx.queryKey);
  const {data, error} = await supabaseClient
    .from('services')
    .select('*, services_options_link(services_options(*))');

  if (error) console.error('[getServices]', error);

  return data;
};
