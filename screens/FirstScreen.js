import React, {Component } from 'react';
import { View, Button, Text } from 'react-native';

// const util = require('util');

export default class FirstScreen extends Component {
    static navigationOptions = {
        title: 'First Screen'
    };
    render() {
        var {navigate} = this.props.navigation;
        var {params} = this.props.navigation.state;
        return (
            <View>
                <Text> This is screen 1</Text>
                <Text>Params from screen1 : {params.name}</Text>
                <Button onPress={
                    () => navigate("Second", {name: "Test"})
                }
                title = "Go to Screen2"
                />
            </View>
        );
    }
}