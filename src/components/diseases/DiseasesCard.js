import React, { Component } from 'react'
import {View,Text,TouchableOpacity} from 'react-native'

class DiseasesCard extends Component {
   
    render() {
        const {title,description}=this.props.singleDisease;
        return (
            <TouchableOpacity onPress={()=> this.props.navigation.navigate('DiseaseDetails')}>
                <View style={{flex:1,borderBottomWidth:0.5,borderBottomColor:'grey',paddingTop:10,paddingBottom:10,paddingLeft:5,paddingRight:5}}>
                    <View style={{paddingHorizontal:5}}>
                        <Text style={{fontWeight:'bold',flexWrap:'wrap'}}>{title}</Text>
                    </View>
                    <View style={{paddingHorizontal:5,paddingTop:5}}>
                        <Text style={{flexWrap:'wrap'}}>{description}</Text>
                    </View>
                    
                </View> 
            </TouchableOpacity>
)
    }
}

export default DiseasesCard