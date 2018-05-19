import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Header, Content, Item, Input, Icon } from 'native-base';

// Styles
import styles from './Styles/SettingScreenStyle'

class LoginSceen extends Component {
  render() {
    return (
      <Container>
        <Content>
          // Text input box with icon aligned to the left
          <Item>
            <Icon active name='home' />
            <Input placeholder='Icon Textbox'/>
          </Item>
          // Text input box with icon aligned to the right
          <Item>
            <Input placeholder='Icon Alignment in Textbox'/>
            <Icon active name='swap' />
          </Item>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginSceen)
