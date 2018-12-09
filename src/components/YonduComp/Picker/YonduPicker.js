import React from 'react'
import { View, Text, StyleSheet, Picker } from 'react-native'

export const YonduPicker = props => {
    return (
        <View style={styles.container}>
            <View style={styles.pickerHolder}>
                <Picker
                    {...props}
                    style={styles.pickerStyle}>
                    {props.itemData &&
                        props.itemData.map((val, index) => {
                            return (
                                <Picker.Item
                                    key={index}
                                    label={val.headname || val} value={val.headname || val} />)
                        })}

                </Picker>
            </View>
            <Text style={styles.textStyle}>{props.message}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "90%",
        alignItems: 'flex-start'
    },
    pickerStyle: {
        width: "100%",
        height: 40,
        color: 'gray',
        alignItems: 'center',
        borderBottomWidth: 5,
        borderBottomColor: 'gray',
        borderColor: 'black',
        borderWidth: 5,
        margin: 0,
    },
    pickerHolder: {
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        width: '100%',
    },
    textStyle: {
        color: 'red',
        fontWeight: 'bold',
        paddingTop: 5,
        paddingLeft: 7
    }

});