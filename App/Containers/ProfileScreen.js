import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View } from 'react-native';

import { Container, Header, Footer, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

// Styles
// import styles from './Styles/SettingScreenStyle'

import artwork from './thumbnail.jpg'

class ProfileScreen extends Component {
  render() {
    return (
      <Container style={[styles.container]}>
        <Content>
          <View style={[styles.header]}>
            <Thumbnail large source={artwork} />
          </View>
          <Card>
            <CardItem>
              <Body>
                <Text>Sylvia</Text>
                <Text note>100 truyện</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
  },
  header: {
    alignItems: 'center',
    paddingTop: 25,
    paddingBottom: 17
  },
  userInfo: {
    flexDirection: 'row',
    paddingVertical: 18,
  },
  bordered: {
    borderBottomWidth: 1,
  },
  section: {
    flex: 1,
    alignItems: 'center'
  },
  space: {
    marginBottom: 3
  },
  separator: {
    alignSelf: 'center',
    flexDirection: 'row',
    flex: 0,
    width: 1,
    height: 42
  },
  buttons: {
    flexDirection: 'row',
    paddingVertical: 8,
  },
  button: {
    flex: 1,
    alignSelf: 'center'
  }
});


const mapStateToProps = (state) => {
  return {
    // ...redux state to props here
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)
