import React, {Component} from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation'

// Views
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
    MainContent: YonduDrawer
  },
  {
    initialRouteName:'Home'
  }
)

const MainContent = createAppContainer(MainSwitch)


