import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {responsiveHeight} from '../../../UsableFunctions'

export const YonduButton = props =>{
    return(
        <View style={styles.lowerButton}>
                <TouchableOpacity style={[styles.buttonStyle, {backgroundColor: props.color}]} onPress={props.buttonPress}>
                        <Text style={{fontSize:20, color:'white'}}>{props.title}</Text>
                </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    lowerButton:{
        height:responsiveHeight(70),
        width:'100%',
        alignItems:'center',
    },
    buttonStyle:{
        width:'92%',
        padding:10,
        backgroundColor:'#66CC99',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
    }
});