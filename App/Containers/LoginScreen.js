import React, { Component } from 'react';
import { Image, Dimensions, View } from 'react-native';
import { connect } from 'react-redux';
import {
  Container,
  Content,
  Button,
  Thumbnail,
  Item,
  Label,
  Input,
  Icon,
  Form,
  Text,
} from 'native-base';

import artwork from './thumbnail.jpg';

// Styles
import styles from './Styles/LoginScreenStyles';

class LoginScreen extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <View style={styles.logo}>
            <Thumbnail large source={artwork} />
          </View>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input secureTextEntry />
            </Item>
          </Form>
          <Button block style={{ margin: 15, marginTop: 30 }}>
            <Text>Sign In</Text>
          </Button>
          <Button
            block
            iconLeft
            style={{ margin: 15, backgroundColor: '#DD5044' }}
          >
            <Icon active name="logo-googleplus" />
            <Text> Login with Google Plus</Text>
          </Button>
          <Button
            block
            iconLeft
            style={{ margin: 15, backgroundColor: '#3B579D' }}
          >
            <Icon active name="logo-facebook" />
            <Text> Login with Facebook</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    // ...redux state to props here
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
