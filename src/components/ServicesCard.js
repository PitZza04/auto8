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
  // console.log('isIncart', isInCart);
  const [toggle, setToggle] = useState(false);
  const [cartBasket, setCartBasket] = useState(null);
  const navigation = useNavigation();
  const addItemToCart = useStore(state => state.addItemToCart);
  const carts = useStore(state => state.cartService, shallow);
  const createCart = useStore(state => state.createCart);
  const removeItemFromCart = useStore(state => state.removeItemFromCart);

  const toggleShow = useCallback(() => {
    setToggle(!toggle);
  }, [toggle, setToggle]);

  // console.log('zusnta', JSON.stringify(carts, null, 2));
  const onAddToCartPress = async service => {
    const cartIndex = carts.findIndex(cart =>
      cart?.services?.findIndex(
        item => item?.shop_branch_id === service?.shop_branch_id,
      ),
    );
    console.log(cartIndex);
    console.log(JSON.stringify(carts, null, 2));
    let cart_id = carts[cartIndex]?.cart;
    if (cartIndex === -1) {
      console.log('cartIndex', cartIndex);
      cart_id = await newCart(service.shop_branch_id);
      if (!cart_id) return;
      createCart(cart_id);
    }
    if (carts[cartIndex]?.services.find(cart => cart.id === service.id)) {
      removeItemFromCart(cart_id, service);
    } else {
      console.log('first run');
      addItemToCart(cart_id, service);
    }
  };
  // const onAddToCartPress = useCallback(
  //   async item => {
  // const cartExist = carts.findIndex(
  //   cart => cart.cartID === item.shop_branch_id,
  // );
  // if (cartExist === -1) {
  //   const cart_id = await newCart(item.shop_branch_id);
  //   console.log('new cart is added', cart_id);
  // }
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
        title={isInCart ? 'Add' : 'Remove'}
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
