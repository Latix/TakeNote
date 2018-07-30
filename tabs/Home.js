import React, {Component } from 'react';
import {  Image } from 'react-native';
import {  Toast } from 'react-native-simple-toast';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Fab, View, Icon, Button, Drawer } from 'native-base';

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
       
        return (
           
            <Container>
             
        {/* <Header /> */}
        <Content>
        <Button success
        onPress={() =>
              Toast.show({
                text: "Wrong password!",
                buttonText: "Okay",
                type: "success",
                duration: 3000
              })}>
            <Text>Toast</Text>
          </Button>
        <List>
            <ListItem thumbnail >
              <Left>
                <Thumbnail source={ require('../assets/icons/tab_notes.png')} style={{width: 22, height: 22}}/>
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
                <Button transparent textStyle={{color: "red"}}>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>

            <ListItem avatar>
              <Left>
                <Thumbnail source={ require('../assets/icons/tab_notes.png')} style={{width: 22, height: 22}}/>
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>

            <ListItem avatar>
              <Left>
                <Thumbnail source={ require('../assets/icons/tab_notes.png')} style={{width: 22, height: 22}}/>
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
          </List>
          </Content>
        <View style={{ flex: 1 }}>
          <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#4b5f83' }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}>
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