import React, {Component } from 'react';
import { View, Button, Text, Image } from 'react-native';

// const util = require('util');

export default class SecondScreen2 extends Component {
    static navigationOptions = {
        tabBarLabel: 'Notes',
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('../assets/icons/tab_notes.png')}
                style={{width: 22, height: 22, tintColor: 'white'}}
                >
            </Image>
        )
    };
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
                    This is tab 2
               </Text>
            </View>
        );
    }
}