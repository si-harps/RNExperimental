import React, { Component } from 'react'
import {
    StyleSheet,
    TouchableHighlight
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';

class ButtonRight extends Component {

    render() {

        const { icon, onPress } = this.props

        return (<TouchableHighlight
            style={{ right: 15 }}
            onPress={ this.props.onPress }
        >
            <Icon
                name={icon}
                style={[ styles.icon ]}
            />
        </TouchableHighlight>)
    }
}

const styles = StyleSheet.create({
    icon: { fontSize: 20 }
})

export default ButtonRight
