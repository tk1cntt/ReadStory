import React, { Component } from 'react'
import { Image } from 'react-native';
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Container, Header, Footer, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

import {
  LoginButton,
  LoginManager,
  AccessToken
} from 'react-native-fbsdk';

import firebase from 'react-native-firebase';

import AuthActions from '../Redux/AuthRedux'

// Styles
import styles from './Styles/StoryScreenStyle'

import artwork from './thumbnail.jpg'
import caykheThumbnail from './cay_khe.jpg';
import chubetihonThumbnail from './chu_be_ti_hon.jpg';

class HomeScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: () => <Icon ios='ios-home' android="md-home" style={{fontSize: 24, color: 'white'}}/>
  }

  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }

  /**
   * When the App component mounts, we listen for any authentication
   * state changes in Firebase.
   * Once subscribed, the 'user' parameter will either be null
   * (logged out) or an Object (logged in)
   */
  componentDidMount() {
    this.authSubscription = firebase.auth().onAuthStateChanged((user) => {
      this.setState({
        loading: false,
        user,
      });
    });
  }

  /**
   * Don't forget to stop listening for authentication state changes
   * when the component unmounts.
   */
  componentWillUnmount() {
    this.authSubscription();
  }

  onLoginOrRegisterFB = () => {
    LoginManager.logInWithReadPermissions(['public_profile', 'email'])
      .then((result) => {
        if (result.isCancelled) {
          return Promise.reject(new Error('The user cancelled the request'));
        }
        // Retrieve the access token
        return AccessToken.getCurrentAccessToken();
      })
      .then((data) => {
        this.props.authSuccess(data);
        // Create a new Firebase credential with the token
        const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);
        // Login with the credential
        return firebase.auth().signInAndRetrieveDataWithCredential(credential);
      })
      .then((user) => {
        // If you need to do anything with the user, do it here
        // The user will be logged in automatically by the
        // `onAuthStateChanged` listener we set up in App.js earlier
        console.log(user);
      })
      .catch((error) => {
        const { code, message } = error;
        // For details of error codes, see the docs
        // The message contains the default Firebase string
        // representation of the error
        console.log(error);
        this.props.authFailure();
      });
}

  render () {
    return (
      <Container>
        <Content>
          <Grid>
            <Col style={{ backgroundColor: '#635DB7', height: 200 }}>
			          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={artwork} />
                <Body>
                  <Text>Truyện 18+</Text>
                  <Text note>Truyện người lớn</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={artwork} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 đánh giá</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={caykheThumbnail} />
                <Body>
                  <Text>Cây khế</Text>
                  <Text note>Truyện cổ tích</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={caykheThumbnail} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 bình luận</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={chubetihonThumbnail} />
                <Body>
                  <Text>Chú bé tý hon</Text>
                  <Text note>Truyện cổ tích</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={chubetihonThumbnail} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
			</Col>
            <Col style={{ backgroundColor: '#00CE9F', height: 200 }}>
			          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={artwork} />
                <Body>
                  <Text>Truyện 18+</Text>
                  <Text note>Truyện người lớn</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={artwork} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 đánh giá</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={caykheThumbnail} />
                <Body>
                  <Text>Cây khế</Text>
                  <Text note>Truyện cổ tích</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={caykheThumbnail} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 bình luận</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={chubetihonThumbnail} />
                <Body>
                  <Text>Chú bé tý hon</Text>
                  <Text note>Truyện cổ tích</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={chubetihonThumbnail} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
			</Col>
          </Grid>

        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    authSuccess: (payload) => dispatch(AuthActions.authSuccess(payload)),
    authFailure: () => dispatch(AuthActions.authFailure())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
