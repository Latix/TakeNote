import React, {Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar } from 'react-native';

export default class LoginForm extends Component {
    static navigationOptions = {
        title: 'Login'
    };
    render() {
        
        return (
            <View style={ styles.container }>
            <StatusBar 
                barStyle="light-content"
            />
                <TextInput 
                placeholder="username or email"
                placeholderTextColor="rgba(255,255,255,1.2)"
                underlineColorAndroid='transparent'
                returnKeyType="next"
                autoCorrect={false}
                style={styles.input} 
                />

                <TextInput 
                placeholder="Password"
                placeholderTextColor="rgba(255,255,255,1.2)"
                underlineColorAndroid='transparent'
                secureTextEntry
                returnKeyType="go"
                style={styles.input} 
                />

                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 10,
        color: '#FFF',
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#4b5f82',
        paddingVertical: 15
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700'
    }
})