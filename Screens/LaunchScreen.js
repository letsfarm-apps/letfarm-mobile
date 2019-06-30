
import Diseases from './Diseases'
import React, { Component } from 'react'
import Practices from './Practices'
import Questions from './FarmerQuestions'
import {Dimensions } from 'react-native'
import HomeScreen from './HomeScreen'
import QuestionReplies from './QuestionReplies'
import PostQuestion from './PostQuestion'
import MenuDrawer from './MenuDrawer'

import {createDrawerNavigator,createAppContainer} from 'react-navigation'
const WIDTH=Dimensions.get('window').width

const DrawerConfig={
  drawerWidth:WIDTH*0.83,
  contentComponent:({navigation})=>{
    return(
      <MenuDrawer navigation={navigation }/>

    );

  }
}

const DrawerNavigatorExample = createDrawerNavigator({
  HomeScreen : { //Title
    screen: HomeScreen ,
    navigationOptions: {
      drawerLabel: "Home"
    }
  },
  Questions : { //Title
    screen: Questions ,
    navigationOptions: {
      drawerLabel: "Questions   & Answers"
    }
  },
  QuestionReplies : { //Title
    screen: QuestionReplies ,
    navigationOptions: {
      drawerLabel: "Questions   & Answers"
    }
  },
  Practices : { //Title
    screen: Practices ,
    navigationOptions: {
      drawerLabel: "Farming Practices"
    }
  },
  Diseases : { //Title
    screen: Diseases ,
    navigationOptions: {
      drawerLabel: "Diseases"
    }
  },
  
},
DrawerConfig
);
export default createAppContainer(DrawerNavigatorExample);