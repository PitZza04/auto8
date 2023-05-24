import AsyncStorage from '@react-native-async-storage/async-storage';
import supabaseClient from '../../utils/supabaseClient';

export const getCurrentUser = async () => {
  const currentUserString = await AsyncStorage.getItem('user');
  if (!currentUserString) {
    console.error('[getCurrentUser] No Current User');
    return null;
  }
  const currentUser = JSON.parse(currentUserString);
  if (!currentUser) {
    console.error('[getCurrentUser] JSON Parse Fail', currentUserString);
    return null;
  }
  return currentUser;
};
export const getCart = async id => {
  const {data, error} = await supabaseClient
    .from('cart')
    .select('id')
    .eq('user_id', id)
    .single();
  if (error) console.error('[getCart] no cart', error);

  return data;
};
export const getCartItems = async () => {
  const currentUser = await getCurrentUser();
  if (!currentUser) return null;
  const cartID = await getCart(currentUser.id);
  if (!cartID) {
    console.error('[getCartItems]', cartID);
  }

  const {data: cartItems, error} = await supabaseClient
    .from('cart_items')
    .select('id, services(*, services_category(*))')
    .eq('cart_id', cartID.id);

  return cartItems;
};

export async function getCartItemsById(cartID) {
  if (!cartID) return null;
  const {data, error} = await supabaseClient
    .from('cart_items')
    .select('*')
    .match({
      cart_id: cartID,
    });
  if (error) throw error;
  if (data) return data;
}
