import React, { Component } from 'react'
import {View,Text,Image,ScrollView} from 'react-native'
import {Container,Content,Card,Icon,Input,CardItem,Left,Right} from 'native-base'

class QuestionsHome extends Component {

    render() {
        return (
            <Container>
                <View style={{height:"10%",marginTop:5,flexDirection:'row', backgroundColor:'#f3f5f7',justifyContent:'space-between',marginLeft:5,marginRight:5,marginBottom:5}}>
                    <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',marginLeft:5,marginRight:5}}>                
                            <Icon name="search"  style={{fontSize:20,paddingTop:17}}/>
                            <Input style={{marginLeft:10}} placeholder="search..."/>                          
                    </View>
                    
                </View>
                <Content>
                    <Card style={{marginLeft:3,marginRight:3}}>
                    <View style={{flexDirection:'row'}}>
                        <View style={{flex:1,marginLeft:5}}>
                            <Text style={{fontWeight:'bold', fontSize:18}}>My Projects</Text>
                        </View>
                        <Right>
                            <Text style={{fontWeight:'300',fontSize:10,marginRight:6}}>
                                VIEW MORE
                            </Text>
                        </Right>                                                    
                    </View>
                    
                    <View style={{marginLeft:5,paddingTop:3}}>
                        <Text>Checkout your farms</Text>
                    </View>
                    <CardItem style={{flexDirection:'row',justifyContent:'space-evenly',flex:1}}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={{flex:1,padding:10}}>
                                <Image style={{borderRadius:9,width:100,height:100,resizeMode:'cover'}} source={require('../assets/farming.jpg')} />
                                <View style={{flex:1,paddingTop:7}}>
                                    <Text style={{textAlign:'center'}}>Koki farm</Text>
                                    
                                </View>
                                
                            </View>
                            <View style={{flex:1,padding:10}}>
                                <Image style={{borderRadius:9,width:100,height:100,resizeMode:'cover'}} source={require('../assets/cow.jpg')} />
                                <View style={{flex:1,paddingTop:7}}>
                                    <Text style={{textAlign:'center'}}>Masaka farm</Text>
                                    
                                </View>
                                
                            </View>
                            <View style={{flex:1,padding:10}}>
                                <Image style={{borderRadius:9,width:100,height:100,resizeMode:'cover'}} source={require('../assets/cabbage.jpg')} />
                                <View style={{flex:1,paddingTop:7}}>
                                    <Text style={{textAlign:'center'}}>Kayunga farm</Text>
                                    
                                </View>
                                
                            </View>
                            <View style={{flex:1,padding:10}}>
                                <Image style={{borderRadius:9,width:100,height:100,resizeMode:'cover'}} source={require('../assets/farming.jpg')} />
                                <View style={{flex:1,paddingTop:7}}>
                                    <Text style={{textAlign:'center'}}>Koki farm</Text>
                                    
                                </View>
                                
                            </View>
                            <View style={{flex:1,padding:10}}>
                                <Image style={{borderRadius:9,width:100,height:100,resizeMode:'cover'}} source={require('../assets/pfarm.jpg')} />
                                <View style={{flex:1,paddingTop:7}}>
                                    <Text style={{textAlign:'center'}}>Kiseka poultry</Text>
                                    
                                </View>
                                
                            </View>
                            <View style={{flex:1,padding:10}}>
                                <Image style={{borderRadius:9,width:100,height:100,resizeMode:'cover'}} source={require('../assets/pigs.jpg')} />
                                <View style={{flex:1,paddingTop:7}}>
                                    <Text style={{textAlign:'center'}}>Mukono Piggery</Text>
                                    
                                </View>
                                
                            </View>

                        </ScrollView>
                           
                            
                            
                            
                    </CardItem>

                </Card>
                <Card style={{marginLeft:3,marginRight:3}}>
                        <View style={{flexDirection:'row'}}>
                            <View style={{flex:1,marginLeft:5}}>
                                <Text style={{fontWeight:'bold', fontSize:18}}>Diseases</Text>
                            </View>
                            <Right>
                                <Text style={{fontWeight:'300',fontSize:10,marginRight:6}}>
                                    VIEW MORE
                                </Text>
                            </Right>                                                    
                        </View>
                        
                        <View style={{marginLeft:5,paddingTop:3}}>
                            <Text>Explore our disease database</Text>
                        </View>
                        <CardItem style={{flexDirection:'row',justifyContent:'space-evenly',flex:1}}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                <View style={{flex:1,padding:10}}>
                                    <Image style={{borderRadius:50,width:100,height:100,resizeMode:'cover'}} source={require('../assets/pigs.jpg')} />
                                    <View style={{flex:1,paddingTop:7}}>
                                        <Text style={{textAlign:'center'}}>Pigs</Text>
                                        
                                    </View>
                                   
                                </View>
                                <View style={{flex:1,padding:10}}>
                                    <Image style={{borderRadius:50,width:100,height:100,resizeMode:'cover'}} source={require('../assets/cows.jpg')} />
                                    <View style={{flex:1,paddingTop:7}}>
                                        <Text style={{textAlign:'center'}}>Cows</Text>
                                        
                                    </View>
                                   
                                </View>
                                <View style={{flex:1,padding:10}}>
                                    <Image style={{borderRadius:50,width:100,height:100,resizeMode:'cover'}} source={require('../assets/cash.jpg')} />
                                    <View style={{flex:1,paddingTop:7}}>
                                        <Text style={{textAlign:'center'}}>Cash Crops</Text>
                                        
                                    </View>
                                   
                                </View>
                                <View style={{flex:1,padding:10}}>
                                    <Image style={{borderRadius:50,width:100,height:100,resizeMode:'cover'}} source={require('../assets/rabbits.jpg')} />
                                    <View style={{flex:1,paddingTop:7}}>
                                        <Text style={{textAlign:'center'}}>Rabbits</Text>
                                        
                                    </View>
                                   
                                </View>
                                <View style={{flex:1,padding:10}}>
                                    <Image style={{borderRadius:50,width:100,height:100,resizeMode:'cover'}} source={require('../assets/poultry.jpg')} />
                                    <View style={{flex:1,paddingTop:7}}>
                                        <Text style={{textAlign:'center'}}>poultry</Text>
                                        
                                    </View>
                                   
                                </View>
                                <View style={{flex:1,padding:10}}>
                                    <Image style={{borderRadius:50,width:100,height:100,resizeMode:'cover'}} source={require('../assets/Goats.jpg')} />
                                    <View style={{flex:1,paddingTop:7}}>
                                        <Text style={{textAlign:'center'}}>Goats</Text>
                                        
                                    </View>
                                   
                                </View>
                               
                                
                           </ScrollView>    
                        </CardItem>

                    </Card>
                    <Card style={{marginLeft:3,marginRight:3}}>
                    <View style={{flexDirection:'row'}}>
                        <View style={{flex:1,marginLeft:5}}>
                            <Text style={{fontWeight:'bold', fontSize:18}}>Practices</Text>
                        </View>
                        <Right>
                            <Text style={{fontWeight:'300',fontSize:10,marginRight:6}}>
                                VIEW MORE
                            </Text>
                        </Right>                                                    
                    </View>
                    
                    <View style={{marginLeft:5,paddingTop:3}}>
                        <Text>Learn about the different good practices</Text>
                    </View>
                    <CardItem style={{flexDirection:'row',justifyContent:'space-evenly',flex:1}}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={{flex:1,padding:10}}>
                                <Image style={{borderRadius:9,width:100,height:100,resizeMode:'cover'}} source={require('../assets/castration.png')} />
                                <View style={{flex:1,paddingTop:7}}>
                                    <Text style={{textAlign:'center'}}>Castration</Text>
                                    
                                </View>
                                
                            </View>
                            <View style={{flex:1,padding:10}}>
                                <Image style={{borderRadius:9,width:100,height:100,resizeMode:'cover'}} source={require('../assets/irrigation.jpg')} />
                                <View style={{flex:1,paddingTop:7}}>
                                    <Text style={{textAlign:'center'}}>irrigation</Text>
                                    
                                </View>
                                
                            </View>
                            <View style={{flex:1,padding:10}}>
                                <Image style={{borderRadius:9,width:100,height:100,resizeMode:'cover'}} source={require('../assets/manuring.jpg')} />
                                <View style={{flex:1,paddingTop:7}}>
                                    <Text style={{textAlign:'center'}}>Manuring</Text>
                                    
                                </View>
                                
                            </View>
                            <View style={{flex:1,padding:10}}>
                                <Image style={{borderRadius:9,width:100,height:100,resizeMode:'cover'}} source={require('../assets/farrowing.jpg')} />
                                <View style={{flex:1,paddingTop:7}}>
                                    <Text style={{textAlign:'center'}}>Farrowing</Text>
                                    
                                </View>
                                
                            </View>
                            <View style={{flex:1,padding:10}}>
                                <Image style={{borderRadius:9,width:100,height:100,resizeMode:'cover'}} source={require('../assets/weeding.jpg')} />
                                <View style={{flex:1,paddingTop:7}}>
                                    <Text style={{textAlign:'center'}}>Weeding</Text>
                                    
                                </View>
                                
                            </View>
                            <View style={{flex:1,padding:10}}>
                                <Image style={{borderRadius:9,width:100,height:100,resizeMode:'cover'}} source={require('../assets/vaccination.png')} />
                                <View style={{flex:1,paddingTop:7}}>
                                    <Text style={{textAlign:'center'}}>vaccination</Text>
                                    
                                </View>
                                
                            </View>
                            
                            
                            
                       </ScrollView>     
                    </CardItem>

                </Card>

                </Content>
                
                

            </Container>
        );
    }
}

export default QuestionsHome