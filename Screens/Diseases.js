import React, { Component } from 'react'
import { Font} from "expo";
import {View,Text,Platform,StatusBar,Image} from 'react-native'
import {Card,CardItem,Container,Header,Right,Left,Icon,Body,Title,Input,Content} from 'native-base'

class Diseases extends Component {
    state = {
        fontLoaded: false,
        title:'Diseases'
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
                <Content>
                    <Card style={{marginLeft:5,marginRight:5}}>
                       <View style={{flex:1,borderBottomWidth:0.5,borderBottomColor:'grey',paddingTop:10,paddingBottom:10,paddingLeft:5,paddingRight:5}}>
                            <View style={{paddingHorizontal:5}}>
                                <Text style={{fontWeight:'bold',flexWrap:'wrap'}}>Bloat</Text>
                            </View>
                            <View style={{paddingHorizontal:5,paddingTop:5}}>
                                <Text style={{flexWrap:'wrap'}}>The incidence of bloat in cattle grazing legumes is well documented</Text>
                            </View>
                            
                        </View> 
                        <View style={{flex:1,borderBottomWidth:0.5,borderBottomColor:'grey',paddingTop:10,paddingBottom:10,paddingLeft:5,paddingRight:5}}>
                            <View style={{paddingHorizontal:5}}>
                                <Text style={{fontWeight:'bold',flexWrap:'wrap'}}>Bloat</Text>
                            </View>
                            <View style={{paddingHorizontal:5,paddingTop:5}}>
                                <Text style={{flexWrap:'wrap'}}>The incidence of bloat in cattle grazing legumes is well documented</Text>
                            </View>
                            
                        </View>
                        <View style={{flex:1,borderBottomWidth:0.5,borderBottomColor:'grey',paddingTop:10,paddingBottom:10,paddingLeft:5,paddingRight:5}}>
                            <View style={{paddingHorizontal:5}}>
                                <Text style={{fontWeight:'bold',flexWrap:'wrap'}}>Bloat</Text>
                            </View>
                            <View style={{paddingHorizontal:5,paddingTop:5}}>
                                <Text style={{flexWrap:'wrap'}}>The incidence of bloat in cattle grazing legumes is well documented</Text>
                            </View>
                            
                        </View>
                        <View style={{flex:1,borderBottomWidth:0.5,borderBottomColor:'grey',paddingTop:10,paddingBottom:10,paddingLeft:5,paddingRight:5}}>
                            <View style={{paddingHorizontal:5}}>
                                <Text style={{fontWeight:'bold',flexWrap:'wrap'}}>Bloat</Text>
                            </View>
                            <View style={{paddingHorizontal:5,paddingTop:5}}>
                                <Text style={{flexWrap:'wrap'}}>The incidence of bloat in cattle grazing legumes is well documented</Text>
                            </View>
                            
                        </View>
                        <View style={{flex:1,borderBottomWidth:0.5,borderBottomColor:'grey',paddingTop:10,paddingBottom:10,paddingLeft:5,paddingRight:5}}>
                            <View style={{paddingHorizontal:5}}>
                                <Text style={{fontWeight:'bold',flexWrap:'wrap'}}>Bloat</Text>
                            </View>
                            <View style={{paddingHorizontal:5,paddingTop:5}}>
                                <Text style={{flexWrap:'wrap'}}>The incidence of bloat in cattle grazing legumes is well documented</Text>
                            </View>
                            
                        </View>
                        <View style={{flex:1,borderBottomWidth:0.5,borderBottomColor:'grey',paddingTop:10,paddingBottom:10,paddingLeft:5,paddingRight:5}}>
                            <View style={{paddingHorizontal:5}}>
                                <Text style={{fontWeight:'bold',flexWrap:'wrap'}}>Bloat</Text>
                            </View>
                            <View style={{paddingHorizontal:5,paddingTop:5}}>
                                <Text style={{flexWrap:'wrap'}}>The incidence of bloat in cattle grazing legumes is well documented</Text>
                            </View>
                            
                        </View>
                        <View style={{flex:1,borderBottomWidth:0.5,borderBottomColor:'grey',paddingTop:10,paddingBottom:10,paddingLeft:5,paddingRight:5}}>
                            <View style={{paddingHorizontal:5}}>
                                <Text style={{fontWeight:'bold',flexWrap:'wrap'}}>Bloat</Text>
                            </View>
                            <View style={{paddingHorizontal:5,paddingTop:5}}>
                                <Text style={{flexWrap:'wrap'}}>The incidence of bloat in cattle grazing legumes is well documented</Text>
                            </View>
                            
                        </View>
                        <View style={{flex:1,borderBottomWidth:0.5,borderBottomColor:'grey',paddingTop:10,paddingBottom:10,paddingLeft:5,paddingRight:5}}>
                            <View style={{paddingHorizontal:5}}>
                                <Text style={{fontWeight:'bold',flexWrap:'wrap'}}>Bloat</Text>
                            </View>
                            <View style={{paddingHorizontal:5,paddingTop:5}}>
                                <Text style={{flexWrap:'wrap'}}>The incidence of bloat in cattle grazing legumes is well documented</Text>
                            </View>
                            
                        </View>
                        <View style={{flex:1,borderBottomWidth:0.5,borderBottomColor:'grey',paddingTop:10,paddingBottom:10,paddingLeft:5,paddingRight:5}}>
                            <View style={{paddingHorizontal:5}}>
                                <Text style={{fontWeight:'bold',flexWrap:'wrap'}}>Bloat</Text>
                            </View>
                            <View style={{paddingHorizontal:5,paddingTop:5}}>
                                <Text style={{flexWrap:'wrap'}}>The incidence of bloat in cattle grazing legumes is well documented</Text>
                            </View>
                            
                        </View>
                        <View style={{flex:1,borderBottomWidth:0.5,borderBottomColor:'grey',paddingTop:10,paddingBottom:10,paddingLeft:5,paddingRight:5}}>
                            <View style={{paddingHorizontal:5}}>
                                <Text style={{fontWeight:'bold',flexWrap:'wrap'}}>Bloat</Text>
                            </View>
                            <View style={{paddingHorizontal:5,paddingTop:5}}>
                                <Text style={{flexWrap:'wrap'}}>The incidence of bloat in cattle grazing legumes is well documented</Text>
                            </View>
                            
                        </View>
                        
                        

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

export default Diseases