import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const NotificationScreen = () => {
  const [notificationName, setNotificationName] = useState('');

  const handleClose = () => {// Handle close action
  };

  const handleDeleteNotification = () => {// Handle delete notification action
  };

  return <View style={styles.container}>
      <Text style={styles.label}>Notification name</Text>
      <TextInput style={styles.input} onChangeText={setNotificationName} value={notificationName} placeholder="Enter notification name" />
      <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
        <Text style={styles.buttonText}>Close</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.deleteButton} onPress={handleDeleteNotification}>
        <Text style={styles.buttonText}>Delete Notification</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  label: {
    fontSize: 18,
    marginBottom: 10
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20
  },
  closeButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10
  },
  deleteButton: {
    backgroundColor: '#f44336',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5
  },
  buttonText: {
    color: 'white',
    fontSize: 16
  }
});
export default NotificationScreen;