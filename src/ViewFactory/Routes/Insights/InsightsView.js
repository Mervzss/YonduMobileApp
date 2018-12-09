import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { responsiveHeight, responsiveWidth } from '../../../UsableFunctions'

class InsightsView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.mainContainer}>
                    <View style={styles.leftText}>
                        <Text style={{ fontSize: 20, color: 'black' }}>Lorem ipsum dolor sit amet</Text>
                        <Text style={{ paddingBottom: 10, fontSize: 14 }} numberOfLines={2}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,</Text>
                        <Text style={{ color: '#4ABFFC', fontSize: 16, fontStyle: 'italic' }}>SOLUTIONS - Nov-7-2018</Text>
                    </View>
                    <View style={styles.rightImage}>
                        <Image source={null} style={{ width: 75, height: 75, backgroundColor: 'gray' }} />
                    </View>

                </TouchableOpacity>

            </View>
        )
    }
}
export default InsightsView;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    mainContainer: {
        width: '100%',
        padding: 10,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    leftText: {
        flexDirection: 'column',
        width: '78%',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    rightImage: {
        width: '22%',
        justifyContent: 'center',
        alignItems: 'center'
    }

});