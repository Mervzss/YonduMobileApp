import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Dimensions} from 'react-native'
import {createDrawerNavigator, createAppContainer} from 'react-navigation'

import SubMainView from '../Single/SubMainView'
import {mainData} from '../../AllData'


const YonduDrawer = createDrawerNavigator(
    {
        MainDrawer: SubMainView
    },
    {
        initialRouteName:'MainDrawer',
        contentComponent: props => (
            <View style={styles.container}>
                {mainData.map((val,index) =>{
                    return(
                    <TouchableOpacity key={index} style={styles.itemView} onPress={() => 
                        {props.navigation.closeDrawer()
                        props.navigation.navigate('MainDrawer', {data: val.child})}}>
                        <Text style={{ fontSize: 20, fontWeight:'bold'}}>{val.headname}</Text>
                    </TouchableOpacity>
                    )
                })}
            </View>
        )
    }
)

export default DrawerContent = createAppContainer(YonduDrawer)

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    itemView: {
        height: Dimensions.get('window').height * .10,
        width: "100%",
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: Dimensions.get('window').height * .05
    }
  });
  