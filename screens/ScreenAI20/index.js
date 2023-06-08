import React from 'react';
import { View, Text, Image, TextInput, FlatList, StyleSheet } from 'react-native';
const conversations = [{
  id: '1',
  name: 'John Doe',
  username: '@johndoe',
  lastMessageTimestamp: '2m'
}, {
  id: '2',
  name: 'Jane Smith',
  username: '@janesmith',
  lastMessageTimestamp: '5m'
}, {
  id: '3',
  name: 'Michael Brown',
  username: '@michaelbrown',
  lastMessageTimestamp: '10m'
}];

const MessageScreen = () => {
  return <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.profilePicture} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.username}>@johndoe</Text>
      </View>
      <TextInput style={styles.searchBar} placeholder="Search" placeholderTextColor="#999" />
      <FlatList data={conversations} renderItem={({
      item
    }) => <View style={styles.conversation}>
            <Text style={styles.conversationName}>{item.name}</Text>
            <Text style={styles.conversationUsername}>{item.username}</Text>
            <Text style={styles.conversationTimestamp}>
              {item.lastMessageTimestamp}
            </Text>
          </View>} keyExtractor={item => item.id} />
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  username: {
    fontSize: 14,
    color: '#999',
    marginLeft: 8
  },
  searchBar: {
    backgroundColor: '#f0f0f0',
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginHorizontal: 16,
    marginBottom: 16
  },
  conversation: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0'
  },
  conversationName: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  conversationUsername: {
    fontSize: 14,
    color: '#999'
  },
  conversationTimestamp: {
    fontSize: 12,
    color: '#999'
  }
});
export default MessageScreen;