import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const ConfirmationScreen = () => {
  const handleYes = () => {
    console.log('Yes');
  };

  const handleCancel = () => {
    console.log('Cancel');
  };

  return <View style={styles.container}>
      <ImageBackground source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} style={styles.backgroundImage}>
        <Text style={styles.text}>Are you sure you want to perform the chosen action?</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.yesButton} onPress={handleYes}>
            <Text style={styles.buttonText}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  yesButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    width: '48%'
  },
  cancelButton: {
    backgroundColor: '#F44336',
    padding: 15,
    borderRadius: 5,
    width: '48%'
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center'
  }
});
export default ConfirmationScreen;