import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

const TermsAndConditionsScreen = () => {
  const termsAndConditions = `
  1. Introduction
  Welcome to our application. These terms and conditions outline the rules and regulations for the use of our application.

  2. License
  Unless otherwise stated, we own the intellectual property rights for all material on the application. All intellectual property rights are reserved.

  3. User Content
  In these terms and conditions, "User Content" shall mean any audio, video, text, images or other material you choose to display on this application.

  4. No warranties
  This application is provided "as is," with all faults, and we express no representations or warranties, of any kind related to our application or the materials contained on our application.

  5. Limitation of liability
  In no event shall we be held liable for anything arising out of or in any way connected with your use of this application.

  6. Indemnification
  You hereby indemnify us to the fullest extent from and against any and all liabilities, costs, demands, causes of action, damages and expenses arising out of or in any way related to your breach of any of the provisions of these terms.

  7. Severability
  If any provision of these terms is found to be unenforceable or invalid under any applicable law, such unenforceability or invalidity shall not render these terms unenforceable or invalid as a whole.

  8. Variation of Terms
  We are permitted to revise these terms at any time as it sees fit, and by using this application you are expected to review these terms on a regular basis.

  9. Governing Law & Jurisdiction
  These terms will be governed by and interpreted in accordance with the laws of the country, and you submit to the non-exclusive jurisdiction of the courts located in the country for the resolution of any disputes.
  `;
  return <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.logo} />
        <Text style={styles.title}>Terms and Conditions</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>{termsAndConditions}</Text>
      </ScrollView>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Accept</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#1E90FF'
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  scrollView: {
    paddingHorizontal: 20,
    paddingTop: 20
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333333'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    backgroundColor: '#1E90FF',
    borderRadius: 5,
    margin: 20
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF'
  }
});
export default TermsAndConditionsScreen;