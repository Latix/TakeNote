import React, {Component } from 'react';
import {  Image } from 'react-native';
import {  Toast } from 'react-native-simple-toast';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text,Title, Fab, View, Icon, Button, Drawer } from 'native-base';

// const util = require('util');
const dataArray = [
    { title: "First Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
  ];

export default class Home extends Component {
    state = {
        active: false,
        showToast: false
    }
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
      var {navigate} = this.props.navigation;
      var {params} = this.props.navigation.state;
        return (
           
            <Container>
             
             
        <Content>
        {/* <Button success
        onPress={() =>
              Toast.show({
                text: "Wrong password!",
                buttonText: "Okay",
                type: "success",
                duration: 3000
              })}>
            <Text>Toast</Text>
          </Button> */}
          {/* <Text>{params.ID}</Text> */}
          </Content>
        <View style={{ flex: 1 }}>
          <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#4b5f83' }}
            position="bottomRight"
            onPress={() => navigate("AddNote",{ID:params.ID})}>
            <Icon name="add" />
            {/* <Button style={{ backgroundColor: '#34A34F' }}>
              <Icon name="logo-whatsapp" />
            </Button>
            <Button style={{ backgroundColor: '#3B5998' }}>
              <Icon name="logo-facebook" />
            </Button>
            <Button disabled style={{ backgroundColor: '#DD5144' }}>
              <Icon name="mail" />
            </Button> */}
          </Fab>
        </View>
      </Container>
        );
    }
}