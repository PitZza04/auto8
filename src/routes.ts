import {NativeStackNavigationProp} from '@react-navigation/native-stack';
export type RootStackParamList = {
  Home: undefined;
  Services: undefined;
  Address: undefined;
  Categories: undefined;
  Vehicle: undefined;
  Cart: undefined;
};

export type TabParamList = {
  Bills: undefined;
  Analytics: undefined;
  Settings: undefined;
};

export type NavigationProps = NativeStackNavigationProp<RootStackParamList>;
export type TabNavigationProps = NativeStackNavigationProp<TabParamList>;
