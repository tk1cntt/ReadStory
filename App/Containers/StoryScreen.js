import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Icon } from 'native-base';
import {
  LoginButton,
  AccessToken
} from 'react-native-fbsdk';

// Styles
import styles from './Styles/StoryScreenStyle'

class StoryScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Stories',
    tabBarIcon: () => <Icon ios='ios-book' android="md-book" style={{fontSize: 24, color: 'white'}}/>
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <Text>HomeScreen</Text>
          <LoginButton
            publishPermissions={["publish_actions"]}
            onLoginFinished={
              (error, result) => {
                if (error) {
                  alert("login has error: " + result.error);
                } else if (result.isCancelled) {
                  alert("login is cancelled.");
                } else {
                  AccessToken.getCurrentAccessToken().then(
                    (data) => {
                      alert(data.accessToken.toString())
                    }
                  )
                }
              }
            }
            onLogoutFinished={() => alert("logout.")} />
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
