import React, { Component } from 'react'
import {View,Text,Platform,StatusBar,ScrollView} from 'react-native'
import AntIcon from 'react-native-vector-icons/AntDesign'
import {Content,Container,Header,Left,Right,Icon,Picker,Input} from 'native-base'


class QuestionReplies extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selected: "key1"
      }
    }
    onValueChange(value: string) {
        this.setState({
          selected: value
        });
      }
   
    render() {
        return (
            <Container>
                <Header style={[styles.headerStyle,styles.androidHeader]}>
                    <Left>
                        <AntIcon onPress={()=>this.props.navigation.navigate("App")} name="left"  color="white" size={22}/>
                        
                    </Left>
                    <View style={{flex:1,marginLeft:5,justifyContent:'center'}}>
                        <Text style={{color:'white'}}>Q&A discussions</Text>

                    </View>
                </Header>
                <View style={{flexDirection:'row',paddingTop:5,paddingHorizontal:5,height:"20%"}}>
                    <View style={{width:"20%",margin:3,justifyContent:'flex-start'}}>
                        <AntIcon name="up"  color="grey" size={22}/>
                            <Text style={{fontSize:12}}>+13</Text>
                        <AntIcon name="down"  color="grey" size={22}/>
                    </View>
                    <View style={{flex:1}}>
                        
                            <Text style={{flexShrink:1,flexWrap:'wrap'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit </Text>
                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                <View style={{backgroundColor:'#2980b9',borderRadius:16, width:90,height:30,alignItems:'center',justifyContent:'center',marginTop:5}}>
                                    <Text style={{color:'white'}}>Disease</Text>
                                </View>
                                
                            </View>
                            <Text style={{flexShrink:1,flexWrap:'wrap',paddingTop:5}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit </Text>
                        

                    </View>

                </View>
                <View style={{paddingTop:5,height:"15%",alignItems:'flex-end'}}>

                    <Right style={{flexDirection:"row",position: 'absolute', right: 2}}>
                        <View>
                            <View style={{paddingTop:5}}>
                                <Text>Tony Mike</Text>
                            </View>
                            
                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                <View style={{justifyContent:'flex-start'}}> 
                                    <Text> 11 views</Text>
                                </View>
                                <View style={{justifyContent:'flex-end',marginLeft:5}}>
                                    <Text>12 hrs</Text>
                                </View>

                            </View>

                        </View>
                        <View style={{marginLeft:5}}>
                            <Icon name="md-contact" style={{color:'grey'}} />
                        </View>

                    </Right>

                </View>
                <View style={{height:"10%",marginTop:5,flexDirection:'row', backgroundColor:'#f3f5f7',justifyContent:'space-between',marginBottom:5}}>
                    <View style={{flex:1,justifyContent:'center'}}>                
                        <Text style={{paddingLeft:5}}>9 Answers</Text>                       
                    </View>
                    <View style={{width:"30%",flexDirection:'row',paddingRight:5}}>
                        <Picker
                            note
                            mode="dropdown"
                            selectedValue={this.state.selected}
                            onValueChange={this.onValueChange.bind(this)}
                            >
                            <Picker.Item label="Votes" value="key0" />
                            <Picker.Item label="Views" value="key1" />
                            <Picker.Item label="Recent" value="key2" />
                        </Picker>
                    </View>
                    
                    
                </View>
                <View  style={{flex:1}}>
                    <View style={{flexDirection:'row',paddingTop:5,paddingHorizontal:5}}>
                        <View style={{width:"20%",margin:3,justifyContent:'flex-start'}}>
                            <AntIcon name="up"  color="grey" size={22}/>
                            <Text style={{fontSize:12}}>+ 9</Text>
                            <AntIcon name="down"  color="grey" size={22}/>
                        </View>
                        <Content style={{flex:1}}>
                            
                                <Text style={{flexShrink:1,flexWrap:'wrap',padding:5}}> 
                                ipsum dolor sit amet, consectetur adipiscing elit
                                </Text>
                                <Text style={{flexShrink:1,flexWrap:'wrap',padding:5}}> 
                                ipsum dolor sit amet, consectetur adipiscing elit
                                </Text>
                                <Text style={{flexShrink:1,flexWrap:'wrap',padding:5}}> 
                                ipsum dolor sit amet, consectetur adipiscing elit
                                </Text>
                                <Text style={{flexShrink:1,flexWrap:'wrap',padding:5}}> 
                                ipsum dolor sit amet, consectetur adipiscing elit
                                </Text>
                                <Text style={{flexShrink:1,flexWrap:'wrap',padding:5}}> 
                                ipsum dolor sit amet, consectetur adipiscing elit
                                </Text>
                                <Text style={{flexShrink:1,flexWrap:'wrap',padding:5}}> 
                                ipsum dolor sit amet, consectetur adipiscing elit
                                </Text>
                                <Text style={{flexShrink:1,flexWrap:'wrap',padding:5}}> 
                                ipsum dolor sit amet, consectetur adipiscing elit
                                </Text>
                        
                                
                                
                            

                        </Content>

                    </View>
                

                </View>
                <View style={styles.footer}>
                    <Left style={{paddingLeft:5}}>
                        <Icon name="md-contact" style={{color:'grey'}} />

                    </Left>
                    <View style={{flex:1,flexDirection:'row',left:40,right:40,justifyContent:'space-evenly',position:'absolute'}}>                
                        <Left style={{width:"80%"}}>
                            <Input  placeholder="write reply...."/>  
                        </Left>     
                    
                        <Right style={{flex:1}}>
                            <Icon name="md-images" style={{color:'grey'}} />
                        </Right>                     
                    </View>
                    <Right style={{paddingRight:5}}>
                        <Icon name="md-send" style={{color:'grey'}} />
                    </Right>
                </View>
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
    footer:{
        height:"10%",
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'white',
        borderTopWidth:1,
        borderTopColor:'lightgray'
    },
    androidHeader:{
        ...Platform.select({
            android:{
                paddingTop:StatusBar.currentHeight
            }
        })
    }
}

export default QuestionReplies