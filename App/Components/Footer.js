import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  ToastAndroid,
  Platform,
  AlertIOS,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

let { width, height } = Dimensions.get('window');

const SCREENS = ['Trending', 'Library', 'Search', 'PlayNow'];

const SCREENICON = {
  Trending: {
    active: require('../Images/top100-active.png'),
    inactive: require('../Images/top100.png'),
  },
  Library: {
    active: require('../Images/library-active.png'),
    inactive: require('../Images/library.png'),
  },
  Search: {
    active: require('../Images/search-active.png'),
    inactive: require('../Images/search.png'),
  },
  PlayNow: {
    active: require('../Images/playing-active.png'),
    inactive: require('../Images/playing.png'),
  },
};

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedScreen: 'Trending',
    };
  }

  navigate(screenName) {
    this.props.navigation.navigate(screenName);
  }

  render() {
    const { screenName } = this.props;
    return (
      <View style={styles.container}>
        {SCREENS.map((screen, index) => (
          <TouchableOpacity
            key={screen + index}
            onPress={() => (screenName === screen ? {} : this.navigate(screen))}
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Image
              source={
                screenName === screen
                  ? SCREENICON[screen].active
                  : SCREENICON[screen].inactive
              }
              style={{ width: 20, height: 20, padding: 5 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}
export default Footer;

const styles = StyleSheet.create({
  container: {
    height: 50,
    width,
    borderTopWidth: 1,
    borderColor: '#EBEBEB',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
  },
});
