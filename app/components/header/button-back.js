import React, { Component } from 'react'
import {
    StyleSheet,
    TouchableHighlight
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';

class ButtonBack extends Component {

    render() {

        const { icon, onPress } = this.props

        return (<TouchableHighlight
            style={{ left: 10 }}
        >
            <Icon
                name="chevron-left"
                style={[ styles.icon ]}
            />
        </TouchableHighlight>)
    }
}

const styles = StyleSheet.create({
    icon: { fontSize: 30 }
})

export default ButtonBack
