import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Login from './src/components/Login/Login';
import Register from './src/components/Register';
import { StackNavigator } from 'react-navigation';
import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';
import ViewTabs from './src/components/ViewTabs';

// This is the nav
const Navigation = StackNavigator({
  LoginScreen: {screen: Login},
  ViewTabs: { screen: ViewTabs },
  Register: {screen: Register},
  First: {screen: FirstScreen},
  Second: {screen: SecondScreen}
})


export default Navigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  }
});
