import React, { Component } from 'react'
import {withNavigation} from 'react-navigation'
import {View,Text,} from 'react-native'


class Answers extends Component {

    render() {
        return (
            <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
                <Text>Answers</Text>
            </View>
        );
    }
}

export default withNavigation(Answers)