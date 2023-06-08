import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const LoginScreen = () => {
  const navigation = useNavigation();
  return <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI8");
      }}><Text style={styles.forgotPassword}>Forgot Password?</Text></Pressable>
      </TouchableOpacity>
      <Text style={styles.orText}>OR</Text>
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Image style={styles.socialIcon} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
          <Text style={styles.socialText}>Connect with Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image style={styles.socialIcon} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
          <Text style={styles.socialText}>Connect with Google</Text>
        </TouchableOpacity>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 15
  },
  loginButton: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    paddingVertical: 10,
    marginBottom: 10
  },
  loginButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  forgotPassword: {
    color: '#007AFF',
    textAlign: 'center',
    marginBottom: 20
  },
  orText: {
    textAlign: 'center',
    marginBottom: 20
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    flex: 1,
    marginRight: 10
  },
  socialIcon: {
    width: 24,
    height: 24,
    marginRight: 10
  },
  socialText: {
    fontWeight: 'bold'
  }
});
export default LoginScreen;