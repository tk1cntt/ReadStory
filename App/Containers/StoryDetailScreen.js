import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  Switch,
  Slider,
  KeyboardAvoidingView,
} from 'react-native';
import { connect } from 'react-redux';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Icon } from 'native-base';

import caykheThumbnail from './cay_khe.jpg';
import chubetihonThumbnail from './chu_be_ti_hon.jpg';
import soduaThumbnail from './so_dua.jpg';
import sutichtraucauThumbnail from './su_tich_trau_cau.jpg';

// Styles
// import styles from './Styles/HomeScreenStyle'

const playlist = [
  {
    key: 'audio01',
    title: 'Cay khe',
    author: 'Chuyen co tich dan gian',
    url: '',
    path: 'cay_khe.mp3',
    thumbnailLocal: caykheThumbnail,
  },
  {
    key: 'audio02',
    title: 'Chu be ti hon',
    author: 'Chuyen co tich dan gian',
    url: '',
    path: 'chu_be_ti_hon.mp3',
    thumbnailLocal: chubetihonThumbnail,
  },
  {
    key: 'audio03',
    title: 'So dua',
    author: 'Chuyen co tich dan gian',
    url: '',
    path: 'so_dua.mp3',
    thumbnailLocal: soduaThumbnail,
  },
  {
    key: 'audio04',
    title: 'Su tich trau cau',
    author: 'Chuyen co tich dan gian',
    url: '',
    path: 'su_tich_trau_cau.mp3',
    thumbnailLocal: sutichtraucauThumbnail,
  },
];

class PlayScreen extends Component {
  static navigationOptions = {
    header: null,
    tabBarLabel: 'Play',
    tabBarIcon: () => (
      <Icon
        ios="ios-home"
        android="md-home"
        style={{ fontSize: 24, color: 'white' }}
      />
    ),
  };

  render() {
    console.log('playlist', playlist);

    return (
      <View style={styles.container}>
        <Text>Story detail</Text>
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

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlayScreen);
