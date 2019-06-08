import React, { Component } from 'react'
import {View} from 'react-native'
import {Icon,Input,Picker,Content, Container,Card} from 'native-base'
import QuestionCard from './QuestionCard.js'

class FarmerQuestions extends Component {
    constructor(props) {
        super(props);
        this.state = {
<<<<<<< HEAD
          
=======
          navigation:this.props,
>>>>>>> af780c2a13da81a8f3b68ecdada8d7d1caa779ac
          selected: "key1",
          questions:[
              {
                id:1,
                content:"Why are my rabbits dying?",
                asker:"Tony",
                views:120,
                count:25
              },{
                id:2,
                content:"What do pigs eat to grow faster?",
                asker:"cosmas",
                views:70,
                count:50
              },
              {
                id:3,
                content:"How long to hens take to lay eggs?",
                asker:"stephen",
                views:87,
                count:90
              },
              {
                id:4,
                content:"Why are my rabbits dying?",
                asker:"Tony",
                views:35,
                count:3
              },{
                id:6,
                content:"What do pigs eat to grow faster?",
                asker:"cosmas",
                views:90,
                count:45
              },
              {
                id:5,
                content:"How long to hens take to lay eggs?",
                asker:"stephen",
                views:67,
                count:23
              },
              {
                id:7,
                content:"Why are my rabbits dying?",
                asker:"Tony",
                views:987,
                count:23
              },{
                id:8,
                content:"What do pigs eat to grow faster?",
                asker:"cosmas",
                views:764,
                count:34
              },
              {
                id:9,
                content:"How long to hens take to lay eggs?",
                asker:"stephen",
                views:884,
                count:23
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
<<<<<<< HEAD
        
        return  this.state.questions.map((question)=>(    
          <QuestionCard navigation={this.props.navigation} key={question.id} singleQuestion={question} />
=======
        return  this.state.questions.map((question)=>(    
          <QuestionCard n key={question.id} singleQuestion={question} />
>>>>>>> af780c2a13da81a8f3b68ecdada8d7d1caa779ac
        ));

      }


    render() {
      
        return (
            <Container>
                <View style={{height:"10%",marginTop:5,flexDirection:'row', backgroundColor:'#f3f5f7',justifyContent:'space-between',marginLeft:5,marginLeft:5,marginBottom:5}}>
                    <View style={{flex:1,flexDirection:'row',justifyContent:'space-between', marginLeft:5}}>                
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
                <Content style={{flex:1}}>
                    <Card style={{marginLeft:2,marginRight:2}}>
                        {this.renderQuestion()}
                    </Card>
                    
                </Content>
            </Container>
        );
    }
}

export default FarmerQuestions