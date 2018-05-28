import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import {
  Container,
  Header,
  Footer,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from 'native-base';

// Styles
import styles from './Styles/StoryScreenStyle';

import artwork from './thumbnail.jpg';
import caykheThumbnail from './cay_khe.jpg';
import chubetihonThumbnail from './chu_be_ti_hon.jpg';

class HomeScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: () => (
      <Icon
        ios="ios-home"
        android="md-home"
        style={{ fontSize: 24, color: 'white' }}
      />
    ),
  };

  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }

  render() {
    return (
      <Container>
        <Content>
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
              <Image
                source={artwork}
                style={{ height: 200, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12</Text>
                </Button>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4</Text>
                </Button>
              </Left>
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
              <Image
                source={caykheThumbnail}
                style={{ height: 200, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon name="thumbs-up" />
                  <Text>12</Text>
                </Button>
                <Button transparent>
                  <Icon name="chatbubbles" />
                  <Text>4</Text>
                </Button>
              </Left>
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
              <Image
                source={chubetihonThumbnail}
                style={{ height: 200, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon name="thumbs-up" />
                  <Text>12</Text>
                </Button>
                <Button transparent>
                  <Icon name="chatbubbles" />
                  <Text>4</Text>
                </Button>
              </Left>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);
