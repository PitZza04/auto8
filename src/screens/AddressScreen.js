import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const AddressScreen = () => {
  return (
    <View style={styles.container}>
      <Text>AddressScreen</Text>
    </View>
  );
};

export default AddressScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
