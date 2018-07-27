import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Login from './src/components/Login/Login';


export default class App extends React.Component {
  
  render() {
    return (
      <Login />
    
    );
  }
}

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
