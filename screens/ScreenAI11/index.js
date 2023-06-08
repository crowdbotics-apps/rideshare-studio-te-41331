import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

const Dashboard = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Dashboard</Text>
      </View>
      <ScrollView>
        <View style={styles.mainMenu}>
          <TouchableOpacity style={styles.menuItem}>
            <Image style={styles.menuItemImage} source={{
            uri: 'https://tinyurl.com/42evm3m3'
          }} />
            <Pressable onPress={() => {
            navigation.navigate("ScreenAI30");
          }}><Text style={styles.menuItemText}>{"Book A Ride"}</Text></Pressable>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Image style={styles.menuItemImage} source={{
            uri: 'https://tinyurl.com/42evm3m3'
          }} />
            <Text style={styles.menuItemText}>{"Messages"}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Image style={styles.menuItemImage} source={{
            uri: 'https://tinyurl.com/42evm3m3'
          }} />
            <Text style={styles.menuItemText}>Menu 3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Image style={styles.menuItemImage} source={{
            uri: 'https://tinyurl.com/42evm3m3'
          }} />
            <Text style={styles.menuItemText}>Menu 4</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Image style={styles.navItemImage} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
          <Text style={styles.navItemText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Pressable onPress={() => {
          navigation.navigate("ScreenAI9");
        }}><Image style={styles.navItemImage} source={{
            uri: 'https://tinyurl.com/42evm3m3'
          }} /></Pressable>
          <Text style={styles.navItemText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image style={styles.navItemImage} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
          <Pressable onPress={() => {
          navigation.navigate("ScreenAI12");
        }}><Text style={styles.navItemText}>Settings</Text></Pressable>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  header: {
    backgroundColor: '#4A90E2',
    height: 60,
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 24
  },
  mainMenu: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 20
  },
  menuItem: {
    width: '45%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center'
  },
  menuItemImage: {
    width: 60,
    height: 60
  },
  menuItemText: {
    fontSize: 18,
    marginTop: 10
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#4A90E2',
    height: 60,
    alignItems: 'center'
  },
  navItem: {
    alignItems: 'center'
  },
  navItemImage: {
    width: 30,
    height: 30
  },
  navItemText: {
    color: '#FFFFFF',
    fontSize: 12
  }
});
export default Dashboard;