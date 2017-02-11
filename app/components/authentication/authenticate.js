import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Button,
    TouchableHighlight
} from 'react-native'

class Authenticate extends Component {

    static navigationOptions = {
        title: 'Authentication',
        header: {
            title: 'Authenticate'
        }
    }

    constructor(props) {
        super(props)

        this.state = {
            value: 'Let me in!'
        }
    }

    authenticate() {
        this.setState({ value: 'Authenticating...' })
        this.props.authenticate()
    }

    render() {
        return (
            <TouchableHighlight
                style={styles.button}
                onPress={() => this.authenticate()}
            >
            <Text>{ this.state.value }</Text>
        </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({

    button: {
        position: 'absolute',
        top: 50,
        left: 0,
        right: 0
    }

})

export default Authenticate
