import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Clipboard } from 'react-native';

const InviteScreen = () => {
  const [email, setEmail] = useState('');

  const copyLink = () => {
    Clipboard.setString('https://tinyurl.com/42evm3m3');
  };

  const sendInvite = () => {// Send invite logic
  };

  return <View style={styles.container}>
      <Text style={styles.title}>Send invite link</Text>
      <Text style={styles.link}>https://tinyurl.com/42evm3m3</Text>
      <TouchableOpacity style={styles.copyButton} onPress={copyLink}>
        <Text style={styles.buttonText}>Copy</Text>
      </TouchableOpacity>
      <TextInput style={styles.input} onChangeText={setEmail} value={email} placeholder="Email address" keyboardType="email-address" />
      <TouchableOpacity style={styles.sendButton} onPress={sendInvite}>
        <Text style={styles.buttonText}>Send</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.closeButton} onPress={() => {}}>
        <Text style={styles.buttonText}>Close</Text>
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
    marginBottom: 20
  },
  link: {
    fontSize: 16,
    color: '#4A4A4A',
    marginBottom: 20
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: '#4A4A4A',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 20
  },
  copyButton: {
    backgroundColor: '#4A90E2',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 20
  },
  sendButton: {
    backgroundColor: '#4A90E2',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 20
  },
  closeButton: {
    backgroundColor: '#4A90E2',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16
  }
});
export default InviteScreen;