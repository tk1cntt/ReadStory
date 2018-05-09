import React, { Component } from 'react'
import {
  ScrollView,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
  KeyboardAvoidingView
} from 'react-native';
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Icon } from 'native-base';
import { FBLogin, FBLoginManager } from 'react-native-facebook-login';
import { Platform } from 'react-native';

import FBLoginView from '../Components/FBLoginView';

// Styles
import styles from './Styles/StoryScreenStyle'

const LoginBehavior = {
  'ios': FBLoginManager.LoginBehaviors.Browser,
  'android': FBLoginManager.LoginBehaviors.Native
}

class StoryScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Stories',
    tabBarIcon: () => <Icon ios='ios-book' android="md-book" style={{fontSize: 24, color: 'white'}}/>
  }

  _handleURL(event) {
    console.log(event.url);
    // Bit of a hack to get the token from this URL...
    // implement yours in a safer way
    console.log(event.url.split('#')[1].split('=')[1].split('&')[0]);
  }

  _facebookLogin() {
    Linking.openURL([
      'https://graph.facebook.com/oauth/authorize',
      '?response_type=token',
      '&client_id='+'2098897717102044',
      '&redirect_uri=fb2098897717102044://authorize',
      '$scope=email,user_friends' // Specify permissions
    ].join(''));
  }

  componentDidMount() {
    Linking.addEventListener('url', this._handleURL);
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <FBLogin
            buttonView={<FBLoginView />}
            loginBehavior={LoginBehavior[Platform.OS]}
            permissions={["email","user_friends"]}
            onLogin={function(e){console.log(e)}}
            onLoginFound={function(e){console.log(e)}}
            onLoginNotFound={function(e){console.log(e)}}
            onLogout={function(e){console.log(e)}}
            onCancel={function(e){console.log(e)}}
            onPermissionsMissing={function(e){console.log(e)}}
          />
          <TouchableOpacity onPress={this._facebookLogin}>
            <Text style={styles.welcome}>
              Facebook Login!
            </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StoryScreen)
