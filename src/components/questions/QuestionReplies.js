import React, { Component } from 'react'
import {View,Text,Platform,StatusBar,ToastAndroid,ActivityIndicator} from 'react-native'
import AntIcon from 'react-native-vector-icons/AntDesign'
import {Content,Container,Header,Left,Right,Icon,Picker,Input,Item,Form} from 'native-base'
import { connect } from "react-redux";
import {fetchQuestionDetails,fetchQuestionReplies,postQuestionReply} from '../../redux/actions/question';
import Spinner from 'react-native-loading-spinner-overlay';
import RepliesCard from './RepliesCard'



class QuestionReplies extends Component {
        state = {
          selected: "key1",
          question:{},
          reply:{},
          replies:[],
          body:""
      }
    
    onValueChange(value) {
        this.setState({
          selected: value
        });
      }

      componentDidMount(){
        this.fetchQuestion();
        this.fetchReplies();
      }

      fetchQuestion = async () =>{
        const id = this.props.navigation.getParam('id', 'NO-ID');
        await this.props.fetchQuestionDetails(id);
        this.setState({question:this.props.question});
    }

    fetchReplies = async () =>{
        const id = this.props.navigation.getParam('id', 'NO-ID');
        await this.props.fetchQuestionReplies(id);
        if (this.props.isQtnRepliesFetched){
            this.setState({replies:this.props.reply.answers})
        }

  };
  renderReplies(){
    return  this.state.replies.map((reply)=>(

        <RepliesCard  navigation={this.props.navigation} key={reply.id} reply={reply} />
        ));

  };

  postReply = async () =>{
    const {body} = this.state;
    const id = this.props.navigation.getParam('id', 'NO-ID');
    const data={
        id,
        body
    };

    if(body===""){
        ToastAndroid.showWithGravityAndOffset(
            'Please enter reply body!',
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50,
          );
    }else{
        await this.props.postQuestionReply(data);
        if (this.props.isReplyPosted){
            ToastAndroid.showWithGravity(
                'Reply posted!!',
                ToastAndroid.SHORT,
                ToastAndroid.CENTER,
              );
            this.fetchReplies();
        }
    }
  };
   
    render() {
        const {id,title,body,owner}=this.state.question;
        
        const {isLoading,isRepliesLoading} =this.props;
       
        return (
            <Container>
                <Header style={[styles.headerStyle,styles.androidHeader]}>
                    <Left>
                        <AntIcon onPress={()=>this.props.navigation.navigate("App")} name="left"  color="white" size={22}/>
                        
                    </Left>
                    <View style={{flex:1,marginLeft:5,justifyContent:'center'}}>
                        <Text style={{color:'white'}}>Q&A discussions</Text>

                    </View>
                </Header>
                <View style={{marginTop:10}}>
                        <Spinner
                            //visibility of Overlay Loading Spinner
                                visible={isLoading}
                                //Text with the Spinner
                                textContent={'Loading...'}
                                //Text style of the Spinner Text
                                textStyle={styles.spinnerTextStyle}
                            />
                        <View style={{flexDirection:'row',paddingTop:5,paddingHorizontal:5,height:"20%"}}>
                            <View style={{width:"20%",margin:3,justifyContent:'flex-start'}}>
                                <AntIcon name="up"  color="grey" size={22}/>
                                    <Text style={{fontSize:12}}>+13</Text>
                                <AntIcon name="down"  color="grey" size={22}/>
                            </View>
                            <View style={{flex:1}}>
                                
                                    <Text style={{flexShrink:1,flexWrap:'wrap'}}> {title} </Text>
                                    
                                    <Text style={{flexShrink:1,flexWrap:'wrap',paddingTop:5}}> {body} </Text>
                                

                            </View>

                        </View>
                        <View style={{paddingTop:5,height:"15%",alignItems:'flex-end'}}>

                            <Right style={{flexDirection:"row",position: 'absolute', right: 2}}>
                                <View>
                                    <View style={{paddingTop:5}}>
                                        <Text>wamozo</Text>
                                    </View>
                                    
                                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                        <View style={{justifyContent:'flex-start'}}> 
                                            <Text> 11 views</Text>
                                        </View>
                                        <View style={{justifyContent:'flex-end',marginLeft:5}}>
                                            <Text>12 hrs</Text>
                                        </View>

                                    </View>

                                </View>
                                <View style={{marginLeft:5}}>
                                    <Icon name="md-contact" style={{color:'grey'}} />
                                </View>

                            </Right>

                        </View>
                    </View>

    
                
                
                <View style={{height:"10%",marginTop:5,flexDirection:'row', backgroundColor:'#f3f5f7',justifyContent:'space-between',marginBottom:5}}>
                    <View style={{flex:1,justifyContent:'center'}}>                
                        <Text style={{paddingLeft:5}}>9 Answers</Text>                       
                    </View>
                    <View style={{width:"30%",flexDirection:'row',paddingRight:5}}>
                        <Picker
                            note
                            mode="dropdown"
                            selectedValue={this.state.selected}
                            onValueChange={this.onValueChange.bind(this)}
                            >
                            <Picker.Item label="Votes" value="key0" />
                            <Picker.Item label="Views" value="key1" />
                            <Picker.Item label="Recent" value="key2" />
                        </Picker>
                    </View>
                    
                    
                </View>
                <View  style={{flex:1}}>
                    <View style={{flexDirection:'row',paddingTop:5,paddingHorizontal:5}}>
                        <View style={{width:"20%",margin:3,justifyContent:'flex-start'}}>
                            <AntIcon name="up"  color="grey" size={22}/>
                            <Text style={{fontSize:12}}>+ 9</Text>
                            <AntIcon name="down"  color="grey" size={22}/>
                        </View>
                        <Content style={{flex:1}}>
                            {isRepliesLoading?
                                <View style={{marginTop:10,alignItems:'center',justifyContent:'center'}}>
                                    <ActivityIndicator  />
                                </View>
                            :
                                <View>
                                    {this.renderReplies()}
                                </View>
                                
                            }
                            

                        </Content>

                    </View>
                

                </View>
                <View style={styles.footer}>
                    <Left style={{paddingLeft:5}}>
                        <Icon name="md-contact" style={{color:'grey'}} />

                    </Left>
                    <View style={{flex:1,flexDirection:'row',left:40,right:40,justifyContent:'space-evenly',position:'absolute'}}>                
                        <View style={{width:"90%"}}>
                                <Item>
                                    <Input 
                                        multiline = {true}
                                        style={{height: 40}}
                                        autocorrect="on"
                                        style={{flex:1}}
                                        returnKeyType='none'
                                        value={this.state.body} name='body'
                                        onChangeText={(body=>this.setState({body:body}))}
                                        placeholder="write reply...."/>  
                                </Item>
                        </View>     
                    
                        <Right style={{flex:1}}>
                            <Icon name="md-images" style={{color:'grey'}} />
                        </Right>                     
                    </View>
                    <Right style={{paddingRight:5}}>
                        <Icon name="md-send" style={{color:'grey'}} onPress={this.postReply} />
                    </Right>
                </View>
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
    searchContent:{
        position:'absolute',
        left:0,
        right:0,
        top:90,
        height:70,
        backgroundColor:"#3a455c",
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:5
      
    },
    spinnerTextStyle: {
        color: '#FFF',
      },
    footer:{
        height:"10%",
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'white',
        borderTopWidth:1,
        borderTopColor:'lightgray'
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
        question: state.questions.singleQuestion,
        reply: state.questions.reply,
        isLoading: state.questions.isLoading,
        isRepliesLoading: state.questions.isRepliesLoading,
        fetchQtnDetailsError: state.questions.fetchQtnDetailsError,
        isQtnRepliesFetched:state.questions.isQtnRepliesFetched,
        fetchQtnRepliesError: state.questions.fetchQtnRepliesError,
        isReplyPosted:state.questions.isReplyPosted,
        postReplyError:state.questions.postReplyError
  
    }
  };

  const mapDispatchToProps = {
    fetchQuestionDetails,
    fetchQuestionReplies,
    postQuestionReply
 
 };

export default  connect(mapStateToProps,mapDispatchToProps)(QuestionReplies)