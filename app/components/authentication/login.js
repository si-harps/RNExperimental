import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native'

class Login extends Component {

    static navigationOptions = {
        title: 'Login',
        header: ({ state, setParams }) => ({
            right: (<Button
                onPress={() => this.props.navigation.navigate('Chat', { name: 'Someone' })}
                title="+"
            />)
        })
    };

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.navigate('Home')}
                title="Login"
            />
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
