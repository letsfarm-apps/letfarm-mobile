import React, { Component } from 'react'
import {View,Text,ScrollView} from 'react-native'
import {Icon,Item,Input,Picker,Content, Container,Card,CardItem} from 'native-base'
import QuestionCard from './QuestionCard.js'

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
      onValueChange(value: string) {
        this.setState({
          selected: value
        });
      }
      renderQuestion(){
        return  this.state.questions.map((question)=>(
          
            <QuestionCard key={question.id} singleQuestion={question} />
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
                <Content style={{marginTop:5,flex:1}}>
                    <Card style={{marginLeft:5,marginRight:5}}>
                        {this.renderQuestion()}
                    </Card>
                    
                </Content>
            </Container>
        );
    }
}

export default FarmerQuestions