import React from 'react'
import {StyleSheet, Dimensions, View} from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import InsightsView from './InsightsView'
import SelectedItemView from '../../Single/SelectedItemView'

const styles = StyleSheet.create({
    iconWrap:{
        paddingLeft:Dimensions.get('window').width * .05,
    }
})

const Stack = createStackNavigator(
    {
        RInsights: InsightsView,
        RSelected: SelectedItemView
    },
    {
        initialRouteName:'RInsights',
        headerMode:'screen',
        defaultNavigationOptions:({navigation}) => {
            return{
            headerLeft:(<Icon style={styles.iconWrap} name='md-menu' size={30} onPress={() => navigation.toggleDrawer()} color={'white'}/>) ,
            headerRight:<View/>,
            headerTitle: 'Insights',
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



