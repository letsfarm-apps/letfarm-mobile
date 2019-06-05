
import React, { Component } from 'react'
import {View,Text,StyleSheet,TouchableOpacity,Image,ScrollView,Dimensions} from 'react-native'

class MenuDrawer extends Component {
    navLink(nav,text){
        return(
            <TouchableOpacity style={{height:50}} onPress={()=> this.props.navigation.navigate(nav)}>
                <Text style={styles.link}>{text}</Text>

            </TouchableOpacity>

        );
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scroller}>
                <View style={styles.topLinks}>
                    <View style={styles.profile}>
                        <View style={styles.imgView}>
                            <Image style={styles.img} source={require('../assets/son.jpg')}/>

                        </View>
                        <View styles={styles.profileText}>
                            <Text style={styles.name}>Wamozo Cosmas</Text>

                        </View>

                    </View>

                </View>
                <View style={styles.bottomLinks}>
                    {this.navLink('Diseases','Diseases')}
                    {this.navLink('Practices','Farming Practices')}
                    {this.navLink('Questions','Questions & Answers')}

                </View>
                </ScrollView>
                <View style={styles.footer}>
                    <Text style={styles.description}>
                        letsfarm app
                    </Text>
                    <Text style={styles.version}> v1.0.0</Text>
                </View>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'grey'
    },
    scroller:{
        flex:1,
        backgroundColor:'lightgray'
    },
    topLinks:{
        height:160,
        backgroundColor:'black',
        
    },
    img:{
        height:70,
        width:70,
        borderRadius:50
    },
    profileText:{
        flexDirection:'column',
        justifyContent:'center'

    },
    name:{
        fontSize:20,
        paddingBottom:5,
        color:'white',
        textAlign:'center',
        paddingRight:20
        
    },
    profile:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        paddingTop:25,
        borderBottomWidth:1,
        borderBottomColor:'#777777'

    },
    imgView:{
        flex:3,
        paddingLeft:20,
        paddingTop:20

    },
    bottomLinks:{
        flex:1,
        backgroundColor:'white',
        paddingTop:10,
        paddingBottom:450,
        paddingLeft:10
        
        

    },
    links:{
        flex:1,
        fontSize:20,
        marginLeft:20,
       

    },
    footer:{
        height:50,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'white',
        borderTopWidth:1,
        borderTopColor:'lightgray'
    },
    version:{
        flex:1,
        textAlign:'right',
        marginRight:20,
        color:'gray'

    },
    description:{
        flex:1,
        marginLeft:20,
        fontSize:16
    }

})

export default MenuDrawer