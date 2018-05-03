import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native'
import { NavigationComponent } from 'react-native-material-bottom-navigation'
import { TabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'

// import screen
import HomeScreen from './HomeScreen'
import StoryScreen from './StoryScreen'
import SettingScreen from './SettingScreen'

const LaunchScreen = TabNavigator(
  {
    HomeTab: { screen: HomeScreen },
    StoryTab: { screen: StoryScreen },
    SettingTab: { screen: SettingScreen }
  },
  {
    tabBarComponent: NavigationComponent,
    tabBarPosition: 'bottom',
    initialRouteName: 'HomeTab',
    tabBarOptions: {
      bottomNavigationOptions: {
        labelColor: 'white',
        rippleColor: 'white',
        tabs: {
          HomeTab: {
            barBackgroundColor: '#00796B'
          },
          StoryTab: {
            barBackgroundColor: '#37474F'
          },
          SettingTab: {
            barBackgroundColor: '#00796B'
          }
        }
      }
    }
  }
)

export default LaunchScreen;
