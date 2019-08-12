import React, { Component } from 'react'
import {View,ImageBackground,Text,Image,AsyncStorage,TouchableOpacity, SafeAreaView} from 'react-native'
import {Input,Form,Item} from 'native-base'
import SegmentedControlTab from "react-native-segmented-control-tab";
import { connect } from "react-redux";
import {loginUser, signupUser} from "../../redux/actions/authAction";
import {DotsLoader} from 'react-native-indicator';


class AuthScreen extends Component {
    constructor(props) {
        super(props);
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
          signupError:'',
          signupEmail:'',
          signupPassword:'',
          sigupDisplayname:'',
          signupName:'',
          isNext:true,
        }
    };
    nextPane=async()=>{
      const {signupEmail,signupName} = this.state;
      if(signupEmail===""){
        this.setState({signupError:'Please enter email'});
      }else if(signupName===""){
        this.setState({signupError:'Please enter name'});
      }else{
        this.setState({isNext:false});
        this.setState({signupError:''})
      }
    };
    signUp = async () =>{
        const {signupEmail,signupName,signupPassword,sigupDisplayname} = this.state;
        const data={
            email:signupEmail,
            password:signupPassword,
            display_name:sigupDisplayname,
            name:signupName,
        };

         if(signupPassword===""){
            this.setState({signupError:'Please enter password'});
        }else if(sigupDisplayname===""){
          this.setState({signupError:'Please enter your display name'});
        }else{
            this.setState({signupError:''});
            await this.props.signupUser(data);

            if (this.props.isLogged){
                console.log(this.props.user,' user');
                const {token, display_name, email} = this.props.user;
                await AsyncStorage.setItem('accessToken',token);
                await AsyncStorage.setItem('display_name',display_name);
                await AsyncStorage.setItem('email',email);
                this.props.navigation.navigate('App')
            }
        }
    };

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
                this.props.navigation.navigate('App')
            }
        }
      };

    handleSingleIndexSelect = (index) => {
          this.setState(prevState => ({ ...prevState, selectedIndex: index }))
    };

    handleMultipleIndexSelect = (index) => {
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

    handleCustomIndexSelect = (index) => {
          this.setState(prevState => ({ ...prevState, customStyleIndex: index }))
    };

    render() {
        const {isLoading, loginError,signupError} = this.props;
        return (
            <SafeAreaView
                style={{flex:1}}
            >
                <ImageBackground
                    style={{width: '100%', height: '100%',flex:1}}
                    source={require('../../../assets/farming3.jpeg')}
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
                          <Input
                            placeholder="Email"
                            value={this.state.loginEmail}
                            name='loginEmail'
                            autocorrect="off"
                            autocapitalize="none"
                            onChangeText={(email=>this.setState({loginEmail:email}))} />
                          </Item>
                          <Item >
                          <Input
                            placeholder="Password"
                            secureTextEntry={true}
                            value={this.state.loginPassword}
                            name='loginPassword'
                            autocorrect="off"
                            autocapitalize="none"
                            onChangeText={(password=>this.setState({loginPassword:password}))} />
                          </Item>
                          <Text style={{marginTop:5, color:'#e74c3c', fontSize:14}}>{this.state.loginError}{loginError?loginError:''}</Text>
                          <TouchableOpacity onPress={this.signIn}>
                            <View style={{backgroundColor:'#2980b9',borderRadius:50, width:100,height:35,alignItems:'center',justifyContent:'center',marginTop:10}}>
                                 {isLoading?<DotsLoader color={'#ffffff'}/>:<Text style={{color:'white'}}>LogIn</Text>}
                            </View>
                          </TouchableOpacity>
                          <View style={{flexDirection:'row',justifyContent:'space-evenly',width:200,marginTop:20}}>
                              <Image style={{height:30,width:30}} source={require('../../../assets/facebook.png')}/>
                              <Text style={{color:'grey'}}>Or</Text>
                              <Image style={{height:30,width:30}} source={require('../../../assets/google-plus.png')}/>
                          </View>
                    </Form>

                    }
                    {this.state.customStyleIndex === 1
                                &&
                      <View style={{width:'100%'}}>
                        {this.state.isNext?
                              <Form style={{alignItems:'center', paddingRight:15}}>
                                <Item>
                                    <Input
                                      placeholder="Email"
                                      autocorrect="off"
                                      autocapitalize="none"
                                      value={this.state.signupEmail}
                                      name='signupEmail'
                                      onChangeText={(useremail=>this.setState({signupEmail:useremail}))} />
                                  </Item>
                                <Item >
                                  <Input
                                    placeholder="Name"
                                    value={this.state.signupName}
                                    name='signupName'
                                    autocorrect="off"
                                    autocapitalize="none"
                                    onChangeText={(name=>this.setState({signupName:name}))} />
                                </Item>
                                <Text style={{marginTop:5, color:'#e74c3c', fontSize:14}}>{this.state.signupError}{signupError?signupError:''}</Text>
                                <TouchableOpacity onPress={this.nextPane}>
                                  <View style={{backgroundColor:'#2980b9',borderRadius:13, width:100,height:40,alignItems:'center',justifyContent:'center',marginTop:10}}>
                                      <Text style={{color:'white'}}>Next</Text>
                                  </View>
                                </TouchableOpacity>
                                <View style={{flexDirection:'row',justifyContent:'space-evenly',width:200,marginTop:20}}>
                                    <Image style={{height:30,width:30}} source={require('../../../assets/facebook.png')}/>
                                    <Text style={{color:'grey'}}>Or</Text>
                                    <Image style={{height:30,width:30}} source={require('../../../assets/google-plus.png')}/>
                                </View>
                             </Form>
                            :
                              <Form style={{alignItems:'center', paddingRight:15}}>
                                <Item>
                                  <Input
                                    placeholder="Display name"
                                    autocorrect="off"
                                    autocapitalize="none"
                                    value={this.state.sigupDisplayname}
                                    name='signupDisplayname'
                                    onChangeText={(display_name=>this.setState({sigupDisplayname:display_name}))} />
                                </Item>
                                <Item >
                                  <Input
                                    placeholder="Password"
                                    secureTextEntry={true}
                                    value={this.state.signupPassword}
                                    name='signupPassword'
                                    autocorrect="off"
                                    autocapitalize="none"
                                    onChangeText={(password=>this.setState({signupPassword:password}))} />
                                </Item>
                                <Text style={{marginTop:5, color:'#e74c3c', fontSize:14}}>{this.state.signupError}{signupError?signupError:''}</Text>
                                <TouchableOpacity onPress={this.signUp}>
                                  <View style={{backgroundColor:'#2980b9',borderRadius:13, width:100,height:40,alignItems:'center',justifyContent:'center',marginTop:10}}>
                                    {isLoading?<DotsLoader color={'#ffffff'}/>:<Text style={{color:'white'}}>signup</Text>}
                                  </View>
                                </TouchableOpacity>
                                <View style={{flexDirection:'row',justifyContent:'space-evenly',width:200,marginTop:20}}>
                                    <Image style={{height:30,width:30}} source={require('../../../assets/facebook.png')}/>
                                    <Text style={{color:'grey'}}>Or</Text>
                                    <Image style={{height:30,width:30}} source={require('../../../assets/google-plus.png')}/>
                                </View>
                              </Form>
                        }

                      </View>

                    }

                </View>
                </View>
                </ImageBackground>
            </SafeAreaView>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        user: state.auth.user,
        isLoading: state.auth.isLoading,
        loginError: state.auth.loginError,
        signupError:state.auth.signupError,
        isLogged: state.auth.isLogged,
    }
};

const mapDispatchToProps = {
   loginUser,
   signupUser

};
export default connect(mapStateToProps,mapDispatchToProps)(AuthScreen);
