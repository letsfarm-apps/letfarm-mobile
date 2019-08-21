import React, { Component } from 'react'
import { Font} from "expo";
import {View,Text,Platform,StatusBar,TouchableOpacity,ActivityIndicator} from 'react-native'
import AntIcon from 'react-native-vector-icons/AntDesign'
import {Card,Container,Header,Right,Left,Icon,Body,Title,Input,Content} from 'native-base'
import DiseasesCard from './DiseasesCard'
import { connect } from "react-redux";
import {fetchDiseases} from '../../redux/actions/diseases';


class Diseases extends Component {
    state = {
        fontLoaded: false,
        title:'Diseases',
        diseases:[]
      }

      componentDidMount(){
        this.fetchDiseases();
      }
      async componentWillMount() {
        await Font.loadAsync({
          Roboto: require("native-base/Fonts/Roboto.ttf"),
          Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
        });
        this.setState({ fontLoaded: true });
        
      }

      fetchDiseases = async () =>{
            const id = this.props.navigation.getParam('id', 'NO-ID');
            await this.props.fetchDiseases(id);
            if (this.props.isDiseasesFetched){
                this.setState({diseases:this.props.diseases})
            }

        };


      renderDiseases(){
        return  this.state.diseases.map((disease)=>(

            <DiseasesCard  navigation={this.props.navigation} key={disease.id} singleDisease={disease} />
            ));

      }

    render() {
        const {isLoading} =this.props
        return (
            <Container>
                <Header style={[styles.headerStyle,styles.androidHeader]}>
                    <Left>
                        <AntIcon onPress={()=>this.props.navigation.navigate("App")} name="left"  color="white" size={22}/>
                    
                    </Left>
                    <Body>
                        {
                            this.state.fontLoaded ? (
                                <Title style={{color:'white'}}>{this.state.title}</Title>
                            ) : null
                        }
                        
                    </Body>
                    <Right>
                        <Icon name="search" style={styles.rightIcon}/>
                    </Right>
                </Header>
                <View style={{height:"10%",marginTop:5,flexDirection:'row', backgroundColor:'#f3f5f7',justifyContent:'space-between',marginLeft:5,marginRight:5,marginBottom:5}}>
                    <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',marginLeft:5,marginRight:5}}>                
                            <Icon name="search"  style={{fontSize:20,paddingTop:17}}/>
                            <Input style={{marginLeft:10}} placeholder="search..."/>                          
                    </View>
                    
                </View>
                <Content>
                {isLoading?
                            <ActivityIndicator style={{marginTop:10}} />
                        :
                        <Card style={{marginLeft:5,marginRight:5}}>
                            {this.renderDiseases()}
                        </Card>
                                
                            
                        }
                   
                </Content>

            </Container>
        );
    }
}

const styles={
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
        diseases: state.diseases.diseases,
        isLoading: state.diseases.isLoading,
        fetchDiseasesError: state.diseases.fetchDiseasesError,
        isDiseasesFetched:state.diseases.isDiseasesFetched
  
    }
  };
export default connect(mapStateToProps,{fetchDiseases}) (Diseases)