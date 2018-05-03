import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { TouchableOpacity, View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import styles from './Styles/MenuItemStyle'

export default class MenuItem extends Component {
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    let item = this.props.item;
    return (
      <TouchableOpacity style={styles.container} >
        <View style={styles.iconItem}>
          <Icon size={36} name={item.icon} />
        </View>
        <View style={styles.textItem}>
          <Text style={styles.boldLabel}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}
