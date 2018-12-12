import React from 'react'
import {StyleSheet, Dimensions, View} from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import AboutYonduView from './AboutYonduView'

const styles = StyleSheet.create({
    iconWrap:{
        paddingLeft:Dimensions.get('window').width * .05,
    }
})

const Stack = createStackNavigator(
    {
        RAboutYondu: AboutYonduView
    },
    {
        initialRouteName:'RAboutYondu',
        headerMode:'screen',
        defaultNavigationOptions:({navigation}) => {
            return{
            headerLeft:(<Icon style={styles.iconWrap} name='md-arrow-round-back' size={30}
            onPress={() => navigation.navigate('Home')} color={'white'}/>) ,
            headerRight:<View/>,
            headerTitle: 'About Yondu',
            headerTitleContainerStyle:{
                justifyContent:'center'
            },
            headerStyle:{
                backgroundColor:'#66CC99'
            },
            headerTitleStyle:{
                color:'white'
            }
            }
        }
        
    }
)
export default Container = createAppContainer(Stack)



