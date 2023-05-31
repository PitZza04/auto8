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

const ServicesScreen = () => {
  const {data, isLoading, error, refetch, isFetching} = useQuery({
    queryKey: ['services'],
    queryFn: getServices,
  });

  // const {data: cartData} = useQuery({
  //   queryKey: ['cartItems'],
  //   queryFn: getCartItems,
  // });
  const cartService = useStore(state => state.cartService, shallow);
  const resetAllCartService = useStore(state => state.resetAllCartService);

  // console.log(JSON.stringify(cartService, null, 2));
  const renderItem = ({item}) => {
    return (
      <ServicesCard
        service={item}
        isInCart={
          typeof cartService.map(cart =>
            cart.services.find(service => service.id === item.id),
          ) !== 'undefined'
        }
      />
    );
  };

  if (isLoading) return <ActivityIndicator />;
  return (
    <View style={styles.container}>
      <View>
        <Text>SERVICES</Text>
        {cartService?.map((item, index) => (
          <View key={item?.cart + index}>
            {/* <Text>{JSON.stringify(item, null, 2)}</Text> */}
          </View>
        ))}
        <Button onPress={resetAllCartService} title="reset" />
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
