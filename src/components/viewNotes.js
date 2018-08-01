import React, { Component } from 'react';
import {View,TouchableOpacity,TextInput} from 'react-native';
import { Container, Header, Content, Textarea, Form,Input, Item, Button, Icon,Text } from "native-base";
// import btnPrimaryBg from './native-base-theme/components';
// import material from './native-base-theme/variables/material';

export default class ViewNotes extends Component {
    state = {
        Id:'',
        title: '',
        note: ''
    }

  

    static navigationOptions = {
        title: 'Note',
        headerTintColor: 'white',
        headerStyle: {
            backgroundColor: '#4b5f83'
          },
          headerTitleStyle: { color: '#FFF' }
    };

    componentDidMount(){
      // Received Note Details Sent From Previous Activity and Set Into State.
      this.setState({ 
        Id : this.props.navigation.state.params.ID,
        title : this.props.navigation.state.params.TITLE,
        note: this.props.navigation.state.params.NOTE
      })

     }

    updateNote = () => {
       
          fetch('http://192.168.8.245/TakeNote/UpdateNote.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
            body: JSON.stringify({
              note: this.state.note,
              title: this.state.title,
              note_id: this.state.Id
            })
          })
          .then((response) => response.json())
          .then((response) => alert(response))
        .catch(() => alert('Error Updating Note'));
       
      };
      
    render() {
        return (
            <Container>
            {/* <Header /> */}
            <Content padder>
              <Form>
              <Item regular>
            <Input 
                value={this.state.title}
                onChangeText={ TextInputValue => this.setState({ title : TextInputValue }) }
            />
             </Item>
                <Textarea rowSpan={5} bordered 
                    value={this.state.note}
                    onChangeText={ TextInputValue => this.setState({ note : TextInputValue }) }
                    />
            <View style={{marginTop: 30, flex: 1, alignContent: 'center', justifyContent: 'center', backgroundColor: '#4b5f83'}}>
            <TouchableOpacity  onPress={this.updateNote}>
          <Button success full iconLeft onPress={this.updateNote}>
            <Icon name='add' />
            <Text>Update</Text>
          </Button>
          </TouchableOpacity>
          </View>
              </Form>
            </Content>
          </Container>
        );
    }
}