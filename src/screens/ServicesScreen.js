import {
  StyleSheet,
  Text,
  ScrollView,
  ActivityIndicator,
  Button,
} from 'react-native';
import React from 'react';
import {useQuery} from '@tanstack/react-query';
import {getServicesByCategory, getServices} from '../api/services';

const ServicesScreen = () => {
  const {data, isLoading, error, refetch, isFetching} = useQuery({
    queryKey: ['services'],
    queryFn: getServices,
  });

  if (isLoading) return <ActivityIndicator />;
  return (
    <ScrollView contentContainerStyle={styles.container} scrollEnabled>
      <Text>{JSON.stringify(data, null, 2)}</Text>
    </ScrollView>
  );
};

export default ServicesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
