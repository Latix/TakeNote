import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, ImageBackground, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component {
    state = {
        username: '',
        password: '',
        Id: ''
    }
    static navigationOptions = {
        title: 'Login',
        headerTintColor: 'white',
        headerStyle: {
            backgroundColor: '#4b5f83'
          },
          headerTitleStyle: { color: '#FFF' }
    };
    loginUser = () => {
       
        fetch('http://192.168.8.245/TakeNote/login.php', {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
          body: JSON.stringify({
            Username: this.state.username,
            Password: this.state.password
          })
        })
        .then((response) => response.json())
        .then((response) => {
            // If server response message same as Data Matched
            this.setState({Id: response})
            this.props.navigation.navigate('ViewTabs', { Email: this.state.username,ID: this.state.Id });
    //    if(response === 'Data Matched')
    //    {

    //        //Then open Profile activity and send user email to profile activity.
           
           

    //    }
    //    else{

    //      Alert.alert(response);
    //    }
        })
      .catch(() => alert('Invalid Entry!'));
     
    };
    render() {
        var {navigate} = this.props.navigation;
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
                <View style={styles.containerForm}>
                 <StatusBar 
                barStyle="light-content"
            />
                <TextInput 
                placeholder="username or email"
                placeholderTextColor="rgba(255,255,255,1.2)"
                underlineColorAndroid='transparent'
                returnKeyType="next"
                autoCapitalize="none"
                onChangeText={TextValue => this.setState({username:TextValue}) }
                autoCorrect={false}
                style={styles.input} 
                />

                <TextInput 
                placeholder="Password"
                placeholderTextColor="rgba(255,255,255,1.2)"
                underlineColorAndroid='transparent'
                secureTextEntry
                autoCapitalize="none"
                onChangeText={TextValue => this.setState({password:TextValue}) }
                returnKeyType="go"
                style={styles.input} 
                />
                
                <TouchableOpacity style={styles.buttonContainer} onPress={this.loginUser}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.register} onPress={
                    () => navigate("Register",{})
                }>
                <Text style={styles.registerText}>Sign Up Here!</Text>
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
        padding: 20
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
    },
    register:{
       flexDirection: 'row',
       justifyContent: 'flex-end',
       marginTop: 10
    },
    registerText:{
        color: '#FFF'
    }
    
});