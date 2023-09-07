import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Linking, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Replace this with your authentication logic or API call
    const demoUsername = 'Nayeem';
    const demoPassword = 'Password';

    if (username === demoUsername && password === demoPassword) {
      // Successful login
      // Redirect to HomeScreen or perform any other actions
      navigation.navigate('Home');
    } else {
      // Failed login
      Alert.alert('Login Failed', 'Invalid username or password. Please try again.');
    }
  };

  const openWebsite = () => {
    // Open the website in the user's browser when the link is pressed
    Linking.openURL('https://www.hsenidmobile.com');
  };

  const navigateToRegister = () => {
    // Navigate to the registration screen
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Qizard</Text>
        <Text style={styles.subtitle}>Welcome, please login to access!</Text>
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
        <Button title="Login" onPress={handleLogin} />
        <Text style={styles.register} onPress={navigateToRegister}>
          Don't have an account? <Text style={styles.registerLink}>Register here! </Text>
        </Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Powered by <Text style={styles.link} onPress={openWebsite}>hSenid Mobile</Text>
        </Text>
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
    marginTop: 20,
  },
  input: {
    backgroundColor: 'white',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  footer: {
    marginTop: 20,
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
  registerLink: {
    color: '#32e7ed',
    fontSize: 16,
    marginTop: 10,
    // textDecorationLine: 'underline',
  },
  register: {
    textAlign:"center",
    color: 'white',
    fontSize: 14,
    marginTop: 10,
    // textDecorationLine: 'underline',
  },
});
