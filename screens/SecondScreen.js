import React, {Component } from 'react';
import { View, Button, Text } from 'react-native';
// const util = require('util');
export default class SecondScreen2 extends Component {
    static navigationOptions = {
        title: 'Second Screen'
    };
    render() {
        var {params} = this.props.navigation.state;
        return (
            <View>
                <Text> This is screen 2</Text>
                <Text>Params from screen1 : {params.name}</Text>
            </View>
        );
    }
}