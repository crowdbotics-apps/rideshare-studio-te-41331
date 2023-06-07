import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ImagePickerIOS } from 'react-native';

const CameraOptionsScreen = () => {
  const [image, setImage] = useState(null);

  const pickImage = () => {
    ImagePickerIOS.openSelectDialog({}, uri => {
      setImage(uri);
    }, () => {});
  };

  const takePhoto = () => {
    ImagePickerIOS.openCameraDialog({}, uri => {
      setImage(uri);
    }, () => {});
  };

  return <View style={styles.container}>
      <Text style={styles.title}>Camera Options</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={pickImage}>
          <Text style={styles.buttonText}>Upload from Local Storage</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={takePhoto}>
          <Text style={styles.buttonText}>Capture with Camera</Text>
        </TouchableOpacity>
      </View>
      {image && <Image source={{
      uri: image
    }} style={styles.image} resizeMode="contain" />}
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginHorizontal: 10
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold'
  },
  image: {
    width: '100%',
    height: '50%'
  }
});
export default CameraOptionsScreen;