import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import ThanksImage from '../../assets/some/clive-thank-you.png'
import { YonduButton, YonduText, YonduTextBold } from '../../components/YonduComp'
import { responsiveHeight, responsiveWidth } from '../../UsableFunctions'
class ThankYouView extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.thankView}>

                    <Image source={ThanksImage} style={{ width: responsiveWidth(500), height: responsiveHeight(400) }} />

                    <YonduTextBold >Thank you for your inquiry</YonduTextBold>

                    <View style={styles.subTextStyle}>
                        <YonduText>Your message has been sent successfully</YonduText>
                    </View>

                </View>

                <View style={styles.buttonWrapper}>
                    {/* <YonduButton title='Inquire Again' color={'#66CC99'} buttonPress={() => this.props.navigation.navigate('RWhatWeDo')}/> */}
                    <YonduButton title='Back to Home' color={'#66CC99'} buttonPress={() => this.props.navigation.navigate('Home')}/>
                </View>
            </View>
        )
    }
}
export default ThankYouView;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    buttonWrapper: {
        flex: 0.15,
        width: '100%',
        justifyContent:'flex-end'
    },
    thankView: {
        flex: 0.85,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    subTextStyle:{
        width:'60%',
        paddingTop:7
    }

});