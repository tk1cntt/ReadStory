import '../Config';
import DebugConfig from '../Config/DebugConfig';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import TrackPlayer from 'react-native-track-player';
import RootContainer from './RootContainer';
import createStore from '../Redux';
import createEventHandler from '../Lib/logic/event-handler';

// create our store
const store = createStore();

/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    );
  }
}

TrackPlayer.setupPlayer();
TrackPlayer.updateOptions({
  stopWithApp: true,
  capabilities: [
    TrackPlayer.CAPABILITY_PLAY,
    TrackPlayer.CAPABILITY_PAUSE,
    TrackPlayer.CAPABILITY_SEEK_TO,
    TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
    TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
  ],
});
TrackPlayer.registerEventHandler(createEventHandler(store));

// allow reactotron overlay for fast design in dev mode
export default (DebugConfig.useReactotron ? console.tron.overlay(App) : App);
