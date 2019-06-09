import React, { Component } from 'react'
import { Font} from "expo";
import {View,Text,Platform,StatusBar,Image} from 'react-native'
import {Card,CardItem,Container,Header,Right,Left,Icon,Body,Title,Input,Content} from 'native-base'

class Practices extends Component {
    state = {
        fontLoaded: false,
        title:'Practices'
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
                                <Title style={{color:'white'}}>{this.state.title}</Title>
                            ) : null
                        }
                        
                    </Body>
                    <Right>
                        <Icon name="search" style={styles.rightIcon}/>
                    </Right>
                </Header>
                <View style={{height:"10%",marginTop:5,flexDirection:'row', backgroundColor:'#f3f5f7',justifyContent:'space-between',marginLeft:5,marginRight:5,marginBottom:5}}>
                    <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',marginLeft:5,marginRight:5}}>                
                            <Icon name="search"  style={{fontSize:20,paddingTop:17}}/>
                            <Input style={{marginLeft:10}} placeholder="search..."/>                          
                    </View>
                    
                </View>
                <Content style={{backgroundColor:'#f3f5f7'}}>
                    
                        <Card style={{marginLeft:5,marginRight:5}}>
                            <View style={{paddingLeft:7,paddingTop:5}}>
                                  
                                  <Text style={{fontWeight:'500',fontSize:16}}>Feeding</Text>

                              </View>
                            <CardItem style={{flexDirection:'column',flex:1}}>
                                
                                <View style={{flex:1,flexDirection:'row'}}>
                                    <Image style={{borderRadius:9,width:90,height:90,resizeMode:'cover'}} source={require('../assets/feed.jpg')} />
                                    <Right style={{flex:1,alignItems:'flex-start',height:90,paddingHorizontal:9}}>
                                        
                                            <Text style={{flexShrink:1,flexWrap:'wrap'}}>The best way to feed your Animals</Text>
                                            
                                        
                                    </Right>
                                
                            </View>
                                
                            </CardItem>
                        </Card>
                        <Card style={{marginLeft:5,marginRight:5,marginTop:0}}>
                            <View style={{paddingLeft:7,paddingTop:5}}>
                                  
                                  <Text style={{fontWeight:'500',fontSize:16}}>Breeding</Text>

                              </View>
                            <CardItem style={{flexDirection:'column',flex:1}}>
                                
                                <View style={{flex:1,flexDirection:'row'}}>
                                    <Image style={{borderRadius:9,width:90,height:90,resizeMode:'cover'}} source={require('../assets/breeding.jpg')} />
                                    <Right style={{flex:1,alignItems:'flex-start',height:90,paddingHorizontal:9}}>
                                        
                                            <Text style={{flexShrink:1,flexWrap:'wrap'}}>The best way to breed your Animals</Text>
                                            
                                        
                                    </Right>
                                
                            </View>
                                
                            </CardItem>
                        </Card>
                        <Card style={{marginLeft:5,marginRight:5,marginTop:0}}>
                            <View style={{paddingLeft:7,paddingTop:5}}>
                                  
                                  <Text style={{fontWeight:'500',fontSize:16}}>Housing</Text>

                              </View>
                            <CardItem style={{flexDirection:'column',flex:1}}>
                                
                                <View style={{flex:1,flexDirection:'row'}}>
                                    <Image style={{borderRadius:9,width:90,height:90,resizeMode:'cover'}} source={require('../assets/housing.jpg')} />
                                    <Right style={{flex:1,alignItems:'flex-start',height:90,paddingHorizontal:9}}>
                                        
                                            <Text style={{flexShrink:1,flexWrap:'wrap'}}>The best way to house your Animals</Text>
                                            
                                        
                                    </Right>
                                
                            </View>
                                
                            </CardItem>
                        </Card>
                   
                    
                </Content>
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

export default Practices