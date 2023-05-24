import supabaseClient from '../../utils/supabaseClient';

export const getAppointment = async () => {
  const {data, error} = await supabaseClient.from('appointment').select('*');

  if (error) console.error('[getAppointment]', error);

  return data;
};

export const newAppointment = async ({user_id, services_id}) => {
  try {
    const {data, error} = await supabaseClient
      .from('appointment')
      .insert({user_id, services_id});
    if (error) {
      console.error('[newAppointment]', error);
    }

    return data && data.length > 0 ? data[0] : null;
  } catch (err) {
    console.error('[newAppointment]', err);
    return null;
  }
};

export const deleteAppointment = async ({appointment_id, user_id}) => {
  try {
    const {data, error} = await supabaseClient
      .from('appointment')
      .delete()
      .match({appointment_id, user_id});
    if (error) {
      console.error('[deleteAppointment]', error);
      return false;
    }
    if (!data) return false;
    return false;
  } catch (err) {
    console.error('[deleteAppointment]', err);
    return false;
  }
};
