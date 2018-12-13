import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ImageBackground, Image } from 'react-native'
import { createDrawerNavigator, createAppContainer } from 'react-navigation'
import YonduBG from '../../assets/drawer/yondu_bg.jpg'
import YonduImage from '../../assets/drawer/yondu_small.png'

import { RouteArray } from '../Routes'
import { mainData } from '../../AllData'
import { routeGenerate } from '../../UsableFunctions/RouteGenerate'
import SubWithEmailView from '../Single/SubWithEmail'

class Drawer extends React.Component {

    state = {
        selectedItem: this.props.navigation.getParam('data', null)
    }

    updateSelect = (val) => {
        this.props.navigation.closeDrawer()
        this.props.navigation.navigate(val.headname || val, { data: val.child })

        this.setState({
            selectedItem: val.headname || val
        })
    }

    render() {
        let { selectedItem } = this.state
        return (

            <View style={styles.container}>

                <View>

                    {/* UPPER IMAGE */}
                    <ImageBackground source={YonduBG} style={styles.imageBG} resizeMethod='resize'>

                        <View style={styles.inView}>
                            <Image source={YonduImage} style={styles.imageText} resizeMethod='resize' resizeMode='contain' />
                        </View>

                    </ImageBackground>

                    {/* DRAWER ITEMS */}
                    <View>
                        {mainData.map((val, index) => {
                            return (
                                <TouchableOpacity
                                    key={index}
                                    style={styles.itemView}
                                    onPress={this.updateSelect.bind(this, val)}>

                                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: selectedItem === val.headname ? '#66CC99' : 'gray' }}>
                                        {val.headname}
                                    </Text>

                                </TouchableOpacity>
                            )
                        })}
                    </View>

                </View>

                {/* LOWER ITEMS */}
                <TouchableOpacity
                    style={styles.itemView}
                    onPress={this.updateSelect.bind(this, 'RSub')}>

                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: selectedItem === 'Subscribe with Email' ? '#66CC99' : 'gray' }}>
                        Subscribe with Email
                    </Text>

                </TouchableOpacity>

            </View>
        )

    }
}


const YonduDrawer = createDrawerNavigator(
    routeGenerate(mainData, RouteArray, { 'RSub': SubWithEmailView }),
    {
        // initialRouteName: 'MainDrawer',
        contentComponent: props => <Drawer {...props} />

    }
)

export default DrawerContent = createAppContainer(YonduDrawer)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'space-between'
    },
    itemView: {
        height: Dimensions.get('window').height * .07,
        width: "100%",
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: Dimensions.get('window').height * .03
    },
    imageBG: {
        width: '100%',
        height: 140,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        justifyContent: 'center',
        alignItems: 'center',

    },
    imageText: {
        width: '70%',
        height: 35
    },
    inView: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.2)'
    }
});
