import React, { Component } from 'react'
import {View,StyleSheet,Text,TouchableOpacity} from 'react-native'
import {Input,Icon,Picker,Content, Container,Card} from 'native-base'
import QuestionCard from './QuestionCard.js'
//import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-action-button';


class FarmerQuestions extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selected: "key1",
          questions:[
              {
                id:1,
                content:"Why are my rabbits dying?",
                asker:"Tony",
                views:100,
                count:30
              },{
                id:2,
                content:"What do pigs eat to grow faster?",
                asker:"cosmas",
                views:100,
                count:30
              },
              {
                id:3,
                content:"How long to hens take to lay eggs?",
                asker:"stephen",
                views:100,
                count:30
              },
              {
                id:4,
                content:"Why are my rabbits dying?",
                asker:"Tony",
                views:100,
                count:30
              },{
                id:6,
                content:"What do pigs eat to grow faster?",
                asker:"cosmas",
                views:100,
                count:30
              },
              {
                id:5,
                content:"How long to hens take to lay eggs?",
                asker:"stephen",
                views:100,
                count:30
              },
              {
                id:7,
                content:"Why are my rabbits dying?",
                asker:"Tony",
                views:100,
                count:30
              },{
                id:8,
                content:"What do pigs eat to grow faster?",
                asker:"cosmas",
                views:100,
                count:30
              },
              {
                id:9,
                content:"How long to hens take to lay eggs?",
                asker:"stephen",
                views:100,
                count:30
              }
          ]
        };
      }
      onValueChange(value) {
        this.setState({
          selected: value
        });
      }
      renderQuestion(){
        return  this.state.questions.map((question)=>(
          
            <QuestionCard  navigation={this.props.navigation} key={question.id} singleQuestion={question} />
            ));

      }


    render() {
        return (
            <Container>
                
                <View style={{height:"10%",marginTop:5,flexDirection:'row', backgroundColor:'#f3f5f7',justifyContent:'space-between',marginLeft:5,marginRight:5,marginBottom:5}}>
                    <View style={{flex:1,flexDirection:'row',justifyContent:'space-between', marginLeft:5,marginRight:5}}>                
                            <Icon name="search"  style={{fontSize:20,paddingTop:17}}/>
                            <Input style={{marginLeft:10}} placeholder="search..."/>                          
                    </View>
                    
                    <Picker
                        note
                        mode="dropdown"
                        
                        style={{ alignItems:'flex-end',width:"20%"}}
                        selectedValue={this.state.selected}
                        onValueChange={this.onValueChange.bind(this)}
                        >
                        <Picker.Item label="Most Recent" value="key0" />
                        <Picker.Item label="Hot Today" value="key1" />
                        <Picker.Item label="Most Views" value="key2" />
                    </Picker>
                    
                </View>
               
                   
                <Content style={{marginTop:5}}>
                
                    <Card style={{marginLeft:5,marginRight:5}}>
                        
                        {this.renderQuestion()}
                        
                    </Card>
                   
                    
                </Content>
                <ActionButton onPress={()=>this.props.navigation.navigate("PostQuestion")} buttonColor="#2980b9">
                </ActionButton>
                
                
            </Container>
        );
    }
}

const styles = StyleSheet.create({
  fab:{
    height: 50,
    width: 50,
    borderRadius: 200,
    position: 'absolute',
    bottom:0,
    top:'35%',
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#686cc3',
  },
  text:{
    fontSize:30,
    color:'white'
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'black',
  }
});

export default FarmerQuestions