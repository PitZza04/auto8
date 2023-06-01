import {
  StyleSheet,
  Text,
  ScrollView,
  ActivityIndicator,
  Button,
  View,
  FlatList,
} from 'react-native';
import React from 'react';
import {useQuery} from '@tanstack/react-query';
import {getServicesByCategory, getServices} from '../api/services';
import ServicesCard from '../components/ServicesCard';
import {shallow} from 'zustand/shallow';
import {useStore} from '../store';
import {getCartItems} from '../api/cart';
import {getUnsyncBills, getUnsyncCart} from '../utils/getUnsyncCart';

const ServicesScreen = () => {
  const {data, isLoading, error, refetch, isFetching} = useQuery({
    queryKey: ['services'],
    queryFn: getServices,
  });

  const cart = useStore(state => state.cart, shallow);
  const clearCart = useStore(state => state.clearCart);

  console.log('cart', JSON.stringify(cart, null, 2));
  const renderItem = ({item}) => {
    return (
      <ServicesCard
        service={item}
        isInCart={
          typeof cart.find(c => c.service.id === item.id) !== 'undefined'
        }
      />
    );
  };

  const handleUnsync = cart => {
    const unsync = getUnsyncCart(cart);
    console.log(unsync);
  };

  if (isLoading) return <ActivityIndicator />;
  return (
    <View style={styles.container}>
      <View>
        <Text>SERVICES</Text>
        {cart?.map((item, index) => (
          <View key={item?.service.id + index}>
            {/* <Text>{JSON.stringify(item, null, 2)}</Text> */}
          </View>
        ))}
        <Button onPress={clearCart} title="reset" />
        <Button onPress={() => handleUnsync(cart)} title="Unsync" />
      </View>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default ServicesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
