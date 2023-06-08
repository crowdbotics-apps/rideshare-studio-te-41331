import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker, Polyline } from "react-native-maps";
import { MaterialIcons } from "@expo/vector-icons";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import * as Location from "expo-location";

const MapScreen = () => {
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  });
  const [destination, setDestination] = useState(null);
  const [coordinates, setCoordinates] = useState([]);
  useEffect(() => {
    (async () => {
      let {
        status
      } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        console.error("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setRegion({ ...region,
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
      });
    })();
  }, []);
  return <View style={styles.container}>
      <MapView provider={PROVIDER_GOOGLE} style={styles.map} region={region} onRegionChangeComplete={newRegion => setRegion(newRegion)}>
        <Marker coordinate={region} />
        {destination && <Marker coordinate={destination} />}
        {coordinates.length > 0 && <Polyline coordinates={coordinates} strokeWidth={5} strokeColor="blue" />}
      </MapView>
      <View style={styles.searchBox}>
        <GooglePlacesAutocomplete placeholder="Search for places and addresses" onPress={(data, details = null) => {
        const {
          location
        } = details.geometry;
        setDestination({
          latitude: location.lat,
          longitude: location.lng
        }); // Add logic to fetch directions and setCoordinates
      }} query={{
        key: "YOUR_GOOGLE_API_KEY",
        language: "en"
      }} styles={{
        textInput: styles.textInput,
        listView: styles.listView
      }} />
      </View>
      <View style={styles.zoomButtons}>
        <TouchableOpacity style={styles.zoomButton} onPress={() => {
        setRegion({ ...region,
          latitudeDelta: region.latitudeDelta * 0.5,
          longitudeDelta: region.longitudeDelta * 0.5
        });
      }}>
          <MaterialIcons name="zoom-in" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.zoomButton} onPress={() => {
        setRegion({ ...region,
          latitudeDelta: region.latitudeDelta * 2,
          longitudeDelta: region.longitudeDelta * 2
        });
      }}>
          <MaterialIcons name="zoom-out" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  },
  searchBox: {
    position: "absolute",
    top: 10,
    width: "90%"
  },
  textInput: {
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    paddingHorizontal: 10
  },
  listView: {
    backgroundColor: "#FFFFFF",
    borderRadius: 5
  },
  zoomButtons: {
    position: "absolute",
    bottom: 20,
    right: 20
  },
  zoomButton: {
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  }
});
export default MapScreen;