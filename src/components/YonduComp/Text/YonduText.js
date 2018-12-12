import React from 'react'
import { Text, StyleSheet } from 'react-native'

export const YonduText = props =>{
    return(<Text style={[styles.subText , props.style]}>{props.indent}{props.children}</Text>)
}

const styles = StyleSheet.create({
    subText: {
        fontSize: 20,
        textAlign:'center'
        // fontWeight:'bold'
    },

});