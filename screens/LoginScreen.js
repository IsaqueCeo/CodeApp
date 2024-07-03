import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, SafeAreaView, TouchableOpacity, Alert, Image, Button } from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const onChangeUsername = (text) => {
    setUsername(text);
  };

  const onChangePassword = (text) => {
    setPassword(text);
  };

  const onPressLogin = () => {
    setShowAlert(true);
  };

  useEffect(() => {
    if (showAlert) {
      Alert.alert('Login feito com sucesso');
      setShowAlert(false);
    }
  }, [showAlert]);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeContainer}>
        <Text style={styles.title}>Digite seu Login</Text>
        <View style={styles.inputContainer}>
          <MaterialIcons name="person-outline" size={24} color="#fff" style={styles.icon} />
          <TextInput
            style={styles.input}
            onChangeText={onChangeUsername}
            value={username}
            placeholder="Email"
            placeholderTextColor="#888"
          />
        </View>
        <View style={styles.inputContainer}>
          <MaterialIcons name="lock-outline" size={24} color="#fff" style={styles.icon} />
          <TextInput
            style={styles.input}
            onChangeText={onChangePassword}
            value={password}
            placeholder="Senha"
            placeholderTextColor="#888"
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Text style={styles.showPassword}>{showPassword ? 'Esconder' : 'Mostrar'}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.optionsContainer}>
          <View style={styles.lembreMe}>
            <Feather name="check-square" size={20} color="#fff" />
            <Text style={styles.optionText}>Lembre-me</Text>
          </View>
          <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('HomeTabs')}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signupButton} onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signupButtonText}>Inscreva-se</Text>
        </TouchableOpacity>
      </SafeAreaView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E2C',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  safeContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 30,
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2C2C38',
    borderRadius: 10,
    marginVertical: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: '100%',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: '#fff',
    height: 40,
  },
  showPassword: {
    color: '#fff',
    fontSize: 14,
    marginLeft: 10,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 15,
  },
  lembreMe: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    color: '#fff',
    marginLeft: 5,
  },
  forgotPassword: {
    color: '#E9446A',
  },
  signupButton: {
    backgroundColor: '#E9446A',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  signupButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginButton: {
    backgroundColor: '#E9446A',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
