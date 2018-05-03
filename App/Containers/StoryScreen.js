import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Icon } from 'native-base';

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
