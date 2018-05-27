import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  AsyncStorage,
  Image,
  Dimensions,
  Platform,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Alert,
  AlertIOS,
} from 'react-native';

import { Icon } from 'native-base';

// import { getTrending } from './../../common/helpers'
// import Footer from '../../common/Footer'
import { TrackList } from '../Components/TrackList';
// import PopupModal from '../../common/PopupModal'
import SplashScreen from '../Components/SplashScreen';
import LinearGradient from 'react-native-linear-gradient';
// import { removeFromLibrary, addToLibrary } from './../../common/helpers'

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
      popupModal: false,
      openPlaylist: false,
      fetchFailed: [],
    };
  }

  componentDidMount() {
    this.getSongs();
    this.randomNumber();
  }

  getSongs() {
    this.setState({ loading: true });
    this.setState({ trendingSongs: songs, loading: false });
    /*
    AsyncStorage.getItem('trendingSongs', (err, res) => {
      if(res)
        this.setState({trendingSongs: JSON.parse(res), loading: false})
      else
        getTrending((trendingSongs) => {
          this.setState({trendingSongs, loading: false})
        })
    })
    */
  }

  randomNumber() {
    let randomArray = [];
    while (randomArray.length < 10) {
      let num = Math.floor(Math.random() * 100);
      if (!randomArray.includes(num)) {
        randomArray.push(num);
      }
    }
    this.setState({ randomArray });
  }

  openModal(song) {
    this.setState({ popupModal: true, selectedSong: song });
  }

  closeModal = (action, data, operation) => {
    console.log(action, data, operation);
    /*
    if(action === 'Search'){
      this.setState({popupModal: false})
      this.navigateTo('Search', data)
    }
    else if (action === 'Library') {
      this.setState({popupModal: false})
      if(operation === 'add'){
        AsyncStorage.getItem('library', (err, res) => {
          let library = res ? JSON.parse(res) : []
          let flag = false
          for(let i = 0; i < library.length; i++){
            if(library[i].title === data.title){
              flag = true
              break
            }
          }
          if(!flag){
            library.push(data)
            AsyncStorage.setItem('library', JSON.stringify(library))
          }
          else{
            Alert.alert(
              'Song already exists',
            )
          }
        })
      }
      else{
        removeFromLibrary(data, res => {})
      }
    }
    else if (action === 'Playlists') {
      this.setState({openPlaylist: true, songToBeAdded: data})
      AsyncStorage.getItem('playlists', (err, res) => {
        this.setState({playlistName: res ? Object.keys(JSON.parse(res)) : []})
      })
    }
    else if (action === 'Cancel Create') {
      this.setState({openPlaylist: true, addPlaylistModal: false})
    }
    else if(action === 'Create'){
      AsyncStorage.getItem('playlists', (err, res) => {
        let playlists = res ? JSON.parse(res) : {}
        if(!Object.keys(playlists).includes(data)){
          playlists[data] = []
          let { playlistName } = this.state
          playlistName.push(data)
          this.setState({playlistName, addPlaylistModal: false})
          AsyncStorage.setItem('playlists', JSON.stringify(playlists))
        }
        else{
          Alert.alert(
            'Playlist already exists',
          )
        }
      })
      // console.log('creating palylist');
    }
    else{
      this.setState({popupModal: false, openPlaylist: false})
    }
    */
  };

  addToPlaylist = playlistName => {
    console.log(playlistName);
    /*
    const { songToBeAdded } = this.state
    this.setState({popupModal: false, openPlaylist: false})
    AsyncStorage.getItem('playlists', (err, res) => {
      let playlists = res ? JSON.parse(res) : {}
      let flag = false
      for(let i = 0; i < playlists[playlistName].length; i++){
        if(playlists[playlistName][i].title === songToBeAdded.title){
          flag = true
          break
        }
      }
      if(!flag){
        playlists[playlistName].push(songToBeAdded)
        AsyncStorage.setItem('playlists', JSON.stringify(playlists))
      }
      else{
        Alert.alert(
          'Song already exists',
        )
      }
    })
    */
  };

  createPlaylist = () => {
    this.setState({ addPlaylistModal: true });
  };

  navigateTo = (screen, song) => {
    this.props.navigation.navigate(screen, { song });
  };

  playSong = index => {
    this.props.navigation.navigate('Player', {
      index,
      storageKey: 'trendingSongs',
    });
  };

  onError = id => {
    let { fetchFailed } = this.state;
    fetchFailed.push(id);
    this.setState({ fetchFailed });
  };

  render() {
    var trending = this.state.trendingSongs;
    var List = <View />;
    var artistView = <View />;

    var randomIndex = this.state.randomArray[0];
    if (trending.length > 0) {
      List = trending.map((item, index) => {
        return (
          <TrackList
            title={item.title}
            artist={item.artist}
            thumbnail={item.thumbnail}
            song={item}
            openModal={this.openModal.bind(this)}
            playSong={this.playSong}
            index={index}
            onError={this.onError}
            fetchFailed={this.state.fetchFailed}
            key={item.title + index}
          />
        );
      });
      artistView = trending.map((item, index) => {
        if (this.state.randomArray.includes(index)) {
          return (
            <View key={index} style={styles.trendingView}>
              <TouchableOpacity
                style={{ height: 110, paddingLeft: 10, paddingTop: 10 }}
                onPress={() =>
                  this.props.navigation.navigate('Search', { song: item })
                }
              >
                <Image
                  style={styles.trendingImage}
                  source={item.cover ? { uri: item.cover } : defaultIcon}
                />
              </TouchableOpacity>
              <View
                style={{ backgroundColor: '#FFFFFF', height: 60, width: 100 }}
              >
                <Text style={styles.trendingTitle}>{item.artist}</Text>
              </View>
            </View>
          );
        }
      });
    }
    if (this.state.loading) {
      return <SplashScreen />;
    } else {
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
              source={{
                uri: trending[randomIndex]
                  ? trending[randomIndex].cover
                  : require('../Images/default-icon.png'),
              }}
              style={styles.backgroundImage}
            >
              <Text style={styles.trendingArtist}>TRENDING ARTIST</Text>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={true}
                contentContainerStyle={{ width: this.state.datesLength * 90 }}
                showsHorizontalScrollIndicator={false}
              >
                {artistView}
              </ScrollView>
            </ImageBackground>
          </View>
          <Text style={styles.heading}>TODAY{"'"}S TOP 100 SONGS</Text>
          <ScrollView>{List}</ScrollView>
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
