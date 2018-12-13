import React from 'react'
import { Text, StyleSheet } from 'react-native'

export const YonduTextBold = props =>{
    return(<Text style={[styles.textBold, {textAlign: props.alignText}, props.style]}>{props.indent}{props.children}</Text>)
}

const styles = StyleSheet.create({
    textBold: {
        fontSize: 22,
        fontWeight: 'bold'
    },

});