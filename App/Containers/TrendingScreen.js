import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  Platform,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from 'react-native';

import { Icon } from 'native-base';

import Footer from '../Components/Footer';
import { TrackList } from '../Components/TrackList';
import SplashScreen from '../Components/SplashScreen';
import LinearGradient from 'react-native-linear-gradient';

let defaultIcon = require('../Images/default-icon.png');

const songs = require('./data.json');

class TrendingScreen extends Component {
  static navigationOptions = {
    header: null,
    tabBarLabel: 'Trending',
    tabBarIcon: () => (
      <Icon
        ios="ios-book"
        android="md-book"
        style={{ fontSize: 24, color: 'white' }}
      />
    ),
  };

  constructor(props) {
    super(props);
    this.state = {
      trendingSongs: [],
      randomArray: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.getSongs();
    this.randomNumber();
  }

  getSongs() {
    this.setState({ loading: true });
    this.setState({ trendingSongs: songs });
  }

  randomNumber() {
    let randomArray = [];
    while (randomArray.length < 10) {
      let num = Math.floor(Math.random() * 100);
      if (!randomArray.includes(num)) {
        randomArray.push(num);
      }
    }
    this.setState({ randomArray, loading: false });
  }

  navigateTo = (screen, song) => {
    this.props.navigation.navigate(screen, { song });
  };

  render() {
    var trending = this.state.trendingSongs;
    var top100Songs = <View />;
    var artistView = <View />;
    var randomIndex = this.state.randomArray[0];
    if (trending.length > 0) {
      top100Songs = trending.map((song, index) => {
        return (
          <TrackList
            thumbnail={song.thumbnail}
            song={song}
            key={song.title + index}
          />
        );
      });
      artistView = trending.map((song, index) => {
        if (this.state.randomArray.includes(index)) {
          return (
            <View key={index} style={styles.trendingView}>
              <TouchableOpacity
                style={{ height: 110, paddingLeft: 10, paddingTop: 10 }}
                onPress={() => console.log(song)}
              >
                <Image
                  style={styles.trendingImage}
                  source={song.cover ? { uri: song.cover } : defaultIcon}
                />
              </TouchableOpacity>
              <View
                style={{ backgroundColor: '#FFFFFF', height: 60, width: 100 }}
              >
                <Text style={styles.trendingTitle}>{song.artist}</Text>
              </View>
            </View>
          );
        }
      });
    }
    if (this.state.loading) {
      return <SplashScreen />;
    } else {
      if (trending[randomIndex] === undefined) return <SplashScreen />;
      else
        return (
          <View style={styles.container}>
            <LinearGradient
              colors={['#7AFFA0', '#62D8FF']}
              style={{ height: 5, width: Dimensions.get('window').width }}
            />
            <View
              style={{
                height: 220,
                width: Dimensions.get('window').width,
                backgroundColor: '#000',
              }}
            >
              <ImageBackground
                source={
                  trending[randomIndex].cover
                    ? { uri: trending[randomIndex].cover }
                    : defaultIcon
                }
                style={styles.backgroundImage}
              >
                <Text style={styles.trendingArtist}>TRENDING ARTIST</Text>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={true}
                  showsHorizontalScrollIndicator={false}
                >
                  {artistView}
                </ScrollView>
              </ImageBackground>
            </View>
            <Text style={styles.heading}>TODAY{"'"}S TOP 100 SONGS</Text>
            <ScrollView>{top100Songs}</ScrollView>
            <Footer
              screenName={'Trending'}
              navigation={this.props.navigation}
            />
          </View>
        );
    }
  }
}

export default TrendingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  heading: {
    textAlign: 'center',
    width: Dimensions.get('window').width,
    marginBottom: 10,
    marginTop: 10,
    color: '#4A4A4A',
    fontSize: 20,
  },
  trendingTitle: {
    textAlign: 'center',
    fontSize: 14,
    color: '#000',
    paddingTop: 10,
  },
  trendingImage: {
    resizeMode: 'contain',
    height: 80,
    width: 80,
    borderRadius: Platform.os === 'android' ? 80 : 40,
  },
  trendingView: {
    paddingTop: 15,
    width: 100,
    height: 160,
  },
  backgroundImage: {
    width: '100%',
    height: 210,
  },
  trendingArtist: {
    color: '#fff',
    fontSize: 22,
    paddingTop: 15,
    height: 50,
    textAlign: 'center',
  },
});
