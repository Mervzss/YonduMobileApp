import React from 'react'
import {StyleSheet, Dimensions, View} from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import WhatWeDoView from './WhatWeDoView'
import FieldInquireView from '../../Single/FieldInquire'
import ThankYouView from '../../Single/ThankYouView'

const styles = StyleSheet.create({
    iconWrap:{
        paddingLeft:Dimensions.get('window').width * .05,
    }
})

const Stack = createStackNavigator(
    {
        RWhatWeDo: WhatWeDoView,
        RInqure: FieldInquireView,
        RThank: ThankYouView
    },
    {
        initialRouteName:'RWhatWeDo',
        headerMode:'screen',
        defaultNavigationOptions:({navigation}) => {
            return{
            headerLeft:(<Icon style={styles.iconWrap} name='md-menu' size={30} onPress={() => navigation.toggleDrawer()}/>) ,
            headerRight:<View/>,
            headerTitle: 'What We Do',
            headerTitleContainerStyle:{
                justifyContent:'center'
            }
            }
        }
        
    }
)
export default Container = createAppContainer(Stack)



