import React, { Component } from 'react';
import {View,TouchableOpacity} from 'react-native';
import { Container, Header, Content, Textarea, Form,Input, Item, Button, Icon,Text } from "native-base";
// import btnPrimaryBg from './native-base-theme/components';
// import material from './native-base-theme/variables/material';

export default class AddNote extends Component {
    state = {
        title: '',
        note: ''
    }
    static navigationOptions = {
        title: 'Add Note',
        headerTintColor: 'white',
        headerStyle: {
            backgroundColor: '#4b5f83'
          },
          headerTitleStyle: { color: '#FFF' }
    };

    addNote = () => {
       
          fetch('http://192.168.8.245/TakeNote/addNote.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
            body: JSON.stringify({
              Note: this.state.title,
              Title: this.state.note
            })
          })
          .then((response) => response.json())
          .then((response) => alert(response))
        .catch(() => alert('Error Adding Note'));
       
      };
      
    render() {
        return (
            <Container>
            {/* <Header /> */}
            <Content padder>
              <Form>
              <Item regular>
            <Input 
                placeholder='Title' 
                onChangeText={ TextInputValue => this.setState({ title : TextInputValue }) }
            />
             </Item>
                <Textarea rowSpan={5} bordered 
                    placeholder="Note..." 
                    onChangeText={ TextInputValue => this.setState({ note : TextInputValue }) }
                    />
            <View style={{marginTop: 30, flex: 1, alignContent: 'center', justifyContent: 'center', backgroundColor: '#4b5f83'}}>
            <TouchableOpacity  onPress={this.addNote}>
          <Button success full iconLeft onPress={this.addNote}>
            <Icon name='add' />
            <Text>Add</Text>
          </Button>
          </TouchableOpacity>
          </View>
              </Form>
            </Content>
          </Container>
        );
    }
}

