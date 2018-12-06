import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View} from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import MainHome from './src/ViewFactory/Single/MainView'
import YonduDrawer from './src/ViewFactory/Drawer/YonduDrawer'


export default class App extends Component{
  render() {
    return <MainContent/>
  }
}

const MainSwitch = createSwitchNavigator(
  {
    Home: MainHome,
    Content: YonduDrawer
  },
  {
    initialRouteName:'Home'
  }
)

const MainContent = createAppContainer(MainSwitch)


