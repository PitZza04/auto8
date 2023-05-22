import supabaseClient from '../../utils/supabaseClient';
export async function fetchEmergencyType() {
  const {data, error} = await supabaseClient.from('emergency_type').select('*');

  if (error) throw error;
  if (data) return data;
}
