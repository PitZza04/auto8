import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ServicesScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ServicesScreen</Text>
    </View>
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
