import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';

const NotificationList = () => {
  const navigation = useNavigation();
  const [notifications, setNotifications] = useState([{
    id: '1',
    title: 'Notification 1',
    summary: 'This is a summary of notification 1',
    read: false
  }, {
    id: '2',
    title: 'Notification 2',
    summary: 'This is a summary of notification 2',
    read: true
  }, {
    id: '3',
    title: 'Notification 3',
    summary: 'This is a summary of notification 3',
    read: false
  }]);

  const markAsRead = id => {
    setNotifications(notifications.map(notification => notification.id === id ? { ...notification,
      read: true
    } : notification));
  };

  const renderItem = ({
    item
  }) => <View style={styles.notificationItem}>
      <Image style={styles.notificationImage} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <View style={styles.notificationContent}>
        <Text style={styles.notificationTitle}>{item.title}</Text>
        <Text style={styles.notificationSummary}>{item.summary}</Text>
        {!item.read && <TouchableOpacity style={styles.markAsReadButton} onPress={() => markAsRead(item.id)}>
            <Text style={styles.markAsReadButtonText}>Mark as read</Text>
          </TouchableOpacity>}
      </View>
    </View>;

  return <View style={styles.container}>
      <Text style={styles.title}>List of all notifications</Text>
      <FlatList data={notifications} renderItem={renderItem} keyExtractor={item => item.id} />
    <Pressable onPress={() => {
      navigation.navigate("ScreenAI29");
    }}><Text style={styles.jHITjVhb}>{"Push Notification"}</Text></Pressable><Pressable onPress={() => {
      navigation.navigate("ScreenAI20");
    }}><Text style={styles.LWbRMJoY}>{"Notification Settings"}</Text></Pressable></View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 16
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 16,
    marginBottom: 8
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16
  },
  notificationImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 16
  },
  notificationContent: {
    flex: 1
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333'
  },
  notificationSummary: {
    fontSize: 14,
    color: '#666',
    marginTop: 4
  },
  markAsReadButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 4,
    marginTop: 8,
    paddingHorizontal: 8,
    paddingVertical: 4
  },
  markAsReadButtonText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  jHITjVhb: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  LWbRMJoY: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});
export default NotificationList;