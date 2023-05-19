import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useQuery} from '@tanstack/react-query';
//import {queryClient} from '../utils/queryClient';
import {getServices} from '../api/services';
const HomeScreen = () => {
  const {data, error, refetch, isFetching} = useQuery(
    ['servicesCategory'],
    getServices,
  );

  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(data, null, 2)}</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
