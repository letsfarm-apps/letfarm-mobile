import React from 'react';
import { StyleSheet, Text,FlatList,Platform,StatusBar} from 'react-native';
import HomeScreen from './HomeScreen'
import {Container,Content,Header,Left,Right,Icon, ListItem} from 'native-base'

import {DrawerNavigator} from 'react-navigation'

export default class App extends React.Component {
  render() {
    return (
      <AppDrawerNavigator/>
    );
  }
}

const CustomDrawerContentComponent=(props)=>{
  return(
    <Container>
      <Header style={[{backgroundColor:'#3a455c',height:90}, styles.androidHeader]}>
          <Left style={{flex:1, flexDirection:'row',alignItems:'center'}}>
            <Icon name="person" style={{color:'white'}}/>
            <Text style={{marginLeft:5,fontSize:22,color:'white'}}>Hello Mozo</Text>
          </Left>
      </Header>
      <Content>
          <FlatList
          data={[
            'Home','Categories','Supermarkets','Account','Cart'
          ]}
          renderItem={({item})=>(
            <ListItem noBorder>
              <Text>{item}</Text>
            </ListItem>
          )}
          />
          <FlatList
          style={{borderTopWidth:0.5,borderTopColor:'#f0f0f0'}}
          data={[
            'Wish List','Today Deals','Flash Sales','Sell '
          ]}
          renderItem={({item})=>(
            <ListItem noBorder>
              <Text>{item}</Text>
            </ListItem>
          )}
          />
      </Content>
    </Container>
  );

}

const AppDrawerNavigator=new DrawerNavigator({
  HomeScreen: {screen:HomeScreen}
},{
drawerPosition:'left',
contentComponent:CustomDrawerContentComponent,
drawerOpenRoute:'DrawerOpen',
drawerCloseRoute:'DrawerClose',
drawerToggleRoute:'DrawerToggle'
})
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  androidHeader:{
    ...Platform.select({
        android:{
            paddingTop:StatusBar.currentHeight
        }
    })
}
});
