import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native';

const App = () => {
  const navigation = useNavigation();
  const [pickupAddress, setPickupAddress] = useState('');
  const [dropOffAddress, setDropOffAddress] = useState('');
  const [search, setSearch] = useState('');
  const [numHorses, setNumHorses] = useState('');
  const drivers = [{
    id: 1,
    name: 'Driver 1'
  }, {
    id: 2,
    name: 'Driver 2'
  }, {
    id: 3,
    name: 'Driver 3'
  }];
  return <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.buttonText}>Notification Icon</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Pressable onPress={() => {
          navigation.navigate("ScreenAI31");
        }}><Text style={styles.buttonText}>Ride's History</Text></Pressable>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.buttonText}>Request a Ride</Text>
        </TouchableOpacity>
      </View>

      <Image style={styles.map} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />

      <TextInput style={styles.input} placeholder="Search" value={search} onChangeText={setSearch} />

      <TextInput style={styles.input} placeholder="Pickup Address" value={pickupAddress} onChangeText={setPickupAddress} />

      <TouchableOpacity>
        <Text style={styles.buttonText}>Use Device Location</Text>
      </TouchableOpacity>

      <TextInput style={styles.input} placeholder="Drop Off Address" value={dropOffAddress} onChangeText={setDropOffAddress} />

      <TouchableOpacity>
        <Text style={styles.buttonText}>Use Device Location</Text>
      </TouchableOpacity>

      <Text style={styles.text}>Price per mile: $1.50</Text>

      <TouchableOpacity>
        <Text style={styles.buttonText}>Track a Ride</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.buttonText}>Schedule a Ride</Text>
      </TouchableOpacity>

      <View style={styles.dropdown}>
        <Text style={styles.text}>Select a Driver:</Text>
        {drivers.map(driver => <Text key={driver.id} style={styles.text}>
            {driver.name}
          </Text>)}
      </View>

      <TouchableOpacity>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI24");
      }}><Text style={styles.buttonText}>Calendar</Text></Pressable>
      </TouchableOpacity>

      <TextInput style={styles.input} placeholder="Number of Horses" value={numHorses} onChangeText={setNumHorses} />

      <Text style={styles.text}>Price per hour: $20.00</Text>
      <Text style={styles.text}>Total price: $0.00</Text>
    </ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10
  },
  buttonText: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold'
  },
  map: {
    width: '100%',
    height: 200
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    padding: 10,
    margin: 10
  },
  text: {
    fontSize: 16,
    marginLeft: 10
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    padding: 10,
    margin: 10
  }
});
export default App;