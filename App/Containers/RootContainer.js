import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import ReduxNavigation from '../Navigation/ReduxNavigation'
import { connect } from 'react-redux'
import StartupActions from '../Redux/StartupRedux'
import ReduxPersist from '../Config/ReduxPersist'

import { AccessToken } from 'react-native-fbsdk';
import AuthActions from '../Redux/AuthRedux'

// Styles
import styles from './Styles/RootContainerStyles'

class RootContainer extends Component {
  componentDidMount () {
    // if redux persist is not active fire startup action
    if (!ReduxPersist.active) {
      this.props.startup()
    }
    AccessToken.getCurrentAccessToken().then((data) => {
      this.props.authSuccess(data);
    })
    .catch((error) => {
      this.props.authFailure();
    });
  }

  render () {
    return (
      <View style={styles.applicationView}>
        <StatusBar barStyle='light-content' />
        <ReduxNavigation />
      </View>
    )
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup()),
  authSuccess: (payload) => dispatch(AuthActions.authSuccess(payload)),
  authFailure: () => dispatch(AuthActions.authFailure())
})

export default connect(null, mapDispatchToProps)(RootContainer)
