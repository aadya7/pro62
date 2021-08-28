import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import HomeScreen from './Screens/HomeScreen'
import SubmitScreen from './Screens/SubmitScreen'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Submit from './components/Submit'

export default function App() {

  return (
    <AppContainer />
  );
}


var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  SubmitScreen: SubmitScreen,
});

const AppContainer = createAppContainer(AppNavigator);

