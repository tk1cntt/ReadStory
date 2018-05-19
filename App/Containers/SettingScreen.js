import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Header, Content, List, ListItem, Text, Icon, Left, Body, Right, Switch } from 'native-base';

// Styles
import styles from './Styles/SettingScreenStyle'

import ProfileScreen from './ProfileScreen'
import LoginSceen from './LoginSceen'

class SettingScreen extends Component {

  static navigationOptions = {
    header: null,
    tabBarLabel: 'Setting',
    tabBarIcon: () => <Icon ios='ios-menu' android="md-menu" style={{fontSize: 24, color: 'white'}}/>
  }

  render() {
    if (this.props.auth) {
      return (
        <ProfileScreen />
      )
    }
    return (
      <LoginScreen />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingScreen)
