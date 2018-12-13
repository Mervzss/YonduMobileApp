import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { insights } from '../../../AllData/Insights'

class InsightsView extends Component {
    render() {
        return (
            <View style={styles.container}>
                
                {
                    insights.data.map((val, index) => {
                    return (
                        <TouchableOpacity style={styles.mainContainer} onPress={() => this.props.navigation.navigate('RSelected',{data:val})} key={index}>

                            <View style={styles.leftText}>
                                <Text style={{ fontSize: 20, color: 'black' }}>{val.head}</Text>
                                <Text style={{ paddingBottom: 10, fontSize: 14 }} numberOfLines={2}>{val.content}</Text>
                                <Text style={{ color: '#4ABFFC', fontSize: 16, fontStyle: 'italic' }}>{val.type} - {val.date}</Text>
                            </View>

                            <View style={styles.rightImage}>
                                <Image source={val.image} style={{ width: 75, height: 75, backgroundColor: 'gray' }} resizeMethod='resize' resizeMode='stretch' />
                            </View>

                        </TouchableOpacity>
                    )
                })}


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