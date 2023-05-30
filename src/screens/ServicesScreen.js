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

  const {data: cartData} = useQuery({
    queryKey: ['cartItems'],
    queryFn: getCartItems,
  });
  const carts = useStore(state => state.carts, shallow);
  const resetAllCartItems = useStore(state => state.resetAllCartItems);

  const renderItem = ({item}) => {
    return (
      <ServicesCard
        service={item}
        isInCart={
          typeof carts.find(cart => cart.id === item.id) !== 'undefined'
        }
      />
    );
  };

  if (isLoading) return <ActivityIndicator />;
  return (
    <View style={styles.container}>
      <View>
        <Text>SERVICES</Text>
        {carts?.map((item, index) => (
          <View key={item.id + index}>
            <Text>{item.services_name}</Text>
          </View>
        ))}
        <Button onPress={resetAllCartItems} title="reset" />
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
