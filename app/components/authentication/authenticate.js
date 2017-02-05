import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native'

class Login extends Component {

    static navigationOptions = {
        title: 'Authenticating...'
    };

    componentWillMount() {
        setTimeout( () => this.props.navigation.navigate('Home'), 500)
    }

    render() {
        return (
            <View><Text>Authenticating...</Text></View>
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

export default Login
