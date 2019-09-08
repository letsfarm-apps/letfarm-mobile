import React, { Component } from 'react'
import {View,Text,Platform,StatusBar,ActivityIndicator} from 'react-native'
import { connect } from "react-redux";
import {fetchDiseaseDetails} from '../../redux/actions/diseases';
import {Content,Container,Header,Left,Icon,Right} from 'native-base'

class DiseaseDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
          disease:{}
        };
      }

      componentDidMount(){
        this.fetchDisease();
      }

      fetchDisease = async () =>{
        const id = this.props.navigation.getParam('id', 'NO-ID');
        await this.props.fetchDiseaseDetails(id);
        if (this.props.isDiseaseDetailsFetched){
            this.setState({disease:this.props.disease})
        }

    }
    render() {
        const {id,title,description,signs,symptoms,treatment}=this.state.disease;
        const {isLoading} =this.props
        
        return (
            <Container>
                <Header style={[styles.headerStyle,styles.androidHeader]}>
                    <Left>
                        <Icon onPress={()=>this.props.navigation.navigate("Diseases")} name="arrow-back" style={styles.leftIcon}/>
                        
                    </Left>
                    <View style={{flex:1,marginLeft:5,justifyContent:'center'}}>
                        <Text style={{color:'white'}}>Disease Details</Text>

                    </View>
                </Header>
                {isLoading?
                    <View style={{marginTop:10,alignItems:'center',justifyContent:'center'}}>
                        <ActivityIndicator  />
                    </View>

                :
                <Content>
                        <View style={{paddingLeft:5,paddingRight:10,paddingTop:10}}>
                            <Text style={{fontWeight:'bold',fontSize:18,paddingBottom:5}}>{title}</Text>
                            <Text style={{flexWrap:'wrap'}}>
                                {description}
                            </Text>
                        </View>
                        <View style={{paddingLeft:5,paddingRight:10,paddingTop:10}}>
                            <Text style={{fontWeight:'bold',fontSize:18,paddingBottom:5}}>Signs</Text>
                            <Text style={{flexWrap:'wrap'}}>
                               {signs}
                                
                            </Text>
                        </View>
                        <View style={{paddingLeft:5,paddingRight:10,paddingTop:10}}>
                            <Text style={{fontWeight:'bold',fontSize:18,paddingBottom:5}}>Symptoms</Text>
                            <Text style={{flexWrap:'wrap'}}>
                               {symptoms}
                                
                            </Text>
                        </View>
                        <View style={{paddingLeft:5,paddingRight:10,paddingTop:10}}>
                            <Text style={{fontWeight:'bold',fontSize:18,paddingBottom:5}}>Treatment</Text>
                            <Text style={{flexWrap:'wrap'}}>
                                {treatment}
                            </Text>
                        </View>
                    </Content>

                }
                
            </Container>
        )
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
        disease: state.diseases.disease,
        isLoading: state.diseases.isLoading,
        fetchDiseaseDetailsError: state.diseases.fetchDiseaseDetailsError,
        isDiseaseDetailsFetched: state.diseases.isDiseaseDetailsFetched
  
    }
  };
export default connect(mapStateToProps,{fetchDiseaseDetails})(DiseaseDetails)