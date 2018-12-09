import React from 'react'
import { View, Text, StyleSheet, TextInput, Button, Picker } from 'react-native'

export const YonduMessageBox = props => {
    return (
        <View style={styles.viewStyle}>
        <View style={[styles.inputWrapper,{height: (props.line * 10)}]}>
        <TextInput
                style={[styles.inputStyle, props.inputStyle]}
                {...props}
            />
        </View>
            
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
        paddingLeft:7,
        fontSize:16,

    },
    inputWrapper:{
        // backgroundColor: 'white',
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        width:'100%',
    },
    textStyle:{
        color:'red',
        fontWeight:'bold',
        paddingTop: 5,
        paddingLeft: 7
    }

});