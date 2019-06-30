import React, { Component } from 'react'
import {View,ImageBackground,StyleSheet,Text,Image,AsyncStorage,TouchableOpacity, SafeAreaView} from 'react-native'
import {Input,Form,Item} from 'native-base'
import SegmentedControlTab from "react-native-segmented-control-tab";
import { connect } from "react-redux";
import {loginUser} from "../src/actions/authAction";
import {DotsLoader} from 'react-native-indicator';

class WelcomeScreen extends Component {
    constructor() {
        super();
        this.state = {
          selectedIndex: 0,
          selectedIndices: [0],
          customStyleIndex: 0,
          firstSignUp:true,
          secondSignUp:false,
          thirdSignUp:false,
          loginEmail:'',
          loginPassword:'',
          loginError:'',
        }
    }
    signIn = async () =>{
        const {loginEmail, loginPassword} = this.state;
        const data={
            email:loginEmail,
            password:loginPassword
        };

        if(loginEmail===""){
            this.setState({loginError:'email required to login'});
        }else if(loginPassword===""){
            this.setState({loginError:'password required to login'});
        }else{
            this.setState({loginError:''});
            await this.props.loginUser(data);
            if (this.props.isLogged){
                const {token, display_name, email, role} = this.props.user;
                await AsyncStorage.setItem('accessToken',token);
                await AsyncStorage.setItem('display_name',display_name);
                await AsyncStorage.setItem('email',email);
                await AsyncStorage.setItem('role',role);
                this.props.navigation.navigate('App')
            }
        }
    };

    handleSingleIndexSelect = (index: number) => {
          this.setState(prevState => ({ ...prevState, selectedIndex: index }))
    };

    handleMultipleIndexSelect = (index: number) => {
        const { selectedIndices } = this.state;

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
    };

    handleCustomIndexSelect = (index: number) => {
          this.setState(prevState => ({ ...prevState, customStyleIndex: index }))
    };

    render() {
        const {isLoading, loginError} = this.props;
        return (
            <SafeAreaView
                style={{flex:1}}
            >
                <ImageBackground
                    style={{width: '100%', height: '100%',flex:1}}
                    source={require('../assets/farming3.jpeg')}
                >
                <View style={{flex:1, height:'100%', width:'100%', alignItems:'center', backgroundColor:'rgba(0,0,0,0.5)'}}>
                <View style={{height:'50%', alignItems:'center', justifyContent:'center'}}>
                    <View style={{height:50, flexDirection:'row', alignItems:'flex-end'}}>
                    <Text style={{color:"#ffffff", fontSize:35, marginBottom:0 }}>LetsFarm</Text>
                    <Text style={{color:"#ffffff", fontSize:21, marginBottom: 2}}>.io</Text>
                    </View>
                </View>
                <View  style={{width:'95%', alignItems:'center', justifyContent:'center', borderRadius:20, backgroundColor:'white', paddingBottom: 20}}>

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
                      <Form style={{alignItems:'center', paddingRight:15}}>
                          <Item floatingLabel>
                          <Input placeholder="Email" value={this.state.loginEmail} name='loginEmail' onChangeText={(email=>this.setState({loginEmail:email}))} />
                          </Item>
                          <Item >
                          <Input placeholder="Password" secureTextEntry={true} value={this.state.loginPassword} name='loginPassword' onChangeText={(password=>this.setState({loginPassword:password}))} />
                          </Item>
                          <Text style={{marginTop:5, color:'#e74c3c', fontSize:14}}>{this.state.loginError}{loginError?loginError:''}</Text>
                          <TouchableOpacity onPress={this.signIn}>
                            <View style={{backgroundColor:'#2980b9',borderRadius:50, width:100,height:35,alignItems:'center',justifyContent:'center',marginTop:10}}>
                                 {isLoading?<DotsLoader color={'#ffffff'}/>:<Text style={{color:'white'}}>LogIn</Text>}
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
                        <Form style={{alignItems:'center', paddingRight:15}}>
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
                    }

                </View>
                </View>
                </ImageBackground>
            </SafeAreaView>
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

  });

const mapStateToProps = (state) =>{
    return {
        user: state.auth.user,
        isLoading: state.auth.isLoading,
        loginError: state.auth.loginError,
        isLogged: state.auth.isLogged,
    }
};

export default connect(mapStateToProps,{loginUser})(WelcomeScreen);
