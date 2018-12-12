import React, { Component } from 'react'
import { View, StyleSheet, Alert, Keyboard, ScrollView, Dimensions } from 'react-native'
import { findIndex, responsiveHeight } from '../../UsableFunctions'
import { YonduInput, YonduPicker, YonduButton, YonduMessageBox } from '../../components/YonduComp'
import Icon from 'react-native-vector-icons/Ionicons'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Axios from 'axios'
// const axios = require('axios');
// axios.defaults.headers.post['Content-Type'] = 'application/json';

class FieldInquireView extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: navigation.getParam('title', "Inquire"),
            headerLeft: <Icon style={styles.iconWrap} name='md-arrow-round-back' size={30}
                        onPress={() => navigation.goBack()} color={'white'}/>
        }
    }

    render() {
        let data = this.props.navigation.getParam('data', null)

        const yupSchema = Yup.object().shape({
            name: Yup.string().required('Required'),
            company: Yup.string().required('Required'),
            email: Yup.string().required('Required').email('Not an Email'),
            phone: Yup.string().required('Required').min(11, 'Not a Mobile No.'),
            message: Yup.string().required('Required'),
            solution: Yup.string().required('Required'),
            services: Yup.string().required('Required')
        })

        return (
            <View style={styles.container}>

                <Formik
                    validationSchema={yupSchema}
                    validateOnChange={false}
                    validateOnBlur={false}
                    initialValues=
                    {
                        {
                            solution: '',
                            services: '',
                            name: '',
                            company: '',
                            email: '',
                            phone: '',
                            message: '',
                        }
                    }
                    onSubmit={(values, s) => {
                        Axios({method: 'post',url: 'http://192.168.190.44:3000/qoute_list',data: values})
                        .then(res => console.log(res))
                        .then(val => {
                            console.log(val)
                            this.props.navigation.navigate('Thank')
                        })
                        .catch(err => console.log("SAD LIFE",err))
                        // this.props.navigation.navigate('Thank')
                        
                        // Alert.alert("Success Message", "Quote Success", null, { cancelable: false })
                    }}>

                    {({ handleChange, handleSubmit, values, errors, handleBlur }) => {
                        let pointIndex = findIndex(data, values.solution)
                        return (
                        <ScrollView style={{width:'100%'}}  contentContainerStyle={styles.scrollContainer}>
                            <View style={styles.formikContainer}>
                                <View style={styles.formStyle}>
                                

                                    <YonduPicker
                                        selectedValue={values.solution}
                                        onValueChange={handleChange('solution')}
                                        mode='dropdown'
                                        itemData={values.solution === ''? ["What Solution do you need?",...data]: data}
                                        message={errors.solution} />

                                    <YonduPicker
                                        selectedValue={values.services}
                                        onValueChange={handleChange('services')}
                                        mode='dropdown'
                                        itemData={values.solution === '' ? ["Services"] : data[pointIndex].list}
                                        message={errors.services} />

                                    <YonduInput
                                        onChangeText={handleChange('name')}
                                        onBlur={handleBlur('name')}
                                        value={values.name}
                                        label="Email"
                                        placeholder="Name"
                                        message={errors.name}
                                    />

                                    <YonduInput
                                        onChangeText={handleChange('company')}
                                        onBlur={handleBlur('company')}
                                        value={values.company}
                                        label="Company"
                                        placeholder="Company"
                                        message={errors.company}
                                    />

                                    <YonduInput
                                        onChangeText={handleChange('email')}
                                        onBlur={handleBlur('email')}
                                        value={values.email}
                                        label="Email"
                                        placeholder="Email"
                                        message={errors.email}
                                    />

                                    <YonduInput
                                        onChangeText={handleChange('phone')}
                                        onBlur={handleBlur('phone')}
                                        value={values.phone}
                                        label="Phone Number"
                                        placeholder="Phone Number"
                                        message={errors.phone}
                                    />

                                    <YonduMessageBox
                                        onChangeText={handleChange('message')}
                                        onBlur={handleBlur('message')}
                                        value={values.message}
                                        label="Message"
                                        placeholder="Message"
                                        line={17}
                                        editable={true}
                                        multiline={true}
                                        message={errors.message}
                                    />
                            

                                </View>

                                <View style={styles.lowerButton}>
                                    <YonduButton color={'#66CC99'} title='Submit' buttonPress={() => { handleSubmit() }} />

                                </View>

                            </View>
                        </ScrollView>
                        )
                    }}
                </Formik>
            </View>
        )
    }
}
export default FieldInquireView;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    formikContainer: {
        width: "100%",
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    formStyle: {
        width: "100%",
        alignItems:'center',
        paddingTop: 15,
    },
    inputStyle: {
        width: "90%",
        borderBottomColor: 'gray',
        borderBottomWidth: 1

    },
    pickerStyle: {
        width: "100%",
        height: 40,
        color: 'gray',
        borderBottomWidth: 5,
        borderBottomColor: 'gray',
        borderColor: 'black',
        borderWidth: 5,
        margin: 0,
    },
    pickerHolder: {
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        width: '90%'
    },
    lowerButton: {
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
    iconWrap:{
        paddingLeft:Dimensions.get('window').width * .05,
    }

});