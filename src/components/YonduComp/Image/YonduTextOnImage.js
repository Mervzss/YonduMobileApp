import React from 'react'
import { View, Image } from 'react-native'
import { YonduText } from '../../YonduComp'
import { responsiveHeight, responsiveWidth } from '../../../UsableFunctions'

export const YonduTextOnImage = props => {
    return (
        <View style={{
            width: '100%', alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Image source={props.imageSource} style={{ width: responsiveWidth(150), height: responsiveHeight(80) }} />
            <View style={{height:7}}/>
            <YonduText>{props.name}</YonduText>
        </View>
    )
} 