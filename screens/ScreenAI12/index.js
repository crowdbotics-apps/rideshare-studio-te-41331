import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

const ProfileScreen = () => {
  const navigation = useNavigation();
  return <ScrollView contentContainerStyle={styles.container}>
      <Image style={styles.profileImage} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <Text style={styles.profileName}>John Doe</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI15");
      }}><Text style={styles.buttonText}>{"Frequently Asked Questions"}</Text></Pressable>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI7");
      }}><Text style={styles.buttonText}>Privacy Policy</Text></Pressable>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI6");
      }}><Text style={styles.buttonText}>Terms and Conditions</Text></Pressable>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI13");
      }}><Text style={styles.buttonText}>Change Password</Text></Pressable>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI14");
      }}><Text style={styles.buttonText}>Support / Send Feedback</Text></Pressable>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI16");
      }}><Text style={styles.buttonText}>{"Invite Friends"}</Text></Pressable>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI17");
      }}><Text style={styles.buttonText}>Log Out</Text></Pressable>
      </TouchableOpacity>
    <Pressable onPress={() => {
      navigation.navigate("ScreenAI18");
    }}><Text style={styles.xtwsoxem}>{"Delete"}</Text></Pressable><Pressable onPress={() => {
      navigation.navigate("ScreenAI19");
    }}><Text style={styles.FUfKiUQU}>{"Notification"}</Text></Pressable></ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5'
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30
  },
  button: {
    width: '80%',
    backgroundColor: '#4CAF50',
    borderRadius: 25,
    paddingVertical: 12,
    marginBottom: 15
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  xtwsoxem: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  FUfKiUQU: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});
export default ProfileScreen;