import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useStore} from '../store';
import {shallow} from 'zustand/shallow';
import {checkIfCartExist, newCart} from '../api/cart';
import supabaseClient from '../utils/supabaseClient';
import 'react-native-get-random-values';
import {v4} from 'uuid';
const ServiceOptions = ({options}) => {
  return (
    <>
      {options?.map((item, index) => (
        <View key={index}>
          <Button
            onPress={() => {
              console.log(item.services_options.id);
            }}
            title="add"
          />
          <Text>{item?.services_options.name}</Text>
        </View>
      ))}
    </>
  );
};

const ServicesCard = ({service, isInCart}) => {
  const {services_options_link} = service;
  // console.log('isIncart', isInCart);
  const [toggle, setToggle] = useState(false);

  const cart = useStore(state => state.cart, shallow);
  const addService = useStore(state => state.addService);
  const removeService = useStore(state => state.removeService);
  const toggleShow = useCallback(() => {
    setToggle(!toggle);
  }, [toggle, setToggle]);
  let cartID;
  const onAddToCartPress = async item => {
    let tempID = v4();

    const cartIndex = cart.findIndex(
      c => c.service.shop_branch_id === item.shop_branch_id,
    );

    // create a new cart if no no
    console.log('cartIndex', cartIndex);
    if (cartIndex === -1) {
      console.log('first time');
      cartID = await newCart(item.shop_branch_id);
      console.log('CARTID', cartID);
    } else {
      cartID = cart[cartIndex]?.cartID;
    }

    if (cart?.find(c => c.service.id === item.id)) {
      removeService(item.id);
    } else {
      addService(item, cartID, tempID);
    }
  };
  return (
    <View style={styles.container}>
      <Text>{service.services_name}</Text>
      <Button onPress={toggleShow} title="Toggle" />
      {toggle ? (
        <ServiceOptions options={services_options_link} />
      ) : (
        <Text>Nothing Happened</Text>
      )}
      <Button
        // onPress={() => {
        //   navigation.navigate('Appointment', {service: service});
        // }}
        onPress={() => onAddToCartPress(service)}
        title={isInCart ? 'Remove' : 'Add'}
      />
    </View>
  );
};

export default ServicesCard;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',

    width: '100%',
    borderWidth: 1,
    borderColor: 'red',
  },
});

// const onAddToCartPress = async service => {
//   const cartIndex = carts.findIndex(cart =>
//     cart?.services?.findIndex(
//       item => item?.shop_branch_id === service?.shop_branch_id,
//     ),
//   );
//   console.log(cartIndex);
//   console.log(JSON.stringify(carts, null, 2));
//   let cart_id = carts[cartIndex]?.cart;
//   if (cartIndex === -1) {
//     console.log('cartIndex', cartIndex);
//     cart_id = await newCart(service.shop_branch_id);
//     if (!cart_id) return;
//     createCart(cart_id);
//   }
//   if (carts[cartIndex]?.services.find(cart => cart.id === service.id)) {
//     removeItemFromCart(cart_id, service);
//   } else {
//     console.log('first run');
//     addItemToCart(cart_id, service);
//   }
// };
