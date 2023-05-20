import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import React from 'react';
import {getBrand, getModelByBrandId} from '../api/vehicle';
import {useQuery} from '@tanstack/react-query';

const VehicleScreen = () => {
  const {data, isLoading, error, refetch, isFetching} = useQuery({
    queryKey: ['brands'],
    queryFn: getBrand,
  });
  const id = 1;
  const {data: model} = useQuery({
    queryKey: ['brand', id],
    queryFn: () => getModelByBrandId(id),
  });

  if (isLoading) return <ActivityIndicator />;
  return (
    <View>
      <Text>{JSON.stringify(data.slice(0, 2), null, 2)}</Text>
      <Text>{JSON.stringify(model.slice(0, 2), null, 2)}</Text>
    </View>
  );
};

export default VehicleScreen;

const styles = StyleSheet.create({});
