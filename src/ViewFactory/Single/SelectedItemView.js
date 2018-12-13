import React, { Component } from 'react'
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native'
import { YonduHeader, YonduTextBold, YonduText } from '../../components/YonduComp'
import { responsiveWidth, responsiveHeight } from '../../UsableFunctions'
import { validateYupSchema } from 'formik';

class SelectedItemView extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        let data = this.props.navigation.getParam('data', null)
        return (
            <View style={styles.container} co>
                <ScrollView style={{width:'100%'}} contentContainerStyle={{alignItems:'center'}}>
                <ImageBackground source={data.image} style={{ width: '100%', height: responsiveHeight(400), backgroundColor: 'gray', justifyContent: 'flex-end' }} resizeMethod='resize' resizeMode='stretch'>
                    <View style={{ height: responsiveHeight(100), backgroundColor: 'rgba(0,0,0, 0.6)', paddingVertical: 5, paddingHorizontal: 20 }}>
                        <YonduTextBold style={{ color: 'white' }}>{data.caption}</YonduTextBold>
                    </View>
                </ImageBackground>

                <View style={{ flexDirection: 'row', width: '100%', paddingHorizontal: responsiveWidth(20), paddingTop: responsiveWidth(15), justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 16 }}>{data.type}</Text>
                    <Text style={{ fontSize: 16 }}>{data.date}</Text>
                </View>

                <View style={{ width: '90%', paddingTop: responsiveHeight(20) }}>
                    <YonduText style={{textAlign:'left'}}>{data.content}</YonduText>
                </View>
                </ScrollView>
                <YonduHeader title='' leftIcon='md-arrow-round-back' rightIcon='md-share' pressLeft={() => this.props.navigation.goBack()}
                    style={{ position: 'absolute', backgroundColor: 'rgba(0,0,0, 0)' }} />
            </View>
        )
    }
}
export default SelectedItemView;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1.2,
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