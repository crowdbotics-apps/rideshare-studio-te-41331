import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React from 'react';
import { View, Text, Image, StyleSheet, StatusBar } from 'react-native';

const SplashScreen = () => {
  const navigation = useNavigation();
  return <View style={styles.container}>
      <StatusBar backgroundColor="#1f4037" barStyle="light-content" />
      <View style={styles.logoContainer}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.logo} />
      </View>
      <View style={styles.textContainer}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI4");
      }}><Text style={styles.title}>Welcome to Our App</Text></Pressable>
        <Text style={styles.subtitle}>The best app for your needs</Text>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f4037',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 150,
    height: 150
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 18,
    color: '#ffffff',
    textAlign: 'center',
    marginTop: 10
  }
});
export default SplashScreen;