import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import { mainData } from '../../AllData'


class MainView extends Component {

    render() {
        // let head = this.props.navigation.getParam('header', null)
        return (
            <View style={styles.container}>

                {
                    mainData
                    &&
                    mainData.map((val, index) => {
                        return (
                            <TouchableOpacity key={index} style={styles.itemView} onPress={() => this.props.navigation.navigate(val.headname,{data:val.headname})}>
                                <Text style={{ fontSize: 24, fontWeight:'bold'}}>{val.headname}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
                {/* <Button onPress={() => this.props.navigation.navigate('Content')} title='GOGOGO' /> */}
            </View>
        )
    }
}
export default MainView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    itemView: {
        flex: 1,
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center'
    }
});
