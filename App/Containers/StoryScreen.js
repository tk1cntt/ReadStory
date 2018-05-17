import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Header, Footer, Left, Body, Right, Content, Title, List, ListItem, Thumbnail, Icon, Text, Button, Card, CardItem } from 'native-base';

// For empty lists
// import AlertMessage from '../Components/AlertMessage'

import artwork from './thumbnail.jpg'
import caykheThumbnail from './cay_khe.jpg';
import chubetihonThumbnail from './chu_be_ti_hon.jpg';
import soduaThumbnail from './so_dua.jpg';
import sutichtraucauThumbnail from './su_tich_trau_cau.jpg';

// Styles
import styles from './Styles/ContentScreenStyle'

class StoryScreen extends Component {
  static navigationOptions = {
    header: null,
    tabBarLabel: 'Stories',
    tabBarIcon: () => <Icon ios='ios-book' android="md-book" style={{fontSize: 24, color: 'white'}}/>
  }

  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem>
              <Thumbnail square size={80} source={artwork} />
              <Body>
                <Text>Truyen 18+</Text>
                <Text note>Truyen nguoi lon</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Thumbnail square size={80} source={caykheThumbnail} />
              <Body>
                <Text>Cay khe</Text>
                <Text note>Truyen co tich</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Thumbnail square size={80} source={chubetihonThumbnail} />
              <Body>
                <Text>Chu be ti hon</Text>
                <Text note>Truyen co tich</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Thumbnail square size={80} source={soduaThumbnail} />
              <Body>
                <Text>So dua</Text>
                <Text note>Truyen co tich</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Thumbnail square size={80} source={sutichtraucauThumbnail} />
              <Body>
                <Text>Su tich trau cau</Text>
                <Text note>Truyen co tich</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Thumbnail square size={80} source={artwork} />
              <Body>
                <Text>Truyen 18+</Text>
                <Text note>Truyen nguoi lon</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Thumbnail square size={80} source={caykheThumbnail} />
              <Body>
                <Text>Cay khe</Text>
                <Text note>Truyen co tich</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Thumbnail square size={80} source={chubetihonThumbnail} />
              <Body>
                <Text>Chu be ti hon</Text>
                <Text note>Truyen co tich</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Thumbnail square size={80} source={soduaThumbnail} />
              <Body>
                <Text>So dua</Text>
                <Text note>Truyen co tich</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Thumbnail square size={80} source={sutichtraucauThumbnail} />
              <Body>
                <Text>Su tich trau cau</Text>
                <Text note>Truyen co tich</Text>
              </Body>
            </ListItem>
          </List>
        </Content>
        <Footer>
          <Body>
            <CardItem>
              <Thumbnail square size={80} source={artwork} />
              <Body>
                <Text>Su tich trau cau</Text>
                <Text note>Truyen co tich</Text>
              </Body>
              <Button transparent>
                <Icon name="skip-backward" style={{fontSize: 20, color: 'blue'}}/>
              </Button>
              <Button transparent>
                <Icon name="play" style={{fontSize: 20, color: 'blue'}}/>
              </Button>
              <Button transparent>
                <Icon name="skip-forward" style={{fontSize: 20, color: 'blue'}}/>
              </Button>
             </CardItem>
          </Body>
        </Footer>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // ...redux state to props here
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StoryScreen)
