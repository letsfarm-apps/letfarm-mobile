import React, { Component } from 'react'
import {View,Text,Platform,StatusBar,Image} from 'react-native'


import {Content,Container,Header,Left,Icon,Right} from 'native-base'

class PracticeDetails extends Component {
    state = {
        fontLoaded: false,
        title:'Practice Details'
      }


    render() {
        const { goBack } = this.props.navigation;
        return (
            <Container>
                <Header style={[styles.headerStyle,styles.androidHeader]}>
                    <Left>
                        <Icon onPress={()=>this.props.navigation.navigate("Practices")} name="arrow-back" style={styles.leftIcon}/>

                    </Left>
                    <View style={{flex:1,marginLeft:5,justifyContent:'center'}}>
                        <Text style={{color:'white'}}>Practice Details</Text>

                    </View>


                    </Header>
                    <Content>

                        <View style={styles.ImageContainer}>
                           <Image source={require('../../../assets/pfarm.jpg')} style={styles.imageStyl}  />
                           <View style={{position: 'absolute', top: 0, left: 5, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'flex-start'}}>
                              <Text style={{color:'white',fontSize:18,fontWeight:'500'}}>Feeding-poultry</Text>
                            </View>



                         </View>
                         <View style={{paddingTop:5,paddingLeft:5,paddingRight:5}}>
                            <Text style={{flexShrink:1,flexWrap:'wrap'}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            </Text>
                         </View>
                         <View style={{flexDirection:'row',paddingTop:10,paddingLeft:5}}>
                             <View>
                                <Image  style={{height: 100, width:100,}} source={require('../../../assets/poultry.jpg')} />
                             </View>
                             <Right style={{flex:1,paddingHorizontal:10,paddingRight:5}}>
                                <Text style={{flexWrap:'wrap'}}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                </Text>

                             </Right>

                         </View>
                         <View style={{paddingTop:10,paddingLeft:5,paddingRight:5}}>
                            <Text style={{flexShrink:1,flexWrap:'wrap'}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            </Text>
                         </View>
                    </Content>


            </Container>
        )
    }
}

const styles={
    imageStyl: {
    flexGrow:1,
    width:"100%",
    height:200,
    alignItems: 'center',
    justifyContent:'center',
  },
     ImageContainer:{
         flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
    },
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

export default PracticeDetails
