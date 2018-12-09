import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import {whatWeDo} from '../../../AllData/WhatWeDo'
import {YonduButton} from '../../../components/YonduComp'
import {responsiveHeight,responsiveWidth} from '../../../UsableFunctions/Responsive'

class WhatWeDoView extends Component {
    render() {
        // let data = this.props.navigation.getParam('data', null)
        return (
            <View style={styles.container}>
            <View style={styles.upperView}> 
            <ScrollView  contentContainerStyle={styles.scrollContainer}>

                {
                    whatWeDo
                    &&
                    whatWeDo.child.map((val, index) => {
                        return (
                            <View key={index} style={styles.itemContainer}>
                                <View style={styles.withIcon}>
                                    <Icon style={{paddingLeft:responsiveWidth(40)}} name={val.icon} size={35}/>
                                    <Text style={{ fontSize: 25, color:'black', fontWeight:'bold', paddingLeft:responsiveWidth(30)}}>{val.headname}</Text>
                                </View>
                                {val.list.map((val, index) => {
                                    return (
                                    <Text style={{ fontSize: 18, paddingLeft:responsiveWidth(75),paddingTop:responsiveHeight(5),margin:2}}
                                     key={index}>
                                     {val}
                                     </Text>
                                     )
                                })}
                            </View>
                        )
                    })
                }

            </ScrollView>
            </View>
            <View style={styles.lowerButton}>
            <YonduButton title="Get a Quota" buttonPress={() => this.props.navigation.navigate('RInqure',{title:'Get a Quote', data: whatWeDo.child })} color={'#66CC99'}/>
            </View>
            
             {/* <View style={styles.lowerButton}>
                <TouchableOpacity style={styles.buttonStyle} onPress={() => this.props.navigation.navigate('RInqure',{title:'Get a Quote', data: whatWeDo.child })}>
                        <Text style={{fontSize:20, color:'white'}}>Get a Quota</Text>
                </TouchableOpacity>
            </View> */}

            </View>
        )
    }
}
export default WhatWeDoView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // minHeight: Dimensions.get('window').height ,
        justifyContent:'space-between',
        backgroundColor: 'white',
        // paddingVertical: 15
    },
    scrollContainer:{
        // flex:1,
        minHeight: responsiveHeight(),
        backgroundColor: 'white',
    },
    itemContainer:{
        justifyContent:'center',
        alignItems:'flex-start',
        paddingVertical:responsiveHeight(15),
        elevation:20,
        borderLeftColor:'#66CC99',
        borderLeftWidth: responsiveWidth(15),
        backgroundColor:'white',
        margin:responsiveHeight(15),
        paddingLeft:responsiveWidth(5),
               
    },
    withIcon:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    upperView:{
        flex:0.92,
    },
    lowerButton:{
        flex:0.08,
        width:'100%',
        alignItems:'center',
    },
});
