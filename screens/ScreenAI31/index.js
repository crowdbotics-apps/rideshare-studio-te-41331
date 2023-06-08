import React from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
const dummyData = [{
  id: '1',
  date: '2022-10-01',
  time: '10:00',
  pickup: '123 Main St',
  dropoff: '456 Elm St',
  driver: 'John D',
  license: 'ABC123',
  cancelFee: 5,
  past: false
}, {
  id: '2',
  date: '2022-10-02',
  time: '14:00',
  pickup: '789 Oak St',
  dropoff: '321 Pine St',
  driver: 'Jane S',
  license: 'XYZ789',
  cancelFee: 5,
  past: true
}];

const RideCard = ({
  ride,
  onCancel,
  onBookAgain
}) => <View style={styles.card}>
    <Text>{ride.date} {ride.time}</Text>
    <Text>Pick up: {ride.pickup}</Text>
    <Text>Drop off: {ride.dropoff}</Text>
    <Text>Driver: {ride.driver}</Text>
    <Text>License: {ride.license}</Text>
    {ride.past ? <TouchableOpacity onPress={onBookAgain}>
        <Text style={styles.button}>Book again</Text>
      </TouchableOpacity> : <>
        <TouchableOpacity onPress={onCancel}>
          <Text style={styles.button}>Cancel ride</Text>
        </TouchableOpacity>
        <Text>You might be charged a cancellation fee of ${ride.cancelFee}</Text>
      </>}
  </View>;

const RidesScreen = () => {
  const [search, setSearch] = React.useState('');

  const renderRide = ({
    item
  }) => <RideCard ride={item} onCancel={() => console.log('Cancel ride', item.id)} onBookAgain={() => console.log('Book again', item.id)} />;

  return <View style={styles.container}>
      <TextInput style={styles.search} onChangeText={setSearch} value={search} placeholder="Search" />
      <Text style={styles.sectionTitle}>Upcoming rides</Text>
      <FlatList data={dummyData.filter(ride => !ride.past)} renderItem={renderRide} keyExtractor={item => item.id} />
      <Text style={styles.sectionTitle}>Past rides</Text>
      <FlatList data={dummyData.filter(ride => ride.past)} renderItem={renderRide} keyExtractor={item => item.id} />
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16
  },
  search: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 16
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2
  },
  button: {
    backgroundColor: '#007AFF',
    color: '#fff',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    textAlign: 'center',
    marginTop: 8
  }
});
export default RidesScreen;