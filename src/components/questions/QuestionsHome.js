import React, { Component } from 'react'
import {View,Text,Image,ScrollView,TouchableOpacity,ActivityIndicator} from 'react-native'
import {Container,Content,Card,Icon,Input,CardItem,Left,Right} from 'native-base'
import { connect } from "react-redux";
import {fetchCategories} from '../../redux/actions/category';
import CategoriesCard from './CategoriesCard'


class QuestionsHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
          categories:[]
        };
      }

      componentDidMount(){
        this.fetchAllCategories();
      }

      fetchAllCategories = async () =>{
        await this.props.fetchCategories();
        if (this.props.isCategoriesFetched){
            this.setState({categories:this.props.categories})
        }

    };
    renderCategories(){
        return  this.state.categories.map((category)=>(

            <CategoriesCard  navigation={this.props.navigation} key={category.id} singleCategory={category} />
            ));

      }

    render() {
        const {isLoading} =this.props
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
                            <TouchableOpacity>
                                <Text style={{fontWeight:'400',fontSize:10,marginRight:6}}>
                                    VIEW MORE
                                </Text>
                            </TouchableOpacity>
                        </Right>
                    </View>

                    <View style={{marginLeft:5,paddingTop:3}}>
                        <Text>Checkout your farms</Text>
                    </View>
                    <CardItem style={{flexDirection:'row',justifyContent:'space-evenly',flex:1}}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={{flex:1,padding:10}}>
                                <Image style={{borderRadius:9,width:100,height:100,resizeMode:'cover'}} source={require('../../../assets/farming.jpg')} />
                                <View style={{flex:1,paddingTop:7}}>
                                    <Text style={{textAlign:'center'}}>Koki farm</Text>

                                </View>

                            </View>
                            <View style={{flex:1,padding:10}}>
                                <Image style={{borderRadius:9,width:100,height:100,resizeMode:'cover'}} source={require('../../../assets/cow.jpg')} />
                                <View style={{flex:1,paddingTop:7}}>
                                    <Text style={{textAlign:'center'}}>Masaka farm</Text>

                                </View>

                            </View>
                            <View style={{flex:1,padding:10}}>
                                <Image style={{borderRadius:9,width:100,height:100,resizeMode:'cover'}} source={require('../../../assets/cabbage.jpg')} />
                                <View style={{flex:1,paddingTop:7}}>
                                    <Text style={{textAlign:'center'}}>Kayunga farm</Text>

                                </View>

                            </View>
                            <View style={{flex:1,padding:10}}>
                                <Image style={{borderRadius:9,width:100,height:100,resizeMode:'cover'}} source={require('../../../assets/farming.jpg')} />
                                <View style={{flex:1,paddingTop:7}}>
                                    <Text style={{textAlign:'center'}}>Koki farm</Text>

                                </View>

                            </View>
                            <View style={{flex:1,padding:10}}>
                                <Image style={{borderRadius:9,width:100,height:100,resizeMode:'cover'}} source={require('../../../assets/pfarm.jpg')} />
                                <View style={{flex:1,paddingTop:7}}>
                                    <Text style={{textAlign:'center'}}>Kiseka poultry</Text>

                                </View>

                            </View>
                            <View style={{flex:1,padding:10}}>
                                <Image style={{borderRadius:9,width:100,height:100,resizeMode:'cover'}} source={require('../../../assets/pigs.jpg')} />
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
                                <TouchableOpacity onPress={()=>this.props.navigation.navigate("Diseases")}>
                                    <Text style={{fontWeight:'400',fontSize:10,marginRight:6}}>
                                        VIEW MORE
                                    </Text>
                                </TouchableOpacity>
                            </Right>
                        </View>

                        <View style={{marginLeft:5,paddingTop:3}}>
                            <Text>Explore our disease database</Text>
                        </View>
                        <CardItem style={{flexDirection:'row',justifyContent:'space-evenly',flex:1}}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            {isLoading?
                                <View style={{marginTop:10,alignItems:'center',justifyContent:'center'}}>
                                    <ActivityIndicator  />
                                </View>
                                
                            :
                                <View style={{marginLeft:5,marginRight:5,flexDirection:'row'}}>
                                    {this.renderCategories()}
                                </View>
                            }

                           </ScrollView>
                        </CardItem>

                    </Card>
                    <Card style={{marginLeft:3,marginRight:3}}>
                    <View style={{flexDirection:'row'}}>
                        <View style={{flex:1,marginLeft:5}}>
                            <Text style={{fontWeight:'bold', fontSize:18}}>Practices</Text>
                        </View>
                        <Right>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate("Practices")}>
                                <Text style={{fontWeight:'400',fontSize:10,marginRight:6}}>
                                    VIEW MORE
                                </Text>
                            </TouchableOpacity>
                        </Right>
                    </View>

                    <View style={{marginLeft:5,paddingTop:3}}>
                        <Text>Learn about the different good practices</Text>
                    </View>
                    <CardItem style={{flexDirection:'row',justifyContent:'space-evenly',flex:1}}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={{flex:1,padding:10}}>
                                <Image style={{borderRadius:9,width:100,height:100,resizeMode:'cover'}} source={require('../../../assets/castration.png')} />
                                <View style={{flex:1,paddingTop:7}}>
                                    <Text style={{textAlign:'center'}}>Castration</Text>

                                </View>

                            </View>
                            <View style={{flex:1,padding:10}}>
                                <Image style={{borderRadius:9,width:100,height:100,resizeMode:'cover'}} source={require('../../../assets/irrigation.jpg')} />
                                <View style={{flex:1,paddingTop:7}}>
                                    <Text style={{textAlign:'center'}}>irrigation</Text>

                                </View>

                            </View>
                            <View style={{flex:1,padding:10}}>
                                <Image style={{borderRadius:9,width:100,height:100,resizeMode:'cover'}} source={require('../../../assets/manuring.jpg')} />
                                <View style={{flex:1,paddingTop:7}}>
                                    <Text style={{textAlign:'center'}}>Manuring</Text>

                                </View>

                            </View>
                            <View style={{flex:1,padding:10}}>
                                <Image style={{borderRadius:9,width:100,height:100,resizeMode:'cover'}} source={require('../../../assets/farrowing.jpg')} />
                                <View style={{flex:1,paddingTop:7}}>
                                    <Text style={{textAlign:'center'}}>Farrowing</Text>

                                </View>

                            </View>
                            <View style={{flex:1,padding:10}}>
                                <Image style={{borderRadius:9,width:100,height:100,resizeMode:'cover'}} source={require('../../../assets/weeding.jpg')} />
                                <View style={{flex:1,paddingTop:7}}>
                                    <Text style={{textAlign:'center'}}>Weeding</Text>

                                </View>

                            </View>
                            <View style={{flex:1,padding:10}}>
                                <Image style={{borderRadius:9,width:100,height:100,resizeMode:'cover'}} source={require('../../../assets/vaccination.png')} />
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
const mapStateToProps = (state) =>{
    return {
        categories: state.categories.categories,
        isLoading: state.categories.isLoading,
        fetchCategoriesError: state.categories.fetchCategoriesError,
        isCategoriesFetched:state.categories.isCategoriesFetched
  
    }
  };

export default connect(mapStateToProps,{fetchCategories})(QuestionsHome)
