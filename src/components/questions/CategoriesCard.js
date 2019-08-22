import React, { Component } from 'react'
import {View,Text,TouchableOpacity,Image} from 'react-native'

class CategoriesCard extends Component {
   
    render() {
        const {id,name}=this.props.singleCategory;
        return (
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Diseases',{id:id})}>
                <View style={{flex:1,padding:10}}>
                    <Image style={{borderRadius:50,width:100,height:100,resizeMode:'cover'}} source={require('../../../assets/pigs.jpg')} />
                    <View style={{flex:1,paddingTop:7}}>
                        <Text style={{textAlign:'center'}}>{name}</Text>

                    </View>

                </View>
            </TouchableOpacity>
        )
    }
}

export default CategoriesCard