import React, { Component } from 'react'
import {View,ImageBackground,StyleSheet,Text,Image,AsyncStorage,TouchableOpacity} from 'react-native'
import {Input,Form,Item,Content} from 'native-base'
import SegmentedControlTab from "react-native-segmented-control-tab";

class WelcomeScreen extends Component {
    constructor() {
        super()
        this.state = {
          selectedIndex: 0,
          selectedIndices: [0],
          customStyleIndex: 0,
          firstSignUp:true,
          secondSignUp:false,
          thirdSignUp:false,
        }
      }
      signIn=async()=>{
          await AsyncStorage.setItem('accessToken','wamozo cosmas')
          this.props.navigation.navigate('App')
      }
        handleSingleIndexSelect = (index: number) => {
          this.setState(prevState => ({ ...prevState, selectedIndex: index }))
        }
    
        handleMultipleIndexSelect = (index: number) => {
          const { selectedIndices } = this.state
    
          if (selectedIndices.includes(index)) {
            this.setState(prevState => ({
              ...prevState,
              selectedIndices: selectedIndices.filter((i) => i !== index),
            }))
          } else {
            this.setState(prevState => ({
              ...prevState,
              selectedIndices: [
                ...selectedIndices,
                index,
              ],
            }))
          }
        }
    
        handleCustomIndexSelect = (index: number) => {
          this.setState(prevState => ({ ...prevState, customStyleIndex: index }))
        }
   
    render() {
        return (
            <ImageBackground
                style={{width: '100%', height: '100%',justifyContent:'flex-end',alignItems:'center',flex:1}}
                source={require('../assets/farming.jpg')}
            >
                
                <View  style={{width:'95%',backgroundColor:'white',height:'50%',margin:5}}>
                    
                    <SegmentedControlTab
                        style={{borderRadius:10}}
                        values={['Login', 'Sign Up']}
                        selectedIndex={this.state.customStyleIndex}
                        onTabPress={this.handleCustomIndexSelect}
                        borderRadius={0}
                        tabsContainerStyle={{ height: 50, backgroundColor: '#F2F2F2' }}
                        tabStyle={{ backgroundColor: '#F2F2F2', borderWidth: 0, borderColor: 'transparent' }}
                        activeTabStyle={{ backgroundColor: 'white', marginTop: 2 }}
                        tabTextStyle={{ color: '#444444', fontWeight: 'bold' }}
                        activeTabTextStyle={{ color: '#888888' }}
                    />
                    {this.state.customStyleIndex === 0
                                &&
                      <Form style={{alignItems:'center'}}>
                        <Item>
                        <Input placeholder="Email" />
                        </Item>
                        <Item >
                        <Input placeholder="Password" />
                        </Item>
                        <TouchableOpacity onPress={this.signIn}>
                          <View style={{backgroundColor:'#2980b9',borderRadius:13, width:100,height:40,alignItems:'center',justifyContent:'center',marginTop:10}}>
                              <Text style={{color:'white'}}>Sign In</Text>
                          </View>
                        </TouchableOpacity>                                   
                        <View style={{flexDirection:'row',justifyContent:'space-evenly',width:200,marginTop:20}}>
                            <Image style={{height:30,width:30}} source={require('../assets/facebook.png')}/>
                            <Text style={{color:'grey'}}>Or</Text>
                            <Image style={{height:30,width:30}} source={require('../assets/google-plus.png')}/>
                        </View>
                    </Form>
                     
                    }
                    {this.state.customStyleIndex === 1
                                &&       
<<<<<<< HEAD
                                                                                                       
                        <Form style={{alignItems:'center'}}>
=======
                      <Content>                                                                                  
                        <Form style={{alignItems:'center'}}>s
>>>>>>> af780c2a13da81a8f3b68ecdada8d7d1caa779ac
                          <Item>
                              <Input placeholder="display name" />
                            </Item>
                          <Item >
                          <Input placeholder="Password" />
                          </Item>
                          <View style={{backgroundColor:'#2980b9',borderRadius:13, width:100,height:40,alignItems:'center',justifyContent:'center',marginTop:10}}>
                              <Text style={{color:'white'}}>Next</Text>
                          </View>
                          <View style={{flexDirection:'row',justifyContent:'space-evenly',width:200,marginTop:20}}>
                              <Image style={{height:30,width:30}} source={require('../assets/facebook.png')}/>
                              <Text style={{color:'grey'}}>Or</Text>
                              <Image style={{height:30,width:30}} source={require('../assets/google-plus.png')}/>

                          </View>
                        </Form>      
<<<<<<< HEAD
                                    
=======
                      </Content>                  
>>>>>>> af780c2a13da81a8f3b68ecdada8d7d1caa779ac
                    }

                </View>


            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      padding: 10,
    },
    tabViewText: {
      color: '#444444',
      fontWeight: 'bold',
      marginTop: 50,
      fontSize: 18,
    },
    titleText: {
      color: '#444444',
      padding: 20,
      fontSize: 14,
      fontWeight: '500',
    },
    headerText: {
      padding: 8,
      fontSize: 14,
      color: '#444444',
    },
    tabContent: {
      color: '#444444',
      fontSize: 18,
      margin: 24,
    },
    Seperator: {
      marginHorizontal: -10,
      alignSelf: 'stretch',
      borderTopWidth: 1,
      borderTopColor: '#888888',
      marginTop: 24,
    },
    tabStyle: {
      borderColor: '#D52C43',
    },
    activeTabStyle: {
      backgroundColor: '#D52C43',
    },
    tabTextStyle: {
      color: '#D52C43',
    },
  
  })
  
export default WelcomeScreen