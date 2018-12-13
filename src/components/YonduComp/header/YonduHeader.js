import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import {responsiveHeight} from '../../../UsableFunctions'
import Icon from 'react-native-vector-icons/Ionicons'

export const YonduHeader = props =>{
    return(
        <View style={[styles.customHeader, props.style]}>

                    { props.leftIcon ?
                    <View style={styles.headerLeft}>
                    <Icon name={props.leftIcon} size={30} color='white' onPress={props.pressLeft}/>
                    </View>: <View style={styles.headerLeft}/>
                    }

                    <View style={styles.headerTitle}>
                        <Text style={{color:'white', fontSize:18, fontWeight:'bold'}}>{props.title}</Text>
                    </View>
                    
                    {
                        props.rightIcon ?
                        <View style={styles.headerRight}>
                        <Icon name={props.rightIcon} size={30} color='white' onPress={props.pressRight}/>
                        </View>
                        : <View style={styles.headerLeft}/>
                    }
                    

                </View>
    )
}

const styles = StyleSheet.create({
    customHeader:{
        minHeight: responsiveHeight(80),
        width:'100%',
        backgroundColor:'#66CC99',
        flexDirection: 'row',
        alignItems:'center'
    },
    headerTitle:{
        flex:0.7,
        alignItems:'center'
    },
    headerLeft:{
        flex:0.15,
        alignItems:'center'

    },
    headerRight:{
        flex:0.15,
        alignItems:'center'
    }
});