import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
// import {mainData} from '../../AllData'


class SubMainView extends Component {
    render() {
        let data = this.props.navigation.getParam('data', null)
        return (
            <View style={styles.container}>
            <View style={styles.upperView}> 
            <ScrollView  contentContainerStyle={styles.scrollContainer}>

                {
                    data
                    &&
                    data.map((val, index) => {
                        return (
                            <View key={index} style={styles.itemContainer}>
                                <View style={styles.withIcon}>
                                    <Icon style={{paddingLeft:15}} name={val.icon} size={35}/>
                                    <Text style={{ fontSize: 25, color:'black', fontWeight:'bold', paddingLeft:15 }}>{val.headname}</Text>
                                </View>
                                {val.list.map((val, index) => {
                                    return (<Text style={{ fontSize: 18, paddingLeft:35,paddingTop:5, margin:2 }} key={index}>{val}</Text>)
                                })}
                            </View>
                        )
                    })
                }

            </ScrollView>
            </View>

             <View style={styles.lowerButton}>
                <TouchableOpacity style={styles.buttonStyle}>
                        <Text style={{fontSize:20, color:'white'}}>Get a Quota</Text>
                </TouchableOpacity>
            </View>

            </View>
        )
    }
}
export default SubMainView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        minHeight: Dimensions.get('window').height ,
        backgroundColor: 'white',
    },
    scrollContainer:{
        // flex:0.9,
        minHeight: Dimensions.get('window').height,
        backgroundColor: 'white',
    },
    itemContainer:{
        justifyContent:'flex-start',
        alignItems:'flex-start',
        width:'90%',
        borderLeftColor:'#66CC99',
        borderLeftWidth:5,
        margin:15,
        paddingLeft:5,
        // paddingVertical:20,
        elevation:1
        
    },
    withIcon:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    upperView:{
        flex:0.9
    },
    lowerButton:{
        flex:0.1,
        width:'100%',
        alignItems:'center',
    },
    buttonStyle:{
        width:'92%',
        padding:10,
        backgroundColor:'#66CC99',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10

    }
});
