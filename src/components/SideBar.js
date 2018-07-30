import React, {Component } from 'react';
import { View, Button, Text, Image } from 'react-native';

// const util = require('util');

export default class SideBar extends Component {
  
    render() {
       
        return (
            <View style={
                {
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }
            }>
               <Text style={{fontSize:30}}>
                    This is tab SIde bar
               </Text>
            </View>
        );
    }
}