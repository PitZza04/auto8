import {useNavigation} from '@react-navigation/native';

export const useRoutes = () => {
  const navigation = useNavigation();

  const goToLogin = () => {
    navigation.navigate('Login');
  };
  const goToRegister = () => {
    navigation.navigate('Register');
  };

  return {goToLogin, goToRegister};
};
