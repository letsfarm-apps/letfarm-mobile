import React, { Component } from 'react'
import {Platform,StatusBar,Text, View} from 'react-native'
import {createAppContainer,createBottomTabNavigator} from 'react-navigation'
import QuestionsHome from '../questions/QuestionsHome'
import FarmerQuestions from '../questions/FarmerQuestions'
import {Header,Icon,Left,Right,Container} from 'native-base'
import AntIcon from 'react-native-vector-icons/AntDesign'
import { logout} from '../../utils/AuthUtil'

const UserDashboard =()=>(
    <View>
        <Text>DashBoard</Text>
    </View>
);

const AppTabNavigator=createBottomTabNavigator({
  Home:QuestionsHome,
  Dashboard: UserDashboard,
  Questions:FarmerQuestions
 },
 {
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      if (routeName === 'Home') {
        return (
          <Icon name="md-home" style={{color:tintColor}} size={24}/>
        );
      } else if(routeName=== "Dashboard") {
        return (
          <AntIcon name="dashboard" style={{color:tintColor}} size={24}/>
        );
      }else{
          return (
              <Icon name="chatboxes" style={{color:tintColor}} size={24}/>
          );
      }
    },
  }),
  tabBarOptions: {
    activeTintColor: '#FF6F00',
    inactiveTintColor: '#263238',
    showLabel:true
  },
}

 );

const NavContainer = createAppContainer(AppTabNavigator);

class HomeScreen extends Component {
    static router = NavContainer.router;
    state = {
        title:'LetsFarm'
    };

    render() {
        return (
          <Container>
              <Header style={[styles.headerStyle,styles.androidHeader]}>

                     <Left>
                        <Text style={{color:'white',fontSize:16}}>{this.state.title}</Text>
                      </Left>
                    <Right>
                        <AntIcon name="logout" style={styles.rightIcon} onPress={()=>logout(this.props)} size={20}/>
                    </Right>
                </Header>
             <NavContainer navigation={this.props.navigation} />

          </Container>
        );
    }
}



const styles={
    leftContent:{
        flexDirection:'row'
    },
    headerStyle:{
        backgroundColor:"#2980b9",
        height:90,
        borderBottomColor:"#757575"
    },
    leftIcon:{
        color:"#fff"

    },
    headerText:{
        fontSize:14,
        color:'white',
        marginRight: 10
    },

    rightIcon:{
        color:"#fff",
    },
    searchContent:{
        position:'absolute',
        left:0,
        right:0,
        top:90,
        height:70,
        backgroundColor:"#3a455c",
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:5

    },
    androidHeader:{
        ...Platform.select({
            android:{
                paddingTop:StatusBar.currentHeight
            }
        })
    }
}


export default HomeScreen
