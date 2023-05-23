import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {useStore} from '../store';

const SignUpScreen = ({navigation}) => {
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const register = useStore(state => state.register);
  const isLoading = useStore(state => state.isLoading);
  const handleSignUp = async () => {
    if (!email || !password) {
      return Alert.alert('Email and Password is needed');
    }
    await register({email, password});
  };
  const goToLogin = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <View style={styles.loginForm}>
        <View style={styles.inputWrapper}>
          <Text style={styles.text}>Email</Text>
          <TextInput
            style={styles.textInput}
            name="Email"
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your Email"
            selectionColor={'red'}
            placeholderTextColor={'#2B3A55'}
          />
        </View>
        {/* Password */}
        <View style={styles.inputWrapper}>
          <Text style={styles.text}>Password</Text>
          <TextInput
            style={styles.textInput}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            placeholder="Enter your Password"
            selectionColor={'blue'}
            placeholderTextColor={'#2B3A55'}
          />
        </View>
        <TouchableOpacity onPress={handleSignUp} style={styles.button}>
          <Text style={styles.textBtn}>{isLoading ? 'Loading' : 'SignUp'}</Text>
        </TouchableOpacity>
        <Button title="Go to Login" onPress={goToLogin} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  loginForm: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },

  inputWrapper: {
    flexDirection: 'column',
    width: '80%',
  },
  textInput: {
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'green',
    height: 50,
    marginBottom: 10,
    paddingLeft: 20,
  },
  textBtn: {
    color: '#fff',
  },
  text: {
    color: '#000',
    marginTop: 5,
  },

  button: {
    borderRadius: 5,
    height: 50,
    padding: 10,
    backgroundColor: 'green',
    justifyContent: 'center',
    marginBottom: 5,
  },
});

export default SignUpScreen;
