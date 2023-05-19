import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../routes';
import HomeScreen from '../screens/HomeScreen';
import AddressScreen from '../screens/AddressScreen';
import ServicesScreen from '../screens/ServicesScreen';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator<RootStackParamList>();
const HomeStack = () => {
  console.log('Awit');
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Services" component={ServicesScreen} />
        <Stack.Screen name="Address" component={AddressScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeStack;
