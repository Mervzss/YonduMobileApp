import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import YonduTitle from '../../assets/drawer/yondu_small.png'

class YonduSplashScreen extends Component {
    state={
        isTime: false
    }
    wait = ms => new Promise(resolve => setTimeout(resolve, ms));
    splash = async() =>{
             
        await this.wait(1000)
        await this.setState({isTime: !this.state.isTime})
    }
    componentDidMount(){
        this.splash()
         
    }
    componentDidUpdate(){
        if(this.state.isTime === true){
            this.props.navigation.navigate('Home')
        }
        
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={YonduTitle} resizeMode='contain' resizeMethod='resize' style={{width:'100%', height:40}}/>
            </View>
        )
    }
}
export default YonduSplashScreen;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#66CC99',
    },
});