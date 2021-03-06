import React, {Component} from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation'

// Views
import MainHome from './src/ViewFactory/Single/MainView'
import YonduDrawer from './src/ViewFactory/Drawer/YonduDrawer'
import ThankYouView from './src/ViewFactory/Single/ThankYouView'
import YonduSplashScreen from './src/ViewFactory/SplashScreen/YonduSplashScreen'


export default class App extends Component{
  render() {
    return <MainContent/>
  }
}

const MainSwitch = createSwitchNavigator(
  {
    Splash: YonduSplashScreen,
    Home: MainHome,
    MainContent: YonduDrawer,
    Thank: ThankYouView
  },
  {
    initialRouteName:'Splash'
  }
)

const MainContent = createAppContainer(MainSwitch)


