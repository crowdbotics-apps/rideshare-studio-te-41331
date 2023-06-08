import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const CreditCardScreen = () => {
  const navigation = useNavigation();
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  return <View style={styles.container}>
      <Image style={styles.cardImage} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <TextInput style={styles.input} placeholder="Card Number" keyboardType="number-pad" value={cardNumber} onChangeText={setCardNumber} />
      <TextInput style={styles.input} placeholder="CVV" keyboardType="number-pad" value={cvv} onChangeText={setCvv} />
      <TextInput style={styles.input} placeholder="Cardholder's Name" value={cardHolderName} onChangeText={setCardHolderName} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Pressable onPress={() => {
          navigation.navigate("ScreenAI23");
        }}><Text style={styles.buttonText}>Create</Text></Pressable>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardImage: {
    width: 300,
    height: 190,
    marginBottom: 20
  },
  input: {
    width: '80%',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    fontSize: 18,
    padding: 10,
    marginBottom: 20
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%'
  },
  button: {
    backgroundColor: '#4b7bec',
    padding: 15,
    borderRadius: 5,
    width: '45%',
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 18
  }
});
export default CreditCardScreen;