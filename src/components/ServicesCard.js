import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useStore} from '../store';
import {shallow} from 'zustand/shallow';
import {checkIfCartExist, newCart} from '../api/cart';
import supabaseClient from '../utils/supabaseClient';
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
  const [toggle, setToggle] = useState(false);
  const [cartBasket, setCartBasket] = useState(null);
  const navigation = useNavigation();
  const addCartItem = useStore(state => state.addCartItem);
  const carts = useStore(state => state.carts, shallow);
  const removeCartItem = useStore(state => state.removeCartItem);
  const toggleShow = useCallback(() => {
    setToggle(!toggle);
  }, [toggle, setToggle]);

  const onAddToCartPress = async service => {
    const cartEmpty = carts.length > 0;

    // let theCartBasket = cartBasket || (await newCart(service.shop_branch_id));
    // if (!theCartBasket) {

    // }
  };
  // const onAddToCartPress = useCallback(
  //   async item => {
  //     const cartExist = carts.findIndex(
  //       cart => cart.cartID === item.shop_branch_id,
  //     );
  //     if (cartExist === -1) {
  //       const cart_id = await newCart(item.shop_branch_id);
  //       console.log('new cart is added', cart_id);
  //     }
  //     if (carts.find(cartItems => cartItems.id === item.id)) {
  //       removeCartItem(item.id);
  //     } else {
  //       addCartItem(item);
  //     }
  //   },
  //   [carts, addCartItem, removeCartItem],
  // );
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
