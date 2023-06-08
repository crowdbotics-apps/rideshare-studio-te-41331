import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React, { useState } from 'react';
import { Text, TouchableOpacity, TextInput, StyleSheet, Image, ScrollView } from 'react-native';

const ReportScreen = () => {
  const navigation = useNavigation();
  const [selectedReason, setSelectedReason] = useState(null);
  const [otherReason, setOtherReason] = useState('');
  const reasons = ['Spam', 'Pornography', 'Hatred and bullying', 'Self-harm', 'Violent, gory and harmful content', 'Child porn', 'Illegal activities (e.g. drug uses)', 'Deceptive content', 'Copyright and trademark infringement'];

  const handleReasonPress = reason => {
    setSelectedReason(reason);
  };

  const handleOtherReasonChange = text => {
    setOtherReason(text);
  };

  return <ScrollView style={styles.container}>
      <Image source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} style={styles.image} />
      <Text style={styles.title}>Why are you reporting this?</Text>
      {reasons.map((reason, index) => <TouchableOpacity key={index} style={[styles.reasonButton, selectedReason === reason && styles.selectedReasonButton]} onPress={() => handleReasonPress(reason)}>
          <Text style={[styles.reasonText, selectedReason === reason && styles.selectedReasonText]}>
            {reason}
          </Text>
        </TouchableOpacity>)}
      <TextInput style={styles.otherReasonInput} onChangeText={handleOtherReasonChange} value={otherReason} placeholder="Other (input)" />
      <TouchableOpacity style={styles.submitButton}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI23");
      }}><Text style={styles.submitButtonText}>Submit</Text></Pressable>
      </TouchableOpacity>
    </ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  reasonButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 15,
    marginBottom: 10
  },
  selectedReasonButton: {
    borderColor: '#007AFF'
  },
  reasonText: {
    fontSize: 18
  },
  selectedReasonText: {
    color: '#007AFF'
  },
  otherReasonInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 15,
    fontSize: 18,
    marginBottom: 20
  },
  submitButton: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
    marginBottom: 20
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
export default ReportScreen;