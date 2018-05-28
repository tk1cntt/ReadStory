import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Animated, Easing } from 'react-native';

// import screen
import TrendingScreen from './TrendingScreen';
import PlayNowScreen from './PlayNowScreen';

const LaunchScreen = StackNavigator(
  {
    Trending: { screen: TrendingScreen },
    Library: { screen: TrendingScreen },
    Search: { screen: TrendingScreen },
    PlayNow: { screen: PlayNowScreen },
  },
  {
    navigationOptions: { title: 'Welcome', header: null },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 0,
        timing: Animated.timing,
        easing: Easing.step0,
      },
    }),
  },
);

export default LaunchScreen;
