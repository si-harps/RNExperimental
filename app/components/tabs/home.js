import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

class HomeTab extends Component {

    render() {

        const { tintColor } = this.props

        return <Icon.TabBarItem
            iconName="facebook"
            backgroundColor="#3b5998"
            onPress={ () => alert('hi') }
        />

        return <View style={[ styles.icon, { backgroundColor: tintColor }]} />
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 20,
        height: 20,
        marginTop: 14

    },
});

export default HomeTab
