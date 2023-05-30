import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useStore} from '../store';
import {getAddress} from '../api/address';
import {useQuery} from '@tanstack/react-query';
import {getPriceText} from '../utils/get-price-text';

const Summary = ({service}) => {
  const session = useStore(state => state.session);
  const userId = session?.user?.id;

  const {services_name, price} = service;
  console.log(userId);
  const {data, error, refetch, isFetching} = useQuery({
    queryKey: ['address', userId],
    queryFn: () => getAddress(userId),
  });
  //console.log('address', data);
  // const {id, barangay, city, province} = data;
  // const renderAddress = () => {
  //   const address = `Brgy. ${barangay?.barangay_name}, ${city?.city_name}, ${province?.province_name} `;
  //   return address;
  // };
  //console.log('data summary', data);
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Order Summary</Text>
      <View style={styles.listServiceCard}>
        <Image
          resizeMode="contain"
          source={{
            uri: 'https://tpbrgzfczohtyssijgxb.supabase.co/storage/v1/object/public/images/800_5ce51740b3c59.webp?t=2023-05-27T05%3A31%3A24.119Z',
          }}
          style={styles.image}
        />
        <View style={{alignSelf: 'flex-start'}}>
          <Text style={styles.servicesText}>{services_name}</Text>
          <Text style={styles.price}>{getPriceText(price)}</Text>
        </View>
      </View>
      <View style={styles.summaryCard}></View>
    </View>
  );
};

export default Summary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontSize: 20,
    letterSpacing: 1,
    fontWeight: '400',
    marginBottom: 10,
    color: '#000',
  },
  summaryCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    height: 200,
  },
  listServiceCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderRadius: 5,
    height: 80,
    width: '100%',
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  servicesText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  price: {
    fontSize: 12,
    color: '#000',
  },
});
