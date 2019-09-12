import React, { Component } from 'react'
import {View,Text,Image,TouchableOpacity} from 'react-native'
import {Card,CardItem,Right} from 'native-base'

class SettingsScreen extends Component {
   
    render() {
        const {id,title,description}=this.props.singlePractice;
        return (
            <TouchableOpacity onPress={()=> this.props.navigation.navigate('PracticeDetails',{id:id})}>
                    <Card style={{marginLeft:5,marginRight:5}}>
                    <View style={{paddingLeft:7,paddingTop:5}}>

                            <Text style={{fontWeight:'500',fontSize:16}}>{title}</Text>

                        </View>
                    <CardItem style={{flexDirection:'column',flex:1}}>

                        <View style={{flex:1,flexDirection:'row'}}>
                            <Image style={{borderRadius:9,width:90,height:90,resizeMode:'cover'}} source={require('../../../assets/feed.jpg')} />
                            <Right style={{flex:1,alignItems:'flex-start',height:90,paddingHorizontal:9}}>

                                    <Text style={{flexShrink:1,flexWrap:'wrap'}}>{description}</Text>


                            </Right>

                    </View>

                    </CardItem>
                </Card>

            </TouchableOpacity>

        )
    }
}

export default SettingsScreen
