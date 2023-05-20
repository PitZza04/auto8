import supabaseClient from '../../utils/supabaseClient';

export async function getBrand() {
  const {data, error} = await supabaseClient.from('brand').select('*');
  if (error) throw error;
  if (data) return data;
}
export async function getBrandById(brandId) {
  if (!brandId) return null;
  const {data, error} = await supabaseClient
    .from('brand')
    .select('*')
    .eq('id', brandId)
    .single();

  if (error) throw error;
  if (data) return data;
}

export async function getModelByBrandId(brandId) {
  if (!brandId) return null;
  const {data, error} = await supabaseClient
    .from('model')
    .select('*')
    .eq('brand_id', brandId);
  if (error) throw error;
  if (data) return data;
}
export async function getModelById(modelId) {
  if (!modelId) return null;
  const {data, error} = await supabaseClient
    .from('model')
    .select('*')
    .eq('id', modelId)
    .single();
  if (error) throw error;
  if (data) return data;
}

export async function getVehicle(user_id) {
  if (!user_id) return null;
  const {data, error} = await supabaseClient
    .from('vehicle')
    .select('*')
    .match({user_id});

  if (error) throw error;
  if (data) return data;
}
