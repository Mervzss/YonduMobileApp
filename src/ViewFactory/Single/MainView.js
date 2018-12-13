import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity, ImageBackground } from 'react-native'
import { mainData } from '../../AllData'


class MainView extends Component {

    render() {
        return (
            <View style={styles.container}>

                {
                    mainData
                    &&
                    mainData.map((val, index) => {
                        return (
                            <TouchableOpacity key={index} style={styles.itemView} onPress={() => this.props.navigation.navigate(val.headname,{data:val.headname})}>
                                <ImageBackground source={val.image} style={styles.imageBG}>
                                <Text style={{ fontSize: 24, fontWeight:'bold', color:'white'}}>{val.headname}</Text>
                                </ImageBackground>
                            </TouchableOpacity>
                        )
                    })
                }
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

    },
    imageBG:{
        width:'100%', 
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
