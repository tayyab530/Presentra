import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('https://c38xt4v3ka.execute-api.eu-north-1.amazonaws.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      const effect = data.policyDocument.Statement[0].Effect;

      console.log(effect);

      if (response.ok && effect === 'Allow') {
        // API response is 'Allow', user is logged in
        console.log('User logged in');
        // Additional logic to handle successful login with Firebase
        navigation.navigate('Home');
      } else {
        // API response is not 'Allow', handle login error
        console.log('Login error:', data);
      }
    } catch (error) {
      console.log('Login error:', error);
      // Handle login error
    }
  };

  // Rest of the code...

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity style={styles.signupButton} onPress={handleSignUp}>
        <Text style={styles.signupButtonText}>Sign up</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    input: {
      width: '100%',
      height: 40,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 10,
    },
    button: {
      width: '100%',
      height: 40,
      backgroundColor: '#007AFF',
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    signupButton: {
      width: '100%',
      height: 40,
      backgroundColor: '#ccc',
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    signupButtonText: {
      color: '#000',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });

export {LoginScreen};
