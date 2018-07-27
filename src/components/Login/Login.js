import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, ImageBackground } from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component {
    render() {
        return (
          
            <ImageBackground
  source={require('../../../assets/icons/note.jpg')}
  style={{width: '100%', height: '100%'}}
> 
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image 
                    style={styles.logo}
                    source={require('../../../assets/icons/ic_user.png')}/>
                    <Text style={styles.title}>Note Taker Login</Text>
                    
                </View>
                <View style={styles.formContainer}>
                <LoginForm />
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
    }
});