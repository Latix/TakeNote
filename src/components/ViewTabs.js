import React, {Component } from 'react';
import { TabNavigator } from "react-navigation";
import FirstScreen1 from '../../tabs/FirstScreen1';
import SecondScreen2 from '../../tabs/SecondScreen2';

var MainScreenNavigator = TabNavigator({
    Tab1: {screen: FirstScreen1},
    Tab2: {screen: SecondScreen2}
  },
  {
      tabBarPosition: 'bottom',
      swipeEnabled: true,
      animationEnabled: true,
      
	tabBarOptions: {
        showIcon: true,
      showLabel: true,
        indicatorStyle: {
            backgroundColor: 'white',
            width: 0,
            height: 0,
            padding: 0,
            margin: 0
          },
        activeTintColor: '#FFF',
        inactiveTintColor: '#FFF',
       // indicatorStyle={ backgroundColor: 'blue' },
		style: {
            backgroundColor: '#4b5f83',
            
		},
	} 
  }
);
  MainScreenNavigator.navigationOptions = {
        title: 'Take Note',
        headerTintColor: 'white',
        headerStyle: {
            backgroundColor: '#4b5f83'
          },
          headerTitleStyle: { color: '#FFF' }
  }
  
  export default MainScreenNavigator;

