import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, ImageBackground, StatusBar, TextInput, TouchableOpacity } from 'react-native';


export default class Register extends Component {
    state = {
        name: "Kamsi"
    }
    static navigationOptions = {
        title: 'Register',
        headerTintColor: 'white',
        headerStyle: {
            backgroundColor: '#4b5f83'
          },
          headerTitleStyle: { color: '#FFF' }
    };
    render() {
        var {navigate} = this.props.navigation;
        return (
            <ImageBackground
  source={require('../../assets/icons/note.jpg')}
  style={{width: '100%', height: '100%'}}
> 
            <View style={styles.container}>
                
                <View style={styles.containerForm}>
                 <StatusBar 
                barStyle="light-content"
            />

            <TextInput 
                placeholder="First Name"
                placeholderTextColor="rgba(255,255,255,2.2)"
                underlineColorAndroid='transparent'
                returnKeyType="next"
                autoCorrect={false}
                style={styles.input} 
                />

                <TextInput 
                placeholder="Last Name"
                placeholderTextColor="rgba(255,255,255,1.2)"
                underlineColorAndroid='transparent'
                returnKeyType="next"
                autoCorrect={false}
                style={styles.input} 
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

                <TouchableOpacity style={styles.buttonContainer} onPress={
                    () => this.state.name === "Kamsi"?navigate("First", {name: "Came From Login"}) : alert('Invalid Details!')
                }>
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
                </View>
            </View>
    </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#e6e6e6'
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        width: 100,
        height: 100
    },
    title: {
        color: '#FFF',
        marginTop: 10,
        width: 160,
        textAlign: 'center',
        opacity: 0.9
    },
    containerForm: {
        padding: 20,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(0,0,0,0.5)',
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
});