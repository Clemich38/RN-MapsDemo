import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
} from 'react-native';
import { StackNavigator } from 'react-navigation';


// Pages
import HomePage from './pages/HomePage'
import BasicMapPage from './pages/BasicMapPage'


let navOptions = {
  header: {
    titleStyle: {
      color: '#E8E8E8'
    },
    tintColor:'#E8E8E8',
    style: {
      backgroundColor: '#484848'
    }
  },
}

// Navigation stack configuration
const MapsDemo = StackNavigator({
  Home: { screen: HomePage, navigationOptions: navOptions },
  BasicMap: { screen: BasicMapPage, navigationOptions: navOptions },
  // Second: { screen: SecondPage, navigationOptions: navOptions },
});

AppRegistry.registerComponent('MapsDemo', () => MapsDemo);