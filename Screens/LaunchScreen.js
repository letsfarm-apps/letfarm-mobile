import React from 'react';
import { StyleSheet, Text,FlatList,Platform,StatusBar} from 'react-native';
import HomeScreen from './HomeScreen'
import {Container,Content,Header,Left,Icon, ListItem} from 'native-base'

import {createDrawerNavigator,createAppContainer} from 'react-navigation'

const DrawerNavigatorExample = createDrawerNavigator({
  //Drawer Optons and indexing
  HomeScreen: { //Title
    screen: HomeScreen,
    navigationOptions: {
      drawerLabel: "Home Screen"
    }
  },
  
});
export default createAppContainer(DrawerNavigatorExample);