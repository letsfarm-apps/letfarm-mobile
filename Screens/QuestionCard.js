import React, { Component } from 'react'
import {View,Text,TouchableOpacity} from 'react-native'
import {CardItem,Icon} from 'native-base'
<<<<<<< HEAD
class QuestionCard extends Component {
    constructor(props){
        super(props)
        
    }
    
=======
import {withNavigation} from 'react-navigation'
class QuestionCard extends Component {
    constructor(props){
        super(props)
        this.loadAnswers=this.loadAnswers.bind(this)
    }
    loadAnswers(){
        this.props.navigation.navigate('Answers')
    }
>>>>>>> af780c2a13da81a8f3b68ecdada8d7d1caa779ac
     
    render() {
        const {content,asker,views,count}=this.props.singleQuestion;
      


        return (
<<<<<<< HEAD
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Answers')}>
=======
            <TouchableOpacity onPress={this.loadAnswers}>
>>>>>>> af780c2a13da81a8f3b68ecdada8d7d1caa779ac
                 <CardItem style={{flexDirection:'row'}}>
                    <View style={{width:"15%"}}>
                        <Text>20+</Text>
                        <View style={{flexDirection:'row'}}>
                            <Text>
                                {count}+{  }
                                <Icon name="ios-chatbubbles" style={{color:'grey',fontSize:15}}/>
                            </Text>                           
                        </View>
                    </View>
                    <View style={{flex:1,borderBottomColor:'grey',borderBottomWidth:1,flexDirection:'row'}}>
                        <View style={{marginLeft:5,marginRight:5,width:"60%"}}>
                            <Text>{content}</Text>
                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                <View style={{backgroundColor:'#00cec9',borderRadius:16, width:70,height:30,alignItems:'center',justifyContent:'center',marginTop:5}}>
                                    <Text style={{color:'white'}}>Rabbits</Text>
                                </View>
                                <View style={{backgroundColor:'#00cec9',borderRadius:16, width:70,height:30,alignItems:'center',justifyContent:'center',marginTop:5,marginBottom:5}}>
                                    <Text style={{color:'white'}}>Diseases</Text>
                                </View>
                                
                            </View>
                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}> 
                                    <Text style={{color:'blue', fontSize:12,marginLeft:0}}> 
                                    <Icon name="calendar" style={{color:'blue', fontSize:16}}/>{ }
                                    11 weeks</Text>
                                </View>
                                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'flex-end'}}>
                                    <Text style={{marginLeft:0}}>
                                    <Icon name="eye" style={{color:'grey',fontSize:16}}/>{ }
                                    {views}</Text>
                                </View>

                            </View>

                        </View>
                        <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center',marginLeft:10}}>
                            <Text style={{padding:6}}>{asker}</Text>
                            <Icon name="person" style={{color:'grey',fontSize:16}}  />
                        </View>

                    </View>
                </CardItem>
            </TouchableOpacity>
            
        );
    }
}

export default QuestionCard