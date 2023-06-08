import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const App = () => {
  return <View style={styles.container}>
      <Text style={styles.title}>Title</Text>
      <Text style={styles.description}>Description</Text>
      <Image style={styles.calendar} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <TouchableOpacity style={styles.doneButton}>
        <Text style={styles.buttonText}>Done</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  description: {
    fontSize: 18,
    marginBottom: 20
  },
  calendar: {
    width: 300,
    height: 300,
    marginBottom: 20
  },
  doneButton: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10
  },
  backButton: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16
  }
});
export default App;