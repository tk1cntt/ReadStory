import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native'
import { NavigationComponent } from 'react-native-material-bottom-navigation'
import { TabNavigator, StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons'

// import screen
import HomeScreen from './HomeScreen'
import StoryScreen from './StoryScreen'
import StoryDetailScreen from './StoryDetailScreen'
import SettingScreen from './SettingScreen'

export const ContentStack = StackNavigator({
  Content: { screen: StoryScreen },
  ContentDetail: { screen: StoryDetailScreen }
});

export const SettingsStack = StackNavigator({
  Settings: { screen: SettingScreen }
});

const LaunchScreen = TabNavigator(
  {
    HomeTab: { screen: HomeScreen },
    StoryTab: { screen: StoryDetailScreen },
    SettingTab: { screen: SettingsStack }
  },
  {
    tabBarPosition: 'top',
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
