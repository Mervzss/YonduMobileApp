import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import { createDrawerNavigator, createAppContainer } from 'react-navigation'

import { RouteArray } from '../Routes'
import { mainData } from '../../AllData'
import {routeGenerate} from '../../UsableFunctions/RouteGenerate'

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
                    {mainData.map((val, index) => {
                        return (
                            <TouchableOpacity 
                            key={index} 
                            style={styles.itemView} 
                            onPress={this.updateSelect.bind(this, val)}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', color: selectedItem === val.headname ? '#66CC99' : 'gray' }}>{val.headname}</Text>
                            </TouchableOpacity>
                        )
                    })}
                </View>
                <TouchableOpacity 
                style={styles.itemView} 
                onPress={this.updateSelect.bind(this, 'Subscribe with Email')}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: selectedItem === 'Subscribe with Email' ? '#66CC99' : 'gray' }}>
                    Subscribe with Email
                    </Text>
                </TouchableOpacity>

            </View>
        )

    }
}


const YonduDrawer = createDrawerNavigator(
    routeGenerate(mainData, RouteArray),
    {
        // initialRouteName: 'MainDrawer',
        contentComponent: props => <Drawer {...props} />

    }
)

export default DrawerContent = createAppContainer(YonduDrawer)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between'
    },
    itemView: {
        height: Dimensions.get('window').height * .07,
        width: "100%",
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: Dimensions.get('window').height * .03
    }
});
