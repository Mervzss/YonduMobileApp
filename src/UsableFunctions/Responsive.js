import {Dimensions} from 'react-native'

export const responsiveWidth = (val) =>{
    return Dimensions.get('window').width * (val/1000)
}

export const responsiveHeight = (val) =>{
    return Dimensions.get('window').height * (val/1000)
}