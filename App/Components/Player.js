import React, { Component } from 'react'
import TrackPlayer, { ProgressComponent } from 'react-native-track-player';
import { StyleSheet, Text, TouchableOpacity, View, Dimensions, Image, ToastAndroid, AsyncStorage, AppRegistry, EventEmitter } from 'react-native';
import PlayerController from './PlayerController'
// import Footer from './../../common/Footer'
// import data from '../../common/data.json'
// import { BASE_URL } from '../../utils/config/ApiConf'
import LinearGradient from 'react-native-linear-gradient';

// import { closeApp } from '../../common/helpers'
let { height, width } = Dimensions.get('window')

let trackList = require('../Containers/data.json');

export default class Player extends Component {

	constructor(props) {
		super(props)
		this.state = {
			playbackState: -1,
			track: {},
			trackList: [],
			songs: [],
			lastState: -1
		}
	}

  /*
	componentWillMount() {
		if (this.props.navigation.state.params ) {
			const { index, storageKey, name, search } = this.props.navigation.state.params
			if (search) {
				let trackList = songs;
				trackList.unshift(trackList[index])
				trackList.splice(index + 1, 1)
				let obj, list = []
				trackList.forEach((track, index) => {
					obj = {}
					obj.url = `${BASE_URL}/stream/${track.bp_id}`
					obj.artwork = track.cover
					obj.title = track.title
					obj.id = index.toString()
					obj.bp_id = track.bp_id
					obj.artist = track.artist
					obj.thumbnail = track.thumbnail
					list.push(obj)
				})
				trackList = list
				this.setState({
					track: trackList[0],
					trackList: trackList,
					songs: songs
				})
			}
			else																												//Handle Queues from Library/Trending/Playlist
				AsyncStorage.getItem(storageKey, (err, res) => {
					if (name)
						trackList = JSON.parse(res)[name]
					else
						trackList = JSON.parse(res)
					let songs = trackList
					trackList.unshift(trackList[index])
					trackList.splice(index + 1, 1)
					let obj, list = []
					trackList.forEach(track => {
						obj = {}
						obj.url = track.streamlink
						obj.artwork = track.cover
						obj.title = track.title
						obj.id = index.toString()
						obj.bp_id = track.bp_id
						obj.artist = track.artist
						obj.thumbnail = track.thumbnail
						list.push(obj)
					})
					trackList = list
					this.setState({
						track: trackList[0],
						trackList: trackList,
						songs: songs
					})

				})
		}
		else {																									//Handle Now Playing
			let queue = []
			TrackPlayer.getQueue()
			.then(results => {
				if (results.length === 0)
					this.fetchFromTrending()
				else {
					queue = results
					TrackPlayer.getCurrentTrack()
					.then(async(currTrackId) => {
						let track = await TrackPlayer.getTrack(currTrackId)
						let state = TrackPlayer.STATE_PLAYING
						TrackPlayer.getState()
						.then(state =>{
							state = state
							this.setState({
								track: track,
								playbackState: state
							})
						})

					})
					.catch(err => console.log("Error"))
				}

			})
			.catch(err => {
				this.fetchFromTrending()
			})
		}

	}
  */

	fetchFromTrending() {
    let songs = trackList;
    let obj, list = []
    trackList.forEach((track, index) => {
      obj = {}
      obj.url = track.streamlink
      obj.artwork = track.cover
      obj.title = track.title
      obj.bp_id = track.bp_id
      obj.id = index.toString()
      obj.artist = track.artist
      obj.thumbnail = track.thumbnail
      list.push(obj)
    })
    trackList = list
    this.setState({
      track: trackList[0],
      trackList: trackList,
      songs: songs
    })
	}


	componentDidMount() {
		this.fetchFromTrending();
    //*
		TrackPlayer.setupPlayer();
		/*
    TrackPlayer.registerEventHandler(async (data) => {
      if (data.type === 'playback-track-changed') {
        if (data.nextTrack) {
          const track = await TrackPlayer.getTrack(data.nextTrack);
          this.setState({
            track: track
          })
        }
      } else if (data.type == 'remote-play') {
        TrackPlayer.play()
      } else if (data.type == 'remote-pause') {
        TrackPlayer.pause()
      } else if (data.type == 'remote-next') {
        TrackPlayer.skipToNext()
      } else if (data.type == 'remote-previous') {
        TrackPlayer.skipToPrevious()
      } else if (data.type === 'playback-state') {
        this.setState({
          playbackState: data.state
        })
      }
    });
    // TrackPlayer.reset()
    // this.togglePlayback()
		TrackPlayer.updateOptions({
			stopWithApp: true,
			capabilities: [
				TrackPlayer.CAPABILITY_PLAY,
				TrackPlayer.CAPABILITY_PAUSE,
				TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
				TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
			]
		});
		//*/
	}

	componentWillUnmount() {
		//AppRegistry.removeDeviceListeners()
	}

	togglePlayback = async () => {
		const { playbackState } = this.state
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

	}

	skipToNext = async () => {
		try {
			await TrackPlayer.skipToNext()
		} catch (_) {
			await TrackPlayer.skipToNext()
		}
	}

	skipToPrevious = async () => {
		try {
			await TrackPlayer.skipToPrevious()
		} catch (_) { }
	}

	handleQueue = async (index) => {
		trackList = [...trackList]
		trackList.unshift(trackList[index])
		trackList.splice(index + 1, 1)
		TrackPlayer.reset()
		this.setState({
			track: trackList[0],
			trackList: trackList
		})
		this.togglePlayback()
	}

	shuffleArray = () => {
		trackList = [...trackList]
		for (let i = trackList.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1));
			[trackList[i], trackList[j]] = [trackList[j], trackList[i]];
		}
		TrackPlayer.reset()
		this.setState({
			track: trackList[0],
			trackList: trackList
		})
		this.togglePlayback()
	}

	render() {
		const { playbackState, track, trackList } = this.state
		// console.log('first', (playbackState === TrackPlayer.STATE_BUFFERING || playbackState === TrackPlayer.STATE_NONE || playbackState === TrackPlayer.STATE_STOPPED))
		return (
			<View style={styles.container}>
				<View style={styles.backgroundContainer}>
					<Image
						style={styles.backgroundImage}
						source={{ uri: (playbackState === TrackPlayer.STATE_BUFFERING) ? track.thumbnail : (track.artwork ? track.artwork : track.cover) }}
					/>
				</View>
				<LinearGradient colors={['#7AFFA0', '#62D8FF']} style={{ height: 10, width: Dimensions.get('window').width }} />
				<View style={styles.playerContainer}>
					<PlayerController
						onNext={() => this.skipToNext()}
						onPrevious={() => this.skipToPrevious()}
						onTogglePlayback={() => this.togglePlayback()}
						playbackState={playbackState}
						track={track}
						navigation={this.props.navigation}
						trackList={trackList}
						handleQueue={this.handleQueue}
						shuffleTracks={this.shuffleArray}
						songs={this.state.songs}
					/>
				</View>
			</View>
		)
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
		height: '100%',
		alignItems: 'center',
	},

});
