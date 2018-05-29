import React, { Component } from 'react';
import TrackPlayer, { ProgressComponent } from 'react-native-track-player';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Image,
  ToastAndroid,
  AsyncStorage,
  AppRegistry,
  EventEmitter,
} from 'react-native';
import PlayerController from './PlayerController';
import Footer from './Footer';
import LinearGradient from 'react-native-linear-gradient';
let { height, width } = Dimensions.get('window');
let trackList = require('../Containers/data.json');

export default class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playbackState: -1,
      track: {},
      trackList: [],
      songs: [],
    };
  }

  fetchFromTrending() {
    let songs = trackList;
    let obj,
      list = [];
    trackList.forEach((track, index) => {
      obj = {};
      obj.url = track.streamlink;
      obj.artwork = track.cover;
      obj.title = track.title;
      obj.bp_id = track.bp_id;
      obj.id = index.toString();
      obj.artist = track.artist;
      obj.thumbnail = track.thumbnail;
      list.push(obj);
    });
    trackList = list;
    this.setState({
      track: trackList[0],
      trackList: trackList,
      songs: songs,
    });
  }

  componentDidMount() {
    this.fetchFromTrending();
    TrackPlayer.reset();
    this.togglePlayback();
  }

  togglePlayback = async () => {
    const { playbackState } = this.state;
    const currentTrack = await TrackPlayer.getCurrentTrack();
    if (currentTrack == null) {
      TrackPlayer.reset();
      await TrackPlayer.add(trackList);
      TrackPlayer.play();
    } else {
      if (playbackState === TrackPlayer.STATE_PAUSED) {
        TrackPlayer.play();
      } else {
        TrackPlayer.pause();
      }
    }
  };

  skipToNext = async () => {
    try {
      await TrackPlayer.skipToNext();
    } catch (_) {
      await TrackPlayer.skipToNext();
    }
  };

  skipToPrevious = async () => {
    try {
      await TrackPlayer.skipToPrevious();
    } catch (_) {}
  };

  handleQueue = async index => {
    trackList = [...trackList];
    trackList.unshift(trackList[index]);
    trackList.splice(index + 1, 1);
    TrackPlayer.reset();
    this.setState({
      track: trackList[0],
      trackList: trackList,
    });
    this.togglePlayback();
  };

  shuffleArray = () => {
    trackList = [...trackList];
    for (let i = trackList.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [trackList[i], trackList[j]] = [trackList[j], trackList[i]];
    }
    TrackPlayer.reset();
    this.setState({
      track: trackList[0],
      trackList: trackList,
    });
    this.togglePlayback();
  };

  render() {
    const { playbackState, track, trackList } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.backgroundContainer}>
          <Image
            style={styles.backgroundImage}
            source={{
              uri:
                playbackState === TrackPlayer.STATE_BUFFERING
                  ? track.thumbnail
                  : track.artwork
                    ? track.artwork
                    : track.cover,
            }}
          />
        </View>
        <LinearGradient
          colors={['#FFFFFF', '#D8D8D8', '#4A4A4A', '#000000']}
          style={styles.playerContainer}
        >
          <PlayerController
            onNext={() => this.skipToNext()}
            onPrevious={() => this.skipToPrevious()}
            onTogglePlayback={() => this.togglePlayback()}
            playbackState={this.props.playbackState}
            track={this.props.playbackTrack}
            navigation={this.props.navigation}
            trackList={trackList}
            handleQueue={this.handleQueue}
            shuffleTracks={this.shuffleArray}
            songs={this.state.songs}
          />
        </LinearGradient>
        <Footer screenName={'PlayNow'} navigation={this.props.navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  playerContainer: {
    flex: 1,
    backgroundColor: '#000000',
    opacity: 0.6,
    justifyContent: 'center',
    width: '100%',
    height: Dimensions.get('window').height - 80,
    alignItems: 'center',
  },
});
