import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, Image} from 'react-native'
import { YonduTextBold, YonduText } from '../../../components/YonduComp'
import XurpassGlobe from '../../../assets/about/logo_xurpas_globe.png'


class AboutYonduView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{alignItems:'center', paddingBottom:30}}>
                    <View style={styles.descriptionHeader}>

                        <YonduTextBold alignText='center'>
                            
                        We create. We innovate. We are the Philippines’ 
                        leading IT solutions that specializes in turning 
                        big ideas into happier technological experiences.
                            
                        </YonduTextBold>
                    </View>
                    <View style={styles.paragraph} >
                        <YonduText indent={"     "} style={{textAlign:'left'}}>
                            Founded in 2001, Yondu has since established itself 
                            as a topnotch IT solutions provider in the Philippines- 
                            connecting the archipelago through creative digital innovation.
                        </YonduText>
                    </View>

                    <View style={styles.paragraph} >
                        <YonduText indent={"     "} style={{textAlign:'left'}}>
                        Our experienced IT professionals confidently guide companies through today’s 
                        complex technological landscape.&nbsp;We don’t just put our clients on the map. 
                        Using the power of technology, we help them stay there, too.
                        </YonduText>
                    </View>

                    <View style={styles.paragraph} >
                        <YonduText indent={"     "} style={{textAlign:'left'}}>
                        Backed by top tech company Xurpas and telco giant, Globe Telecom, Inc., 
                        Yondu has all the tools to transform your big ideas into reality with the 
                        most efficient strategies. May it be web, mobile, software development or systems 
                        integration, we got you all covered.
                        </YonduText>
                    </View>

                    <View style={styles.paragraph} >
                        <YonduText indent={"     "} style={{textAlign:'left'}}>
                        Yondu’s extensive portfolio shows our seamless collaboration with business 
                        partners from the fields of technology, retail, and real estate. It also 
                        shows how we care for our partners, and our hunger to deliver service that is 
                        cut above the rest.
                        </YonduText>
                    </View>

                    {/* <Text style={{fontSize:14, fontWeight:'bold', flexWrap:'wrap', backgroundColor:'green', alignSelf:'stretch', alignItems:'stretch'}}> SAD LIFE TALGA ANG BOHAY</Text> */}
                    

                    <View style={styles.lowImage}>
                        <Image source={XurpassGlobe} style={{width:'100%', height:70}} resizeMethod='resize' resizeMode='contain'/>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
export default AboutYonduView;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    descriptionHeader: {
        width: '92%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingVertical:15
    },
    subTextStyle: {
        width: '60%',
        paddingTop: 7
    },
    paragraph:{
        width: "95%",
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingBottom:30
    },
    lowImage:{
        justifyContent:'flex-start',
        width:'100%',
        paddingBottom: 50
    }
});