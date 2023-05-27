import supabaseClient from '../../utils/supabaseClient';

export async function getProvince() {
  const {data, error} = await supabaseClient.from('province').select('*');
  if (error) throw error;
  if (data) return data;
}

export async function getCity(id) {
  const {data, error} = await supabaseClient.from('city').select('*').match({
    province_id: id,
  });
  if (error) throw error;
  if (data) return data;
}

export async function getBarangay(id) {
  const {data, error} = await supabaseClient
    .from('barangay')
    .select('*')
    .match({
      city_id: id,
    });
  if (error) throw error;
  if (data) return data;
}

export async function getAddress(user_id) {
  const {data, error} = await supabaseClient
    .from('address')
    .select(
      'id, street_address, province(province_name), city(city_name),  barangay(barangay_name) ',
    )
    .match({user_id});

  if (error) throw error;
  if (data) return data;
}
