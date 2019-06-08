import React, { Component } from 'react'
import {View,Text,SafeAreaView,Platform,StatusBar} from 'react-native'
import {createMaterialTopTabNavigator,createAppContainer} from 'react-navigation'
import QuestionsHome from './QuestionsHome'
import { Font} from "expo";
import FarmerQuestions from './FarmerQuestions'
import {Header,Icon,Left,Body,Title,Right,Container} from 'native-base'


class HomeScreen extends Component {
    state = {
        fontLoaded: false,
        title:'LetsFarm'
      }
    async componentWillMount() {
        await Font.loadAsync({
          Roboto: require("native-base/Fonts/Roboto.ttf"),
          Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
        });
        this.setState({ fontLoaded: true });
        
      }

    render() {
        return (
          <Container>
              <Header style={[styles.headerStyle,styles.androidHeader]}>
                    <Left>
                        <Icon onPress={()=>this.props.navigation.openDrawer()} name="md-menu" style={styles.leftIcon}/>
                    
                    </Left>
                    <Body>
                        {
                            this.state.fontLoaded ? (
                                <Title>{this.state.title}</Title>
                            ) : null
                        }
                        
                    </Body>
                    <Right>
                        <Icon name="search" style={styles.rightIcon}/>
                    </Right>
                </Header>
             <NavContainer/>

          </Container>
        );
    }
}

const AppTabNavigator=createMaterialTopTabNavigator({
    QuestionsHome:{
        screen:QuestionsHome,
        navigationOptions:{
            tabBarLabel:'Home',
            tabBarIcon:({tintColor})=>(
                <Icon name="md-home" style={{color:tintColor}} size={24}/>

            )
        }
    },
    FarmerQuestions:{
        screen:FarmerQuestions,
        navigationOptions:{
            tabBarLabel:'Questions',
            tabBarIcon:({tintColor})=>(
                <Icon name="chatboxes" style={{color:tintColor}} size={24}/>


            )
        }
    }

},{
    initialRouteName:'QuestionsHome',
    tabBarOptions:{
        activeTintColor:'orange',
        inactiveTintColor:'white',
        shifting:true,
        
        style:{
            backgroundColor:'#2980b9',
            borderBottomWidth:0.5,
            borderBottomColor:'grey'
        },
        indicatorStyle:{
            height:0
        },
        showIcon:true,
        showLabel:false,
        activeBackgroundColor:'orange'
        
        
    }
    
});

const NavContainer = createAppContainer(AppTabNavigator);

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
        color:"#fff"

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