import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { YonduText, YonduTextBold, YonduTextOnImage } from '../../../components/YonduComp'
import ICT from '../../../assets/industries/ict.png'
import {responsiveHeight, responsiveWidth} from '../../../UsableFunctions'
import {industries} from '../../../AllData/Industries'

class IndustriesView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.descriptionHeader}>
                <YonduTextBold >Lorem ipsum dolor sit amet</YonduTextBold>

                <View style={styles.subTextStyle}>
                    <YonduText>consectetur adipiscing elit, sed do eiusmod tempor incididunta</YonduText>
                </View>
                </View>

                <View style={styles.imageHolder}>

                {industries.child.map((val,index)=>{
                    return(
                        <View style={styles.inImage} key={index}>
                        <YonduTextOnImage imageSource={val.image} name={val.headname} />
                        </View>
                    )
                })}
                </View>

            </View>
        )
    }
}
export default IndustriesView;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    subTextStyle: {
        width: '60%',
        paddingTop: 7
    },
    imageHolder:{
        flex:3.8,
        flexDirection:'row',
        width:'100%',
        flexWrap:'wrap'
    },
    inImage:{
        width:'50%',
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:15
    },
    descriptionHeader:{
        width:'100%',
        flex:1.2,
        alignItems:'center',
        justifyContent:'center'
    }

});