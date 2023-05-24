import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button,
  StyleSheet,
} from 'react-native';

import React, {useEffect, useState} from 'react';
import {useStore} from '../store';

const LoginScreen = ({navigation}) => {
  const [password, setPassword] = useState('015312');
  const [email, setEmail] = useState('ryanmercurio1@gmail.com');
  const [loading, setLoading] = useState(false);
  const login = useStore(state => state.login);
  const goToSignUp = () => {
    console.log('hello');
  };

  const onPressSignIn = async () => {
    if (!email && !password) {
      console.log('Email and password is required');
      return null;
    }
    setLoading(true);
    await login(email, password);
    setLoading(false);
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
        <TouchableOpacity onPress={onPressSignIn} style={styles.button}>
          <Text style={styles.textBtn}>{loading ? 'Loading' : 'Login'}</Text>
        </TouchableOpacity>
        <Button title="Go to Sign Up" onPress={goToSignUp} />
      </View>
    </View>
  );
};

export default LoginScreen;

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
