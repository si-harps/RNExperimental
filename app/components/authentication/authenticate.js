import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Button
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
    }

    authenticate() {
        this.props.authenticate()
    }

    render() {
        return (
            <Button title="authenticate" onPress={() => this.authenticate()} />
        );
    }
}

const styles = StyleSheet.create({

    title: {
        marginBottom: 20,
        fontSize: 22,
        textAlign: 'center'
    },
    container: {
        paddingTop: 60
    },
    button: {
        position: 'absolute',
        top: 0,
        bottom: 0
    }

})

export default Authenticate
