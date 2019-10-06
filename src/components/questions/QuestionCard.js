import React, { Component } from 'react'
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native'
import {CardItem,Icon} from 'native-base'
import { NavigationActions} from 'react-navigation';
import moment from 'moment'

class QuestionCard extends Component {
    constructor(props){
        super(props);
    }
  


    render() {
        const {id,body,title,owner,createdAt}=this.props.singleQuestion;

        return (
            <TouchableOpacity onPress={()=> this.props.navigation.navigate('QuestionReplies',{id:id})}>
                <CardItem style={{flexDirection:'row'}}>
                    <View style={{width:"15%"}}>
                        <Text>20+</Text>
                        <View style={{flexDirection:'row'}}>
                            <Text>20+
                            <Icon name="ios-chatbubbles" style={{color:'grey',fontSize:16}}/>
                            </Text>


                        </View>
                    </View>
                    <View style={{flex:1,borderBottomColor:'grey',borderBottomWidth:1,flexDirection:'row'}}>
                        <View style={{marginLeft:3,marginRight:3,width:"70%"}}>
                            <Text>{body}</Text>
                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                <View style={{backgroundColor:'#00cec9',borderRadius:16, width:85,height:25,alignItems:'center',justifyContent:'center',marginTop:5}}>
                                    <Text style={{color:'white'}}>Rabbits</Text>
                                </View>
                                <View style={{backgroundColor:'#00cec9',borderRadius:16, width:85,height:25,alignItems:'center',justifyContent:'center',marginTop:5,marginBottom:5}}>
                                    <Text style={{color:'white'}}>Diseases</Text>
                                </View>

                            </View>
                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                <View style={{flexDirection:'row'}}>
                                     
                                   <Text style={{color:'blue', fontSize:12}}>
                                   <Icon name="calendar" style={{color:'blue', fontSize:12,margin:6}}/>{"  "}
                                        {createdAt?  moment(createdAt, "YYYYMMDD").fromNow():''}
                                    </Text>
                                    
                                </View>
                                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'flex-end'}}>
                                    <Text style={{marginLeft:0}}>
                                    <Icon name="eye" style={{color:'grey',fontSize:12}}/>{" "}
                                    100</Text>
                                </View>

                            </View>

                        </View>
                        <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center',marginLeft:5}}>
                            <Text style={{padding:2}}>{owner.name}</Text>
                            <Icon name="md-contact" style={{color:'grey'}} />
                        </View>

                    </View>
                </CardItem>

            </TouchableOpacity>

        );
    }
}

export default QuestionCard
