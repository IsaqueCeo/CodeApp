import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

export default function SignUpScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const onChangeName = (text) => {
    setName(text);
  };

  const onChangeEmail = (text) => {
    setEmail(text);
  };

  const onChangePassword = (text) => {
    setPassword(text);
  };

  const onPressSignUp = () => {
    setShowAlert(true);
  };

  useEffect(() => {
    if (showAlert) {
      Alert.alert('Conta criada com sucesso');
      setShowAlert(false);
    }
  }, [showAlert]);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeContainer}>
        <Text style={styles.title}>Inscreva-se</Text>
        <View style={styles.inputContainer}>
          <MaterialIcons name="person-outline" size={24} color="#fff" style={styles.icon} />
          <TextInput
            style={styles.input}
            onChangeText={onChangeName}
            value={name}
            placeholder="Nome"
            placeholderTextColor="#888"
          />
        </View>
        <View style={styles.inputContainer}>
          <MaterialIcons name="email" size={24} color="#fff" style={styles.icon} />
          <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            value={email}
            placeholder="Email"
            placeholderTextColor="#888"
            keyboardType="email-address"
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
        <TouchableOpacity style={styles.signUpButton} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.signUpButtonText}>Inscreva-se</Text>
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
  signUpButton: {
    backgroundColor: '#E9446A',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  signUpButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
