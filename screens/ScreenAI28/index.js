import { Pressable } from "react-native";
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';

const PaymentScreen = () => {
  const [selectedPayment, setSelectedPayment] = useState(null);
  const paymentOptions = [{
    id: 'creditCard',
    name: 'Credit Card'
  }, {
    id: 'googlePay',
    name: 'Google Pay'
  }, {
    id: 'applePay',
    name: 'Apple Pay'
  }, {
    id: 'paypal',
    name: 'PayPal'
  }];
  const creditCards = [{
    id: '1',
    last4: '1234',
    brand: 'Visa'
  }, {
    id: '2',
    last4: '5678',
    brand: 'Mastercard'
  }];

  const renderItem = ({
    item
  }) => <TouchableOpacity style={[styles.card, selectedPayment === item.id ? styles.selectedCard : null]} onPress={() => setSelectedPayment(item.id)}>
      <Pressable><Text style={styles.cardText}>{item.name}</Text></Pressable>
      {item.id === 'creditCard' && <FlatList data={creditCards} renderItem={({
      item
    }) => <Text style={styles.creditCardText}>
              {item.brand} **** **** **** {item.last4}
            </Text>} keyExtractor={item => item.id} />}
      {item.id !== 'creditCard' && <Image source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} style={styles.icon} />}
    </TouchableOpacity>;

  return <View style={styles.container}>
      <Text style={styles.amountText}>Amount to be paid: $100</Text>
      <FlatList data={paymentOptions} renderItem={renderItem} keyExtractor={item => item.id} />
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20
  },
  amountText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20
  },
  selectedCard: {
    borderColor: '#6200EE',
    borderWidth: 2
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  creditCardText: {
    fontSize: 16,
    marginTop: 10
  },
  icon: {
    width: 50,
    height: 50,
    marginTop: 10
  }
});
export default PaymentScreen;