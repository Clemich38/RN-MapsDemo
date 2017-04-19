import React from 'react';
import {
  Text,
  View,
  Button,
  ScrollView,
  StyleSheet
} from 'react-native';
import MapView from 'react-native-maps';

export default class BasicMapPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      ... this.getInitialState()
    }
  }

  static navigationOptions = {
    title: 'Basic Map Page',
  };

  // Initialize the states (map center sand markers coordinates)
  getInitialState() {
    return {
      region: {
        latitude: 35.6895000,
        longitude: 139.7528600,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      markers: [{
        title: "Marker 1",
        description: "A place in Tokyo", 
        latlng: {
          latitude: 35.6895000,
          longitude: 139.7528600
        }
      }, {
        title: "Marker 2",
        description: "Another place in Tokyo",
        latlng: {
          latitude: 35.6999500,
          longitude: 139.7598300
        }
      }]
    };
  }

  // Modifie state value 
  onRegionChange(region) {
    this.setState({ region });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Basic Map Page</Text>
        {/* Map View */}
        <MapView
          style={styles.map}
          region={this.state.region}
          onRegionChange={this.onRegionChange.bind(this)}>

          {/* Markers */}
          {this.state.markers.map(marker => (
            <MapView.Marker
              key={marker.title}
              coordinate={marker.latlng}
              title={marker.title}
              description={marker.description}
            />
          ))}
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 25,
    paddingRight: 25,
  },
  title: {
    color: '#484848',
    paddingTop: 15,
    paddingBottom: 30,
    fontSize: 20,
    textAlign: 'center'
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
})


