import React, { Component } from 'react'
import { Font} from "expo";
import {View,Text,Platform,StatusBar}from 'react-native'
import {Icon,Header,Left,Body,Title,Right,Container,Content} from 'native-base'



class HomeScreen extends Component {
    state = {
        fontLoaded: false,
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
                                <Title>letsfarm</Title>
                            ) : null
                        }
                        
                    </Body>
                    <Right>
                        <Icon name="search" style={styles.rightIcon}/>
                    </Right>
                </Header>
            </Container>
        )
    }
}
const styles={
    leftContent:{
        flexDirection:'row'
    },
    headerStyle:{
        backgroundColor:"#3a455c",
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

export default HomeScreen;