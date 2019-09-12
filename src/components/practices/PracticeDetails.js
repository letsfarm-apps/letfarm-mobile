import React, { Component } from 'react'
import {View,Text,Platform,StatusBar,Image,ActivityIndicator} from 'react-native'
import { connect } from "react-redux";
import {fetchPracticeDetails} from '../../redux/actions/practice';


import {Content,Container,Header,Left,Icon,Right} from 'native-base'

class PracticeDetails extends Component {
    state = {
        fontLoaded: false,
        title:'Practice Details',
        practice:{}
      }

      componentDidMount(){
        this.fetchPractice();
      }

      fetchPractice = async () =>{
        const id = this.props.navigation.getParam('id', 'NO-ID');
        await this.props.fetchPracticeDetails(id);
        if (this.props.isPracticeDetailsFetched){
            this.setState({practice:this.props.practice})
        }

    }
    render() {
        const {id,title,description}=this.state.practice;
        const {isLoading} =this.props
        return (
            <Container>
                <Header style={[styles.headerStyle,styles.androidHeader]}>
                    <Left>
                        <Icon onPress={()=>this.props.navigation.navigate("Practices")} name="arrow-back" style={styles.leftIcon}/>

                    </Left>
                    <View style={{flex:1,marginLeft:5,justifyContent:'center'}}>
                        <Text style={{color:'white'}}>Practice Details</Text>

                    </View>


                    </Header>
                    {isLoading?
                        <View style={{marginTop:10,alignItems:'center',justifyContent:'center'}}>
                            <ActivityIndicator  />
                        </View>
                    

                    :
                    <Content>

                        <View style={styles.ImageContainer}>
                        <Image source={require('../../../assets/pfarm.jpg')} style={styles.imageStyl}  />
                        <View style={{position: 'absolute', top: 0, left: 5, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'flex-start'}}>
                            <Text style={{color:'white',fontSize:18,fontWeight:'500'}}>{title}</Text>
                            </View>



                        </View>
                        <View style={{paddingTop:5,paddingLeft:5,paddingRight:5}}>
                            <Text style={{flexShrink:1,flexWrap:'wrap'}}>
                                {description}
                            </Text>
                        </View>
                        
                    </Content>
                    
                
                    }
                    


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
        practice: state.practices.practice,
        isLoading: state.practices.isLoading,
        fetchPracticeDetailsError: state.practices.fetchPracticeDetailsError,
        isPracticeDetailsFetched: state.practices.isPracticeDetailsFetched
  
    }
  };

export default connect(mapStateToProps,{fetchPracticeDetails})(PracticeDetails)
