import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class CareersView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>CareersView</Text>
            </View>
        )
    }
}
export default CareersView;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});