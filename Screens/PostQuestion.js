import React, { Component } from 'react'
import {View,Text,Platform,StatusBar,ScrollView} from 'react-native'
import AntIcon from 'react-native-vector-icons/AntDesign'
import {Content,Container,Header,Left,Right,Icon,Picker,Input,Form,Item,Label} from 'native-base'

class PostQuestion extends Component {
   
    render() {
        return (
            <Container>
                <Header style={[styles.headerStyle,styles.androidHeader]}>
                    <Left>
                        <View style={{borderColor:'white',borderRadius:30,borderWidth:1,justifyContent:'center',alignItems:'center'}}>
                            <Text style={{color:'white',padding:6}}>0%</Text>
                        </View>
                        
                    </Left>
                    <View style={{flex:1,justifyContent:'center'}}>
                        <Text style={{color:'white'}}>New Question</Text>

                    </View>
                </Header>
                <Content style={{flex:1,paddingTop:10}}>
                    <View style={{flexDirection:'row'}}>
                        <View style={{width:'20%',justifyContent:'center',alignItems:'center',paddingHorizontal:7,paddingTop:12}}>
                            <View style={{borderColor:'#9ddcff',  borderRadius:30,borderWidth:1,width:40,height:40,justifyContent:'center',alignItems:'center'}}>
                                <Text style={{color:'#9ddcff',padding:5}}>1</Text>
                            </View>

                        </View>
                               
                        <View style={{flex:1,justifyContent:'center',paddingLeft:10}}>
                            <Form style={{paddingBottom:6}}>
                                <Item floatingLabel>
                                    <Label>Questions</Label>
                                    <Input style={{paddingTop:6}} />
                                </Item>
                            </Form>

                        </View>

                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View style={{width:'20%',justifyContent:'center',alignItems:'center',paddingHorizontal:7,paddingTop:12}}>
                            <View style={{borderColor:'#9ddcff',  borderRadius:30,borderWidth:1,width:40,height:40,justifyContent:'center',alignItems:'center'}}>
                                <Text style={{color:'#9ddcff',padding:5}}>2</Text>
                            </View>

                        </View>
                               
                        <View style={{flex:1,justifyContent:'center',paddingLeft:10}}>
                            <Form style={{paddingBottom:6}}>
                                <Item floatingLabel>
                                    <Label>Description</Label>
                                    <Input style={{paddingTop:6}} />
                                </Item>
                            </Form>

                        </View>

                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View style={{width:'20%',justifyContent:'center',alignItems:'center',paddingHorizontal:7,paddingTop:12}}>
                            <View style={{borderColor:'#9ddcff',  borderRadius:30,borderWidth:1,width:40,height:40,justifyContent:'center',alignItems:'center'}}>
                                <Text style={{color:'#9ddcff',padding:5}}>3</Text>
                            </View>

                        </View>
                               
                        <View style={{flex:1,justifyContent:'center',paddingLeft:10}}>
                            <Form >
                                <Item floatingLabel>
                                    <Label>Relevant Tags</Label>
                                    <Input style={{paddingTop:6}}/>
                                </Item>
                            </Form>

                        </View>

                    </View>
                    <View style={{flexDirection:'row',marginTop:25}}>                
                        <Left style={{flexDirection:'row',marginLeft:15}}>
                                <Icon name="md-images" style={{color:'#2980b9'}} /> 
                                <Text style={{paddingHorizontal:4}}> Insert</Text>
                        </Left>     
                    
                        <Right>
                            <View style={{backgroundColor:'#2980b9', width:90,height:30,alignItems:'center',justifyContent:'center',marginRight:15}}>
                                <Text style={{color:'white'}}>Post</Text>
                            </View>
                        </Right>                     
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
 
   
    androidHeader:{
        ...Platform.select({
            android:{
                paddingTop:StatusBar.currentHeight
            }
        })
    }
}
export default PostQuestion