import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image } from 'react-native';

const PrivacyPolicyScreen = () => {
  return <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Image style={styles.logo} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
          <Text style={styles.title}>Privacy Policy</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.sectionTitle}>1. Introduction</Text>
          <Text style={styles.text}>
            Welcome to our Privacy Policy. This document explains how we collect, use, and share your personal information when you use our services.
          </Text>
          <Text style={styles.sectionTitle}>2. Information We Collect</Text>
          <Text style={styles.text}>
            We collect information you provide directly to us, such as your name, email address, and any other information you choose to provide.
          </Text>
          <Text style={styles.sectionTitle}>3. How We Use Your Information</Text>
          <Text style={styles.text}>
            We use your information to provide, maintain, and improve our services, communicate with you, and protect our services and users.
          </Text>
          <Text style={styles.sectionTitle}>4. Sharing Your Information</Text>
          <Text style={styles.text}>
            We may share your information with third parties in certain circumstances, such as when we use third-party service providers or when required by law.
          </Text>
          <Text style={styles.sectionTitle}>5. Security</Text>
          <Text style={styles.text}>
            We take reasonable measures to protect your information from unauthorized access, alteration, or destruction.
          </Text>
          <Text style={styles.sectionTitle}>6. Changes to This Privacy Policy</Text>
          <Text style={styles.text}>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 20
  },
  logo: {
    width: 100,
    height: 100
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10
  },
  content: {
    paddingHorizontal: 20
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10
  },
  text: {
    fontSize: 16,
    lineHeight: 24
  }
});
export default PrivacyPolicyScreen;