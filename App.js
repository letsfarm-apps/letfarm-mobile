import React from 'react';
import { StyleSheet,View,Text,Image} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Switch from './src/Switch'
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import combineReducer from './src/redux/reducers/combineReducer';
const store = createStore(combineReducer, applyMiddleware(thunk));

const slides = [
  {
    key: 'interaction',
    text: 'Post Questions and get sincere Responses from fellow farmers',
    title:'Farmer Interactions',
    image: require('./assets/question.png'),
    backgroundColor: '#77d353',
  },
  {
    key: 'disease-database',
    text: 'Have access to a well reasearch database of diseases such that your animals or plants are protected',
    title:'Disease Database',
    image: require('./assets/touch.png'),
    backgroundColor: '#00a6ff',
  },
  {
    key: 'farming-practices',
    text: 'Keep updated about the different the best practices for different farm ventures',
    title:'Farming Practices',
    image: require('./assets/plant.png'),
    backgroundColor: '#976dd0',
  }
];

class App extends React.Component {
  state = {
    showRealApp: false
  }
  _renderItem = (item) => {
    return (
      <View style={[styles.mainContent,{backgroundColor:item.backgroundColor,}]}>
        <Image style={styles.image} source={item.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View >
    );
  };

  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
  };

  render() {
    if (this.state.showRealApp) {
      return (
          <Provider store={store}>
            <Switch navigation={this.props.navigation} />
          </Provider>
          )
        ;
    } else {
      return (
          <AppIntroSlider
      renderItem={this._renderItem}
      slides={slides}
      onDone={this._onDone}
      showPrevButton
      showSkipButton/>

      );
    }
  }
}
const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    alignItems:'center',
    width: 250,
    height: 250,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
    marginTop:20
  },
});


export default App;
