import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const FeedbackScreen = () => {
  const [feedback, setFeedback] = useState('');

  const handleSend = () => {
    console.log('Feedback:', feedback);
    setFeedback('');
  };

  return <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Write your feedback here..." multiline numberOfLines={5} onChangeText={setFeedback} value={feedback} />
      <Button title="Send" onPress={handleSend} />
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20
  }
});
export default FeedbackScreen;