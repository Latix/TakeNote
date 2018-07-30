import React, {Component } from 'react';
import { TabNavigator } from "react-navigation";
import Home from '../../tabs/Home';
import Notes from '../../tabs/Notes';
import About from '../../tabs/About';
import Settings from '../../tabs/Settings';


var MainScreenNavigator = TabNavigator({
    Tab1: {screen: Home},
    Tab2: {screen: Notes},
    Tab3: {screen: About},
    Tab4: {screen: Settings}
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

