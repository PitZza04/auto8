import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import React from 'react';
import {useQuery} from '@tanstack/react-query';
import {getCartItems} from '../api/cart';

const CartScreen = () => {
  const {data, isLoading, error, refetch, isFetching} = useQuery({
    queryKey: ['cart_items'],
    queryFn: getCartItems,
  });

  if (isLoading && isFetching) return <ActivityIndicator />;
  return (
    <View>
      <Text>{JSON.stringify(data, null, 2)}</Text>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
