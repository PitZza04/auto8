import AsyncStorage from '@react-native-async-storage/async-storage';
import supabaseClient from '../../utils/supabaseClient';
import {getCurrentUser} from '../auth';

export const getCart = async () => {
  const {user: id} = await getCurrentUser();
  if (!id) return null;
  const {data, error} = await supabaseClient
    .from('cart')
    .select('id')
    .eq('user_id', id)
    .single();
  if (error) console.error('[getCart] no cart', error);

  return data;
};

export const newCart = async shop_branch_id => {
  const {user} = await getCurrentUser();
  if (!user && !shop_branch_id) return null;
  const cartExist = await checkIfCartExist(shop_branch_id);
  if (cartExist) {
    console.log('EXist na yan bro', cartExist);
    return cartExist.id;
  }
  const cartData = {
    user_id: user.id,
    shop_branch_id,
  };
  const {data, error} = await supabaseClient.from('cart').insert(cartData);
  if (error) {
    console.error('[newCart]', error);
    return null;
  }
  return data && data.length > 0 ? data[0].id : null;
};

export const checkIfCartExist = async shop_branch_id => {
  const {user} = await getCurrentUser();

  if (!user.id && !shop_branch_id) return null;
  const {data, error} = await supabaseClient.from('cart').select('*').match({
    user_id: user.id,
    shop_branch_id,
  });
  if (error) {
    console.error('[checkIfCartExist]', error);
    return null;
  }
  return data && data.length > 0 ? data[0] : null;
};

export const getCartItems = async () => {
  const cartID = await getCart();
  if (!cartID) {
    console.error('[getCartItems]', cartID);
  }

  const {data: cartItems} = await supabaseClient
    .from('cart_items')
    .select('id, services(*, services_category(*))')
    .eq('cart_id', cartID.id);
  return cartItems;
};
// export const newCartItems = async services_id => {
//   const {user} = await getCurrentUser();
//   if (!services_id && !user.id) return null;

//   const {data, error} = await supabaseClient
//     .from('cart_items')
//     .select('*')
//     .match({
//       cart_id:
//     })

// };
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
