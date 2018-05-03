import React, { Component } from 'react'
import { ScrollView, Text, View, StyleSheet, Switch, Slider, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Icon } from 'native-base';

import { AudioControls } from 'react-native-hue-player';
import thumbnail from './thumbnail.jpg';
// Styles
// import styles from './Styles/HomeScreenStyle'

const playlist = [
  {
    key: 'audio01',
    title: 'Hino do Brasil',
    author: 'Francisco Manuel da Silva',
    url: 'http://www.noiseaddicts.com/samples_1w72b820/4170.mp3',
    thumbnailUri: 'http://www.aprocura.com.br/wp-content/uploads/2012/10/Significado-Cores-Bandeira-do-Brasil.jpg'
  },
  {
    key: 'audio02',
    title: 'Sweet Dreams - Eurythmics (Funk Remix)',
    author: 'Senhor Sider',
    url: '',
    path: 'audio1.mp3',
    thumbnailLocal: thumbnail
  }
];

class HomeScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Home', 
    tabBarIcon: () => <Icon ios='ios-home' android="md-home" style={{fontSize: 24, color: 'white'}}/> 
  } 

  render() {
    console.log('playlist', playlist);

    return (
      <View style={styles.container}>
        <AudioControls
          initialTrack={0}
          playlist={playlist}

          activeColor={'#fdfa04'}
          inactiveColor={'#fdfab1'}

          hasButtonSkipSeconds
          timeToSkip={30}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
