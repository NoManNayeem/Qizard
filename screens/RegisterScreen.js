import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function RegisterScreen() {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = () => {
    // Implement user registration logic here
    // Redirect to HomeScreen or perform any other actions after registration
    navigation.navigate('Home');
  };

  const openWebsite = () => {
    // Open the website in the user's browser when the link is pressed
    Linking.openURL('https://www.hsenidmobile.com');
  };

  const navigateToLogin = () => {
    // Navigate back to the login screen
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Qizard</Text>
        <Text style={styles.subtitle}>Create an Account</Text>
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
        />
        <Button title="Register" onPress={handleRegister} />
        <Text style={styles.loginLink} onPress={navigateToLogin}>
          Back to Login
        </Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Powered by <Text style={styles.link} onPress={openWebsite}>hSenid Mobile</Text></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3B2E57', // Purple dark blue background
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    color: 'white',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
  },
  form: {
    width: '80%',
    marginTop: 20,
  },
  input: {
    backgroundColor: 'white',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  footer: {
    marginTop: 25,
    alignItems: 'center',
  },
  footerText: {
    color: 'white',
    fontSize: 16,
  },
  link: {
    color: '#00CC00', // Green color
    fontSize: 18,
    marginTop: 5,
    textDecorationLine: 'underline',
  },
  loginLink: {
    textAlign:'center',
    color: 'white',
    fontSize: 16,
    marginTop: 30,
    textDecorationLine: 'underline',
  },
});
