import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { YonduHeader, YonduTextBold, YonduText, YonduButton, YonduInput } from '../../components/YonduComp'
import { Formik } from 'formik'
import { responsiveHeight, responsiveWidth } from '../../UsableFunctions'
import * as Yup from 'yup'
import axios from 'axios'
import Axios from 'axios';
// const axios = require('axios');
axios.defaults.headers.post['Content-Type'] = 'application/json';

class SubWithEmail extends Component {

    render() {
        const yupSchema = Yup.object().shape({
            email: Yup.string().required('Required').email('Not an Email'),
        })
        return (
            <View style={styles.container}>
                <YonduHeader title='Subscribe with Email' leftIcon='md-arrow-round-back' pressLeft={() => this.props.navigation.navigate('Home')} />
        <ScrollView style={{width:'100%'}}  contentContainerStyle={styles.scrollContainer}>

                <View style={styles.descriptionHeader}>

                    <YonduTextBold >NEWS LETTER</YonduTextBold>

                    <View style={styles.subTextStyle}>
                        <YonduText>Get the latest tech news, careers and more</YonduText>
                    </View>
                </View>

                <Formik
                    style={{flex:0.3}}
                    validationSchema={yupSchema}
                    validateOnChange={false}
                    validateOnBlur={false}
                    initialValues=
                    {
                        {
                            email: '',
                        }
                    }
                    onSubmit={(values, s) => {

                        Axios({method: 'post',url: 'http://192.168.190.44:3000/news_letter',data: values})
                        .then(res => console.log(res))
                        .then(val => {
                            console.log(val)
                            this.props.navigation.navigate('Thank')
                        })
                        .catch(err => console.log("SAD LIFE",err))
                        // Alert.alert("Success Message", "Quote Success", null, { cancelable: false })
   
                    }}>

                    {({ handleChange, handleSubmit, values, errors, handleBlur }) => {
                        return (
                        
                            <View style={styles.formikContainer}>
                                <View style={styles.formStyle}>

                                    <YonduInput
                                        onChangeText={handleChange('email')}
                                        onBlur={handleBlur('email')}
                                        value={values.email}
                                        label="Email"
                                        placeholder="Email"
                                        message={errors.email}
                                    />                        

                                </View>

                                <View style={styles.lowerButton}>
                                    <YonduButton color={'#66CC99'} title='Submit' buttonPress={() => { handleSubmit() }} />

                                </View>

                            </View>
                        
                        
                        )
                    }}
                </Formik>
                </ScrollView>

            </View>
        )
    }
}
export default SubWithEmail;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    customHeader: {
        minHeight: responsiveHeight(80),
        backgroundColor: '#66CC99',
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerTitle: {
        flex: 0.9,
        alignItems: 'center'
    },
    headerLeft: {
        flex: 0.15,
        alignItems: 'center'

    },
    headerRight: {
        flex: 0.15,
        alignItems: 'center'
    },
    subTextStyle: {
        width: '60%',
        paddingTop: 7
    },
    descriptionHeader: {
        width: '100%',
        height: responsiveHeight(380),
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    formikContainer: {
        width: "100%",
        alignItems: 'center',
        justifyContent:'space-between',
        height:responsiveHeight(500),
        backgroundColor: '#F5FCFF',
    },
    formStyle: {
        width: "100%",
        alignItems:'center',
        paddingTop: 15,
    },
    lowerButton: {
        justifyContent:'center',
        width: '100%',
        alignItems: 'center',
    },
    inContainer:{
        flex:1,
        justifyContent:'center',
        width: '100%',
        alignItems: 'center',
    },
    scrollContainer:{
        // flex:1,
        // width:'100%',
        minHeight: responsiveHeight(),
        // backgroundColor: 'white',
        
    },
});