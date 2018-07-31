import React, {Component } from 'react';
import { Image, FlatList, ActivityIndicator,ListView,RefreshControl } from 'react-native';
import { Container, Header, Content, SwipeRow, Text,List, ListItem, Fab, View, Icon, Button, Drawer, Body, Left } from 'native-base';

// const util = require('util');

export default class Notes extends Component {
    state = {
        isLoading: true,
        dataSource: [],
        refreshing: false
    }
   
    static navigationOptions = {
        tabBarLabel: 'Notes',
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('../assets/icons/tab_notes.png')}
                style={{width: 22, height: 22, tintColor: 'white'}}
                >
            </Image>
        )
    };

    componentDidMount(){
        return fetch('http://192.168.8.245/TakeNote/ViewNote.php')
          .then((response) => response.json())
          .then((responseJson) => {
            let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            this.setState({
              isLoading: false,
              dataSource: ds.cloneWithRows(responseJson),
            }, function(){
    
            });
    
          })
          .catch((error) =>{
            console.error(error);
          });
      }

      GetNoteIDFunction=(id,title, note)=>{
        
        this.props.navigation.navigate('ViewNotes', { 

          ID : id,
          TITLE : title,
          NOTE : note

        });

   }

      _onRefresh = () => {
        this.setState({refreshing: true});
        fetch('http://192.168.8.245/TakeNote/ViewNote.php')
          .then((response) => response.json())
          .then((responseJson) => {
            let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            this.setState({
            refreshing: false,
              dataSource: ds.cloneWithRows(responseJson),
            }, function(){
    
            });
          })
          .catch((error) =>{
            console.error(error);
          });
      }


    render() {

        if(this.state.isLoading){
            return(
              <View style={{
                paddingVertical: 20,
                borderTopWidth: 1,
                borderColor: "#000"
              }}>
                <ActivityIndicator animating size="large" color="green"/>
              </View>
            )
          }
      
          return(
            <Container>
            {/* <Header /> */}
            <Content>
              <List
              refreshControl={
                <RefreshControl
                  refreshing={this.state.refreshing}
                  onRefresh={this._onRefresh}
                />
              }
              
                dataSource={this.state.dataSource}
                renderRow={data => 
                  <ListItem onPress={this.GetNoteIDFunction.bind(this,data.noteId, data.title, data.note)  
                  } 
                  style={{padding: 20}}>
                   <Left>
                  <Icon active name="information-circle" />
                  <Text> {data.title} </Text>
                  </Left>
                  <Body />
                  <Button small danger>
                  <Icon active  name="trash" />
                  </Button>
                  </ListItem>}
                renderLeftHiddenRow={data =>
                  <Button full onPress={() => alert(data.FirstName)}>
                    <Icon active name="information-circle" />
                  </Button>}
                renderRightHiddenRow={(data) =>
                  <Button full danger>
                    <Icon active name="trash" />
                  </Button>}
                leftOpenValue={75}
                rightOpenValue={-75}
              />
            </Content>
          </Container>
              
//             <View style={{flex: 1, paddingTop:20}}>
//             <ListView
     
//      dataSource={this.state.dataSource}

//     //  renderSeparator= {this.ListViewItemSeparator}
            
//      renderRow={ (rowData) => <Text > 

//                {rowData.FirstName} 
               
//                </Text> }

//    />
//               {/* <FlatList
//                 data={this.state.dataSource}
//                 renderItem={({item}) => <Text>{item.FirstName}, {item.LastName}</Text>}
//                 keyExtractor={(item, index) => index}
//               /> */}
//             </View>
//           );
       
        // return (
        //     <View style={
        //         {
        //             flex: 1,
        //             justifyContent: 'center',
        //             alignItems: 'center'
        //         }
        //     }>
        //        <Text style={{fontSize:30}}>
        //             This is tab 2
        //        </Text>
        //     </View>
         );
    }
}