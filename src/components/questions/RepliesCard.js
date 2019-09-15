import React, { Component } from 'react'
import {View,ActivityIndicator,Text} from 'react-native'


class RepliesCard extends Component {
   

    render() {
        const {body}=this.props.reply;
        return (
            <View style={{padding:5}}>
                <Text style={{flexShrink:1,flexWrap:'wrap'}}> 
                     {body}
                </Text>
            </View>
        )
    }
}

export default RepliesCard
