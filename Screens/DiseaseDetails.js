import React, { Component } from 'react'
import {View,Text,Platform,StatusBar} from 'react-native'
import {Content,Container,Header,Left,Icon,Right} from 'native-base'

class DiseaseDetails extends Component {
   
    render() {
        const { goBack } = this.props.navigation;
        return (
            <Container>
                <Header style={[styles.headerStyle,styles.androidHeader]}>
                    <Left>
                        <Icon onPress={()=>goBack()} name="arrow-back" style={styles.leftIcon}/>
                        
                    </Left>
                    <View style={{flex:1,marginLeft:5,justifyContent:'center'}}>
                        <Text style={{color:'white'}}>Disease Details</Text>

                    </View>
                </Header>
                <Content>
                    <View style={{paddingLeft:5,paddingRight:10,paddingTop:10}}>
                        <Text style={{fontWeight:'bold',fontSize:18,paddingBottom:5}}>Bloat</Text>
                        <Text style={{flexWrap:'wrap'}}>
                            Sed ut perspiciatis unde omnis iste natus error 
                            sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                            inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, 
                            sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                        </Text>
                    </View>
                    <View style={{paddingLeft:5,paddingRight:10,paddingTop:10}}>
                        <Text style={{fontWeight:'bold',fontSize:18,paddingBottom:5}}>Prevention</Text>
                        <Text style={{flexWrap:'wrap'}}>
                            Sed ut perspiciatis unde omnis iste natus error 
                            sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                            inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                            
                        </Text>
                    </View>
                    <View style={{paddingLeft:5,paddingRight:10,paddingTop:10}}>
                        <Text style={{fontWeight:'bold',fontSize:18,paddingBottom:5}}>Symptoms</Text>
                        <Text style={{flexWrap:'wrap'}}>
                            Sed ut perspiciatis unde omnis iste natus error 
                            sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                            inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, 
                            sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                        </Text>
                    </View>
                </Content>
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

export default DiseaseDetails