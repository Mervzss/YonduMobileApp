import React from 'react'
import { View, Text, StyleSheet, TextInput, Button, Picker } from 'react-native'

export const YonduInput = props => {
    return (
        <View style={styles.viewStyle}>
            <TextInput
                style={[styles.inputStyle, props.inputStyle]}
                {...props}
            />
            <Text style={styles.textStyle}>{props.message}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        width: "90%",
        alignItems: 'flex-start'
    },
    inputStyle: {
        width: "100%",
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        paddingLeft:7,
        fontSize:16,

    },
    textStyle:{
        color:'red',
        fontWeight:'bold',
        paddingTop: 5,
        paddingLeft: 7
    }

});