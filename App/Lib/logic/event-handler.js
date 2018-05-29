import { Alert } from 'react-native';
import TrackPlayer from 'react-native-track-player';

import PlaybackActions from '../../Redux/PlaybackRedux';

async function eventHandler(store, data) {
  console.log('Event handler', data);
  switch (data.type) {
    // Forward remote events to the player
    case 'remote-play':
      TrackPlayer.play();
      break;
    case 'remote-pause':
      TrackPlayer.pause();
      break;
    case 'remote-stop':
      TrackPlayer.stop();
      break;
    case 'remote-next':
      TrackPlayer.skipToNext();
      break;
    case 'remote-previous':
      TrackPlayer.skipToPrevious();
      break;
    case 'remote-seek':
      TrackPlayer.seekTo(data.position);
      break;

    // You can make ducking smoother by adding a fade in/out
    case 'remote-duck':
      TrackPlayer.setVolume(data.ducking ? 0.5 : 1);
      break;

    // Playback updates
    case 'playback-state':
      store.dispatch(PlaybackActions.playbackState(data.state));
      break;
    case 'playback-track-changed':
      if (data.nextTrack) {
        const track = await TrackPlayer.getTrack(data.nextTrack);
        store.dispatch(PlaybackActions.playbackTrack(track));
      }
      break;
    case 'playback-error':
      Alert.alert('An error ocurred', data.error);
      break;
  }
}

module.exports = function(store) {
  return eventHandler.bind(null, store);
};
