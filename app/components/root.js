import React, { Component} from 'react';
import {
    AppRegistry,
    Text,
    View,
    Button
} from 'react-native';

import AppNavigator from '../appNavigator'
import TabNavigator from '../tabNavigator'
import CardNavigator from '../cardNavigator'

export default class Root extends Component {

    render() {
        return (
            <AppNavigator />
        );
    }
}
