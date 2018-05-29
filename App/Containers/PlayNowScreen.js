import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon } from 'native-base';

// Styles
import styles from './Styles/SettingScreenStyle';

import Player from '../Components/Player';

class PlayNowScreen extends Component {
  static navigationOptions = {
    header: null,
    tabBarLabel: 'Play Now',
    tabBarIcon: () => (
      <Icon
        type="EvilIcons"
        name="ei-play"
        style={{ fontSize: 20, color: 'white' }}
      />
    ),
  };

  render() {
    return <Player playbackState={this.props.playbackState} playbackTrack={this.props.playbackTrack} navigation={this.props.navigation} />;
  }
}

const mapStateToProps = state => {
  return {
    playbackState: state.playback.playbackState,
    playbackTrack: state.playback.playbackTrack,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlayNowScreen);
