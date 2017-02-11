import React, { Component } from 'react'
import {
    Button
} from 'react-native'

class Settings extends Component {

    static navigationOptions = { title: 'Settings' };

    render() {

        const { navigate, goBack } = this.props.navigation

        return (
            <Button
                onPress={() => goBack()}
                title="Settings Screen"
            />
        );
    }
}

export default Settings
