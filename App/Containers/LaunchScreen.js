import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

// import screen
import TrendingScreen from './TrendingScreen';
import PlayNowScreen from './PlayNowScreen';

const LaunchScreen = TabNavigator(
  {
    TrendingTab: { screen: TrendingScreen },
    PlayNowTab: { screen: PlayNowScreen },
  },
  {
    tabBarPosition: 'bottom',
    initialRouteName: 'TrendingTab',
    tabBarOptions: {
      bottomNavigationOptions: {
        labelColor: 'white',
        rippleColor: 'white',
        tabs: {
          TrendingTab: {
            barBackgroundColor: '#00796B',
          },
          PlayNowTab: {
            barBackgroundColor: '#37474F',
          },
        },
      },
    },
  },
);

export default LaunchScreen;
