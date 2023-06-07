import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Switch, StyleSheet, Image } from 'react-native';

const NotificationSettings = () => {
  const [inAppNotifications, setInAppNotifications] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [notificationFrequency, setNotificationFrequency] = useState('daily');
  return <View style={styles.container}>
      <TouchableOpacity onPress={() => {}} style={styles.backButton}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.backIcon} />
      </TouchableOpacity>
      <Text style={styles.title}>Notification Settings</Text>
      <View style={styles.settingRow}>
        <Text style={styles.settingText}>In-app Notifications</Text>
        <Switch value={inAppNotifications} onValueChange={setInAppNotifications} />
      </View>
      <View style={styles.settingRow}>
        <Text style={styles.settingText}>Push Notifications</Text>
        <Switch value={pushNotifications} onValueChange={setPushNotifications} />
      </View>
      <View style={styles.settingRow}>
        <Text style={styles.settingText}>Email Notifications</Text>
        <Switch value={emailNotifications} onValueChange={setEmailNotifications} />
      </View>
      <Text style={styles.frequencyText}>Set Notifications frequency</Text>
      <View style={styles.frequencyRow}>
        <TouchableOpacity style={[styles.frequencyButton, notificationFrequency === 'daily' && styles.activeFrequency]} onPress={() => setNotificationFrequency('daily')}>
          <Text style={styles.frequencyText}>Daily</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.frequencyButton, notificationFrequency === 'weekly' && styles.activeFrequency]} onPress={() => setNotificationFrequency('weekly')}>
          <Text style={styles.frequencyText}>Weekly</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.frequencyButton, notificationFrequency === 'monthly' && styles.activeFrequency]} onPress={() => setNotificationFrequency('monthly')}>
          <Text style={styles.frequencyText}>Monthly</Text>
        </TouchableOpacity>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 20
  },
  backButton: {
    marginTop: 40,
    marginBottom: 20
  },
  backIcon: {
    width: 30,
    height: 30
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },
  settingText: {
    fontSize: 18
  },
  frequencyText: {
    fontSize: 18,
    marginBottom: 10
  },
  frequencyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  frequencyButton: {
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    padding: 10,
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 5
  },
  activeFrequency: {
    backgroundColor: '#6200EE'
  }
});
export default NotificationSettings;