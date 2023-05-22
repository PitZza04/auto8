import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {getCurrentUser} from '../api/auth';

const HomeScreen = ({navigation}) => {
  useEffect(() => {
    async () => {
      const user = await getCurrentUser();
      console.log('hello', user);
    };
  }, []);
  return (
    <View style={styles.container}>
      <Button
        title="Categories"
        onPress={() => navigation.navigate('Categories')}
      />
      <Button
        title="Services"
        onPress={() => navigation.navigate('Services')}
      />
      <Button title="Vehicle" onPress={() => navigation.navigate('Vehicle')} />
      <Button title="Address" onPress={() => navigation.navigate('Address')} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
