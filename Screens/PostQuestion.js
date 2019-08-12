import React, { Component } from 'react'
import {View,Text,Platform,StatusBar,TouchableOpacity} from 'react-native'
import {Content,Container,Header,Left,Right,Icon,Input,Form,Item,Label} from 'native-base'
import {DotsLoader} from 'react-native-indicator';
import { connect } from "react-redux";
import {postNewQuestion} from '../src/actions/question';

class PostQuestion extends Component {
    state={
        body:'',
        title:'',
        postError:''
    }

    post = async () =>{
        const {body, title} = this.state;
        const data={
            body,
            title
        };

        if(body===""){
            this.setState({postError:'Please enter question body'});
        }else if(title===""){
            this.setState({postError:'Please enter question title'});
        }else{
            this.setState({postError:''});
            await this.props.postNewQuestion(data);
            if (this.props.isPosted){
                this.props.navigation.navigate('App')
            }
        }
      };
   
    render() {
        const {postError,isLoading } =this.props
        return (
            <Container>
                <Header style={[styles.headerStyle,styles.androidHeader]}>
                    <Left style={{flexDirection:'row',flex:1}}>
                        <Icon onPress={()=>this.props.navigation.navigate("App")} name="arrow-back" style={styles.leftIcon}/>
                        <View style={{paddingHorizontal:10,justifyContent:'center',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                            <View style={{borderColor:'white',borderRadius:30,borderWidth:1,justifyContent:'center',alignItems:'center'}}>
                                <Text style={{color:'white',padding:6}}>0%</Text>
                            </View>
                            <View style={{justifyContent:'center',alignItems:'center'}}>
                                    <Text style={{color:'white',paddingHorizontal:5}}>New Question</Text>
                            </View>
                        
                        </View>
                        
                    </Left>
                    
                </Header>
                <Content style={{flex:1,paddingTop:10}}>
                    <View style={{flexDirection:'row'}}>
                        <View style={{width:'20%',justifyContent:'center',alignItems:'center',paddingHorizontal:7,paddingTop:12}}>
                            <View style={{borderColor:'#9ddcff',  borderRadius:30,borderWidth:1,width:40,height:40,justifyContent:'center',alignItems:'center'}}>
                                <Text style={{color:'#9ddcff',padding:5}}>1</Text>
                            </View>

                        </View>
                               
                        <View style={{flex:1,justifyContent:'center',paddingLeft:10}}>
                            <Form style={{paddingBottom:6}}>
                                <Item floatingLabel>
                                    <Label>Title</Label>
                                    <Input style={{paddingTop:6}} value={this.state.title} name='title' onChangeText={(title=>this.setState({title:title}))} />
                                </Item>
                            </Form>

                        </View>

                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View style={{width:'20%',justifyContent:'center',alignItems:'center',paddingHorizontal:7,paddingTop:12}}>
                            <View style={{borderColor:'#9ddcff',  borderRadius:30,borderWidth:1,width:40,height:40,justifyContent:'center',alignItems:'center'}}>
                                <Text style={{color:'#9ddcff',padding:5}}>2</Text>
                            </View>

                        </View>
                               
                        <View style={{flex:1,justifyContent:'center',paddingLeft:10}}>
                            <Form style={{paddingBottom:6}}>
                                <Item floatingLabel>
                                    <Label>Body</Label>
                                    <Input style={{paddingTop:6}} value={this.state.body} name='body' onChangeText={(body=>this.setState({body:body}))} />
                                </Item>
                            </Form>

                        </View>

                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View style={{width:'20%',justifyContent:'center',alignItems:'center',paddingHorizontal:7,paddingTop:12}}>
                            <View style={{borderColor:'#9ddcff',  borderRadius:30,borderWidth:1,width:40,height:40,justifyContent:'center',alignItems:'center'}}>
                                <Text style={{color:'#9ddcff',padding:5}}>3</Text>
                            </View>

                        </View>
                               
                        <View style={{flex:1,justifyContent:'center',paddingLeft:10}}>
                            <Form >
                                <Item floatingLabel>
                                    <Label>Relevant Tags</Label>
                                    <Input style={{paddingTop:6}}/>
                                </Item>
                            </Form>

                        </View>

                    </View>
                    <Text style={{marginTop:15,paddingHorizontal:10 ,color:'#e74c3c', fontSize:14,textAlign:'center'}}>{this.state.postError}{postError?postError:''}</Text>
                    <View style={{flexDirection:'row',marginTop:25}}>                
                        <Left style={{flexDirection:'row',marginLeft:15}}>
                                <Icon name="md-images" style={{color:'#2980b9'}} /> 
                                <Text style={{paddingHorizontal:4,paddingTop:4,fontSize:16}}> Insert</Text>
                        </Left>     
                    
                        <Right>
                            <TouchableOpacity onPress={this.post}>
                                <View style={{backgroundColor:'#2980b9', width:90,height:35,borderRadius:5,alignItems:'center',justifyContent:'center',marginRight:15}}>
                                    {isLoading?<DotsLoader color={'#ffffff'}/>:<Text style={{color:'white'}}>Post</Text>}
                                </View>
                            </TouchableOpacity>
                        </Right>                     
                    </View>
                </Content>
                
            </Container>
        )
    }
}
const styles={
    imageStyl: {
    flexGrow:1,
    width:"100%",
    height:200,
    alignItems: 'center',
    justifyContent:'center',
  },
     ImageContainer:{
         flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    leftContent:{
        flexDirection:'row'
    },
    headerStyle:{
        backgroundColor:"#2980b9",
        height:90,
        borderBottomColor:"#757575"
    },
    leftIcon:{
        color:"#fff"

    },
    headerText:{
        fontSize:14,
        color:'white',
        marginRight: 10
    },
    
    rightIcon:{
        color:"#fff"

    },
 
   
    androidHeader:{
        ...Platform.select({
            android:{
                paddingTop:StatusBar.currentHeight
            }
        })
    }
}



const mapStateToProps = (state) =>{
    return {
        question: state.postQuestion.question,
        isLoading: state.postQuestion.isLoading,
        postError: state.postQuestion.postError,
        isPosted: state.postQuestion.isPosted,
    }
};

export default connect(mapStateToProps,{postNewQuestion})(PostQuestion)