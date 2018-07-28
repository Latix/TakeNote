import React, {Component } from 'react';
import { View, Text,Image } from 'react-native';
//import { Card, Button } from 'react-native-material-design';

// const util = require('util');

export default class FirstScreen1 extends Component {
    static navigationOptions = {
        tabBarLabel: 'Home',
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('../assets/icons/tab_home.png')}
                style={{width: 22, height: 22, tintColor: 'white'}}
                >
            </Image>
        )
    };
    render() {
       
        return (
        //     <View>
        //     <Card>
        //         <Card.Media
        //             image={<Image source={require('../assets/icons/note.jpg')} />}
        //             overlay
        //         />
        //         <Card.Body>
        //             <Text>Some text to go in the body.</Text>
        //         </Card.Body>
        //         <Card.Actions position="right">
        //             <Button value="ACTION" />
        //         </Card.Actions>
        //     </Card>
        // </View>
            <View style={
                {
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }
            }>
               <Text style={{fontSize:30}}>
                    This is tab 1
               </Text>
            </View>
        );
    }
}