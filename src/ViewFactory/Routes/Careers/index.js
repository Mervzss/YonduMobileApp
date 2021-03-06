import React from 'react'
import {StyleSheet, Dimensions, View} from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import CareersView from './CareersView'

const styles = StyleSheet.create({
    iconWrap:{
        paddingLeft:Dimensions.get('window').width * .05,
    }
})

const Stack = createStackNavigator(
    {
        RCareers: CareersView
    },
    {
        initialRouteName:'RCareers',
        headerMode:'screen',
        defaultNavigationOptions:({navigation}) => {
            return{
            headerLeft:(<Icon style={styles.iconWrap} name='md-menu' size={30} onPress={() => navigation.toggleDrawer()}/>) ,
            headerRight:<View/>,
            headerTitle: 'Careers',
            headerTitleContainerStyle:{
                justifyContent:'center'
            }
            }
        }
        
    }
)
export default Container = createAppContainer(Stack)



