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

const ServicesScreen = () => {
  const {data, isLoading, error, refetch, isFetching} = useQuery({
    queryKey: ['services'],
    queryFn: getServices,
  });
  const renderProductItem = ({item}) => {
    return <ServicesCard service={item} />;
  };
  console.log(data);
  if (isLoading) return <ActivityIndicator />;
  return (
    <View style={styles.container}>
      <View>
        <Text>SERVICES</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={renderProductItem}
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
