import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../routes';
import HomeScreen from '../screens/HomeScreen';
import AddressScreen from '../screens/AddressScreen';
import ServicesScreen from '../screens/ServicesScreen';
import {NavigationContainer} from '@react-navigation/native';
import CategoriesScreen from '../screens/CategoriesScreen';
import VehicleScreen from '../screens/VehicleScreen';
import CartScreen from '../screens/CartScreen';
import AppointmentScreen from '../screens/AppointmentScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();
const HomeStack = () => {
  console.log('Awit');
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Categories" component={CategoriesScreen} />
        <Stack.Screen name="Services" component={ServicesScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Vehicle" component={VehicleScreen} />
        <Stack.Screen name="Address" component={AddressScreen} />
        <Stack.Screen name="Appointment" component={AppointmentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeStack;
