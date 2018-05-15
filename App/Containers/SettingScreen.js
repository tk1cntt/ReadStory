import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Header, Content, List, ListItem, Text, Icon, Left, Body, Right, Separator } from 'native-base';

// More info here: https://facebook.github.io/react-native/docs/flatlist.html
import MenuItem from '../Components/MenuItem'

// Styles
import styles from './Styles/SettingScreenStyle'

class SettingScreen extends Component {

  static navigationOptions = {
    header: null,
    tabBarLabel: 'Setting',
    tabBarIcon: () => <Icon ios='ios-menu' android="md-menu" style={{fontSize: 24, color: 'white'}}/>
  }

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <List>
            <ListItem itemDivider>
              <Text>Menu</Text>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="home" />
              </Left>
              <Body>
                <Text>Home</Text>
              </Body>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="book" />
              </Left>
              <Body>
                <Text>Stories</Text>
              </Body>
            </ListItem>
            <ListItem icon>
             <Left>
               <Icon name="calendar" />
             </Left>
             <Body>
               <Text>History</Text>
             </Body>
           </ListItem>
           <ListItem icon>
             <Left>
               <Icon name="card" />
             </Left>
             <Body>
               <Text>Account</Text>
             </Body>
           </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="contacts" />
              </Left>
              <Body>
                <Text>Friends</Text>
              </Body>
            </ListItem>
            <ListItem itemDivider>
              <Text>Terms of service</Text>
            </ListItem>
            <ListItem icon>
              <Body>
                <Text>Terms and Policies</Text>
              </Body>
            </ListItem>
          </List>
        </Content>
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

export default connect(mapStateToProps, mapDispatchToProps)(SettingScreen)
